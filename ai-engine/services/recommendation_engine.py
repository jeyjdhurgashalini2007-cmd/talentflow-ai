def recommend_learning(skill_gaps, courses, projects):
    """
    Recommend courses and projects based on skill gaps.
    """

    recommendations = []

    for gap in skill_gaps:

        skill_name = gap["skill"]

        matching_courses = []

        for course in courses:

            course_skills = [
                skill.lower()
                for skill in course.get("skills", [])
            ]

            if skill_name.lower() in course_skills:
                matching_courses.append(course["name"])

        matching_projects = []

        for project in projects:

            project_skills = [
                skill.lower()
                for skill in project.get("skills", [])
            ]

            if skill_name.lower() in project_skills:
                matching_projects.append(project["name"])

        recommendations.append({
            "skill": skill_name,
            "priority": gap["priority"],
            "courses": matching_courses,
            "projects": matching_projects
        })

    return recommendations