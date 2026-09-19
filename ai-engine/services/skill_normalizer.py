def build_skill_alias_map(skills_data):
    """
    Build a lookup map from skill names and aliases
    to the canonical skill name.
    """

    alias_map = {}

    for skill in skills_data:
        canonical_name = skill["name"]

        # Add the main skill name
        alias_map[canonical_name.lower()] = canonical_name

        # Add all aliases
        for alias in skill.get("aliases", []):
            alias_map[alias.lower()] = canonical_name

    return alias_map


def normalize_skill(skill_name, alias_map):
    """
    Convert a skill name or alias into its canonical skill name.
    """

    return alias_map.get(
        skill_name.lower().strip(),
        skill_name
    )


def normalize_detected_skills(detected_skills, skills_data):
    """
    Normalize all detected skills into canonical skill names.
    """

    alias_map = build_skill_alias_map(skills_data)

    normalized_skills = []

    for skill in detected_skills:

        canonical_name = normalize_skill(
            skill["skill"],
            alias_map
        )

        normalized_skill = skill.copy()
        normalized_skill["skill"] = canonical_name

        normalized_skills.append(normalized_skill)

    return normalized_skills