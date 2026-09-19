const employees = require("../models/employeeData");
const roles = require("../models/roleData");
const courses = require("../models/courseData");

const getCourseRecommendations = (req, res) => {
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

    const missingSkills = role.required_skills.filter(
        (requiredSkill) => {
            const employeeSkill = employeeSkills.find(
                (skill) =>
                    skill.name.toLowerCase() ===
                    requiredSkill.skill.toLowerCase()
            );

            return (
                !employeeSkill ||
                employeeSkill.level < requiredSkill.level
            );
        }
    );

    const recommendations = courses.filter((course) =>
        missingSkills.some((missingSkill) =>
            course.skills.some(
                (courseSkill) =>
                    courseSkill.toLowerCase() ===
                    missingSkill.skill.toLowerCase()
            )
        )
    );

    res.json({
        employee_id: employee.id,
        employee_name: employee.name,
        target_role: role.title,
        recommended_courses: recommendations
    });
};

module.exports = {
    getCourseRecommendations
};