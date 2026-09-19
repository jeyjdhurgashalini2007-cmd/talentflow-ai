import json
import os

from skill_extractor import extract_skills


# Find the project root
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


# Sample employee/project description
text = """
Built a Java backend application using SQL and REST APIs.
The application was later deployed using Docker and AWS.
"""


# Extract skills
detected_skills = extract_skills(text, skills)


# Display results
print("\n========== SKILL EXTRACTION TEST ==========\n")

for skill in detected_skills:
    print(f"Skill      : {skill['skill']}")
    print(f"Category   : {skill['category']}")
    print(f"Source     : {skill['source']}")
    print(f"Confidence : {skill['confidence']}")
    print("-------------------------------------------")

print(f"\nTotal skills detected: {len(detected_skills)}")