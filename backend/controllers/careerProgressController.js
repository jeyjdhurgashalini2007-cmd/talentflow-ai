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

    const skillAnalysis = role.required_skills.map(
        (requiredSkill) => {
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
        }
    );

    const skillGaps = skillAnalysis.filter(
        (skill) => skill.gap > 0
    );

    const totalRequiredLevel = skillAnalysis.reduce(
        (total, skill) => total + skill.required_level,
        0
    );

    const totalCurrentLevel = skillAnalysis.reduce(
        (total, skill) =>
            total + Math.min(
                skill.current_level,
                skill.required_level
            ),
        0
    );

    const overallProgressPercentage =
        totalRequiredLevel > 0
            ? Math.round(
                  (totalCurrentLevel / totalRequiredLevel) * 100
              )
            : 100;

    const recommendedCourses = courses.filter((course) =>
        skillGaps.some((gap) =>
            course.skills.some(
                (courseSkill) =>
                    courseSkill.toLowerCase() ===
                    gap.skill.toLowerCase()
            )
        )
    );

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
        overall_progress_percentage: overallProgressPercentage,
        skill_gaps: skillGaps,
        recommended_courses: recommendedCourses,
        learning_progress: progressWithCourseNames
    });
};

module.exports = {
    getCareerProgress
};