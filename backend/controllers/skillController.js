const skills = require("../models/skillData");

const getSkills = (req, res) => {
    res.json(skills);
};

const getSkillById = (req, res) => {
    const { id } = req.params;

    const skill = skills.find(
        (skill) => skill.id === id
    );

    if (!skill) {
        return res.status(404).json({
            error: "Skill not found"
        });
    }

    res.json(skill);
};

module.exports = {
    getSkills,
    getSkillById
};