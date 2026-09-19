const employees = require("../models/employeeData");
const roles = require("../models/roleData");
const courses = require("../models/courseData");
const learningProgress = require("../models/learningProgressData");

const getCareerProgress = (req, res) => {
    const { employeeId } = req.params;

    const employee = employees.find(
        (employee) => employee.id === employeeId
    );

    if (!employee) {
        return res.status(404).json({
            error: "Employee not found"
        });
    }

    const role = roles.find(
        (role) => role.title === employee.career_goal
    );

    if (!role) {
        return res.status(404).json({
            error: "Target role not found"
        });
    }

    const employeeSkills = employee.skills || [];

    const skillGaps = role.required_skills
        .map((requiredSkill) => {
            const employeeSkill = employeeSkills.find(
                (skill) =>
                    skill.name.toLowerCase() ===
                    requiredSkill.skill.toLowerCase()
            );

            const currentLevel = employeeSkill
                ? employeeSkill.level
                : 0;

            return {
                skill: requiredSkill.skill,
                current_level: currentLevel,
                required_level: requiredSkill.level,
                gap: Math.max(
                    requiredSkill.level - currentLevel,
                    0
                )
            };
        })
        .filter((skill) => skill.gap > 0);

    const employeeProgress = learningProgress.filter(
        (progress) => progress.employee_id === employeeId
    );

    const progressWithCourseNames = employeeProgress.map(
        (progress) => {
            const course = courses.find(
                (course) => course.id === progress.course_id
            );

            return {
                ...progress,
                course_name: course
                    ? course.name
                    : "Unknown course"
            };
        }
    );

    res.json({
        employee_id: employee.id,
        employee_name: employee.name,
        current_role: employee.current_role,
        target_role: role.title,
        skill_gaps: skillGaps,
        learning_progress: progressWithCourseNames
    });
};

module.exports = {
    getCareerProgress
};