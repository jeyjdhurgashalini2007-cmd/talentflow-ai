import json
import os

from skill_normalizer import normalize_detected_skills


# Find project root
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

DATABASE_DIR = os.path.join(BASE_DIR, "database")


# Load skills
with open(
    os.path.join(DATABASE_DIR, "skills.json"),
    "r",
    encoding="utf-8"
) as file:
    skills = json.load(file)


# Simulated extracted skills
detected_skills = [
    {
        "skill": "JS",
        "category": "Programming",
        "source": "text",
        "confidence": 0.90
    },
    {
        "skill": "RESTful API",
        "category": "Backend",
        "source": "text",
        "confidence": 0.90
    },
    {
        "skill": "ML",
        "category": "AI",
        "source": "text",
        "confidence": 0.90
    },
    {
        "skill": "Data Analytics",
        "category": "Data",
        "source": "text",
        "confidence": 0.90
    }
]


# Normalize skills
normalized_skills = normalize_detected_skills(
    detected_skills,
    skills
)


print("\n========== SKILL NORMALIZATION TEST ==========\n")

for skill in normalized_skills:
    print(
        f"{skill['skill']} "
        f"(confidence: {skill['confidence']})"
    )

print("\nNormalization successful!")