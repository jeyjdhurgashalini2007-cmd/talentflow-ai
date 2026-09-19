import re


def normalize_text(text):
    """
    Convert text into a standard format for skill detection.
    """
    return text.lower().strip()


def extract_skills(text, skills_data):
    """
    Extract known skills from employee/project text.

    Returns:
        A list of detected skills with evidence and confidence.
    """

    normalized_text = normalize_text(text)

    detected_skills = []

    for skill in skills_data:

        skill_name = skill["name"]
        aliases = skill.get("aliases", [])

        possible_names = [skill_name] + aliases

        for name in possible_names:

            pattern = r"\b" + re.escape(name.lower()) + r"\b"

            if re.search(pattern, normalized_text):

                detected_skills.append({
                    "skill": skill_name,
                    "category": skill["category"],
                    "source": "text",
                    "evidence": text,
                    "confidence": 0.90
                })

                break

    return detected_skills