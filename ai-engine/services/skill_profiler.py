def calculate_skill_level(
    extraction_confidence,
    source,
    evidence_count=1
):
    """
    Calculate an estimated skill level from available evidence.

    This is a demo scoring model for the hackathon.
    It is not a formal assessment of employee ability.
    """

    source_weights = {
        "explicit": 0.75,
        "project": 0.85,
        "course": 0.60,
        "certification": 0.70,
        "text": 0.70,
        "inferred": 0.55
    }

    source_weight = source_weights.get(source, 0.60)

    evidence_bonus = min(evidence_count * 0.05, 0.15)

    score = (
        extraction_confidence * 70
        + source_weight * 20
        + evidence_bonus * 10
    )

    return min(round(score), 100)


def build_skill_profile(
    extracted_skills,
    employee=None
):
    """
    Build an evidence-backed skill profile.

    Each skill contains:
    - skill name
    - estimated level
    - source
    - confidence
    - evidence
    """

    profile = {}

    for skill in extracted_skills:

        skill_name = skill["skill"]
        source = skill.get("source", "text")
        confidence = skill.get("confidence", 0.5)
        evidence = skill.get("evidence", "")

        if skill_name not in profile:

            profile[skill_name] = {
                "skill": skill_name,
                "level": 0,
                "sources": [],
                "confidence": confidence,
                "evidence": []
            }

        profile[skill_name]["sources"].append(source)

        if evidence:
            profile[skill_name]["evidence"].append(evidence)

        profile[skill_name]["confidence"] = max(
            profile[skill_name]["confidence"],
            confidence
        )

    # Calculate skill levels after collecting evidence
    for skill_name, data in profile.items():

        primary_source = data["sources"][0]

        data["level"] = calculate_skill_level(
            data["confidence"],
            primary_source,
            len(data["evidence"])
        )

    return list(profile.values())