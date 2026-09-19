const employees = require("../models/employeeData");
const roles = require("../models/roleData");

const getSkillGaps = (req, res) => {
    const { employeeId, roleId } = req.params;

    const employee = employees.find(
        (employee) => employee.id === employeeId
    );

    if (!employee) {
        return res.status(404).json({
            error: "Employee not found"
        });
    }

    const role = roles.find(
        (role) => role.id === roleId
    );

    if (!role) {
        return res.status(404).json({
            error: "Role not found"
        });
    }

    const employeeSkills = employee.skills || [];

    const matchedSkills = [];
    const missingSkills = [];

    role.required_skills.forEach((requiredSkill) => {
        const employeeSkill = employeeSkills.find(
            (skill) =>
                skill.name.toLowerCase() ===
                requiredSkill.skill.toLowerCase()
        );

        if (employeeSkill) {
            matchedSkills.push({
                skill: requiredSkill.skill,
                current_level: employeeSkill.level,
                required_level: requiredSkill.level,
                gap: Math.max(
                    requiredSkill.level - employeeSkill.level,
                    0
                )
            });
        } else {
            missingSkills.push({
                skill: requiredSkill.skill,
                required_level: requiredSkill.level,
                gap: requiredSkill.level
            });
        }
    });

    res.json({
        employee_id: employee.id,
        employee_name: employee.name,
        target_role: role.title,
        role_id: role.id,
        matched_skills: matchedSkills,
        missing_skills: missingSkills
    });
};

module.exports = {
    getSkillGaps
};