import json
import os
import sys

# Allow imports from the services folder
SERVICES_DIR = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "services"
)

sys.path.insert(0, SERVICES_DIR)

from skill_extractor import extract_skills
from skill_normalizer import normalize_detected_skills
from skill_profiler import build_skill_profile
from role_matcher import match_employee_to_roles
from skill_gap import analyze_skill_gap
from recommendation_engine import recommend_learning


# Project root
BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

DATABASE_DIR = os.path.join(
    BASE_DIR,
    "database"
)


def load_json(filename):
    """Load JSON data from the database folder."""

    file_path = os.path.join(
        DATABASE_DIR,
        filename
    )

    with open(
        file_path,
        "r",
        encoding="utf-8"
    ) as file:
        return json.load(file)


def build_employee_text(employee):
    """
    Combine employee information into text
    that can be analyzed by the AI engine.
    """

    text_parts = []

    text_parts.append(
        employee.get("current_role", "")
    )

    text_parts.append(
        employee.get("career_goal", "")
    )

    for project in employee.get("projects", []):
        text_parts.append(
            project.get("name", "")
        )

        text_parts.append(
            project.get("description", "")
        )

    text_parts.extend(
        employee.get("courses", [])
    )

    text_parts.extend(
        employee.get("certifications", [])
    )

    return " ".join(text_parts)


def analyze_employee(employee_id, target_role_id=None):
    """
    Run the complete TalentFlow AI pipeline.
    """

    employees = load_json("employees.json")
    skills = load_json("skills.json")
    roles = load_json("roles.json")
    courses = load_json("courses.json")
    projects = load_json("projects.json")

    # Find employee
    employee = next(
        (
            employee
            for employee in employees
            if employee["id"] == employee_id
        ),
        None
    )

    if not employee:
        return {
            "success": False,
            "error": "Employee not found"
        }

    # ------------------------------------------------
    # 1. Build employee text
    # ------------------------------------------------

    employee_text = build_employee_text(employee)

    # ------------------------------------------------
    # 2. Extract skills
    # ------------------------------------------------

    extracted_skills = extract_skills(
        employee_text,
        skills
    )

    # ------------------------------------------------
    # 3. Normalize skills
    # ------------------------------------------------

    normalized_skills = normalize_detected_skills(
        extracted_skills,
        skills
    )

    # ------------------------------------------------
    # 4. Add explicitly declared employee skills
    # ------------------------------------------------

    all_skills = normalized_skills.copy()

    for skill in employee.get("skills", []):

        all_skills.append({
            "skill": skill["name"],
            "category": "Employee Profile",
            "source": skill.get(
                "source",
                "explicit"
            ),
            "confidence": skill.get(
                "confidence",
                0.90
            ),
            "evidence": "Employee profile"
        })

    # ------------------------------------------------
    # 5. Build skill profile
    # ------------------------------------------------

    skill_profile = build_skill_profile(
        all_skills,
        employee
    )

    # ------------------------------------------------
    # 6. Match against internal roles
    # ------------------------------------------------

    role_matches = match_employee_to_roles(
        skill_profile,
        roles
    )

    # ------------------------------------------------
    # 7. Find target role
    # ------------------------------------------------

    target_role = None

    if target_role_id:

        target_role = next(
            (
                role
                for role in roles
                if role["id"] == target_role_id
            ),
            None
        )

    elif employee.get("career_goal"):

        target_role = next(
            (
                role
                for role in roles
                if role["title"].lower()
                == employee["career_goal"].lower()
            ),
            None
        )

    # ------------------------------------------------
    # 8. Skill gap + recommendations
    # ------------------------------------------------

    skill_gap = None
    recommendations = []

    if target_role:

        skill_gap = analyze_skill_gap(
            skill_profile,
            target_role
        )

        recommendations = recommend_learning(
            skill_gap["skill_gaps"],
            courses,
            projects
        )

    # ------------------------------------------------
    # 9. Final AI response
    # ------------------------------------------------

    return {
        "success": True,

        "employee": {
            "id": employee["id"],
            "name": employee["name"],
            "department": employee["department"],
            "current_role": employee["current_role"],
            "career_goal": employee.get(
                "career_goal"
            )
        },

        "discovered_skills": skill_profile,

        "role_matches": role_matches,

        "target_role": (
            target_role["title"]
            if target_role
            else None
        ),

        "skill_gap": skill_gap,

        "recommendations": recommendations
    }


if __name__ == "__main__":

    result = analyze_employee("EMP001")

    print(
        json.dumps(
            result,
            indent=2
        )
    )