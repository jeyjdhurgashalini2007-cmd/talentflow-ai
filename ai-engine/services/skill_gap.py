def analyze_skill_gap(employee_skills, role):
    """
    Identify the skills an employee needs to develop
    for a target role.
    """

    employee_skill_map = {
        skill["skill"].lower(): skill["level"]
        for skill in employee_skills
    }

    gaps = []

    for requirement in role["required_skills"]:

        skill_name = requirement["skill"]
        required_level = requirement["level"]

        current_level = employee_skill_map.get(
            skill_name.lower(),
            0
        )

        gap = max(
            required_level - current_level,
            0
        )

        if gap > 0:

            if gap >= 30:
                priority = "High"
            elif gap >= 15:
                priority = "Medium"
            else:
                priority = "Low"

            gaps.append({
                "skill": skill_name,
                "current_level": current_level,
                "required_level": required_level,
                "gap": gap,
                "priority": priority
            })

    # Largest gaps first
    gaps.sort(
        key=lambda x: x["gap"],
        reverse=True
    )

    return {
        "target_role": role["title"],
        "skill_gaps": gaps
    }