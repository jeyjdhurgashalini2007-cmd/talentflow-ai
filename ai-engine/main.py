import json
import os


# Get the project root directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Database folder
DATABASE_DIR = os.path.join(BASE_DIR, "database")


def load_json(filename):
    """Load a JSON file from the database folder."""
    file_path = os.path.join(DATABASE_DIR, filename)

    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


# Load project data
employees = load_json("employees.json")
skills = load_json("skills.json")
roles = load_json("roles.json")
courses = load_json("courses.json")
projects = load_json("projects.json")


# Display basic information
print("===================================")
print("       TALENTFLOW AI ENGINE")
print("===================================")

print(f"Employees : {len(employees)}")
print(f"Skills    : {len(skills)}")
print(f"Roles     : {len(roles)}")
print(f"Courses   : {len(courses)}")
print(f"Projects  : {len(projects)}")

print("\nEmployee:")
print(employees[0]["name"])

print("\nTarget Role:")
print(roles[0]["title"])

print("\nAI Engine data loading successful!")