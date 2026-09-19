def calculate_role_match(employee_skills, role):
    """
    Calculate how well an employee matches an internal role.

    Returns an explainable match result.
    """

    # Convert employee skills into a lookup dictionary
    employee_skill_map = {
        skill["skill"].lower(): skill
        for skill in employee_skills
    }

    total_score = 0
    total_weight = 0

    matched_skills = []
    missing_skills = []
    partial_skills = []

    for requirement in role["required_skills"]:

        skill_name = requirement["skill"]
        required_level = requirement["level"]
        importance = requirement["importance"]

        employee_skill = employee_skill_map.get(
            skill_name.lower()
        )

        total_weight += importance

        if employee_skill:

            employee_level = employee_skill["level"]

            # Calculate how much of the requirement is satisfied
            skill_score = min(
                employee_level / required_level,
                1
            )

            weighted_score = skill_score * importance
            total_score += weighted_score

            if employee_level >= required_level:
                matched_skills.append({
                    "skill": skill_name,
                    "employee_level": employee_level,
                    "required_level": required_level,
                    "status": "matched"
                })

            else:
                partial_skills.append({
                    "skill": skill_name,
                    "employee_level": employee_level,
                    "required_level": required_level,
                    "status": "partial"
                })

        else:

            missing_skills.append({
                "skill": skill_name,
                "required_level": required_level,
                "status": "missing"
            })

    # Convert to percentage
    match_percentage = round(
        (total_score / total_weight) * 100
    ) if total_weight > 0 else 0

    # Generate explanation
    reasons = []

    if matched_skills:
        skills = ", ".join(
            skill["skill"]
            for skill in matched_skills
        )

        reasons.append(
            f"Strong match in: {skills}"
        )

    if partial_skills:
        skills = ", ".join(
            skill["skill"]
            for skill in partial_skills
        )

        reasons.append(
            f"Needs improvement in: {skills}"
        )

    if missing_skills:
        skills = ", ".join(
            skill["skill"]
            for skill in missing_skills
        )

        reasons.append(
            f"Missing skills: {skills}"
        )

    return {
        "role": role["title"],
        "department": role["department"],
        "match_percentage": match_percentage,
        "matched_skills": matched_skills,
        "partial_skills": partial_skills,
        "missing_skills": missing_skills,
        "explanation": reasons
    }


def match_employee_to_roles(employee_skills, roles):
    """
    Match an employee against all available internal roles.
    """

    results = []

    for role in roles:

        result = calculate_role_match(
            employee_skills,
            role
        )

        results.append(result)

    # Sort by match percentage
    results.sort(
        key=lambda x: x["match_percentage"],
        reverse=True
    )

    return results