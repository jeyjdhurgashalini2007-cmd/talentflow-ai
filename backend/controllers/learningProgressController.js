const learningProgress = require("../models/learningProgressData");
const employees = require("../models/employeeData");
const courses = require("../models/courseData");

const getLearningProgress = (req, res) => {
    const { employeeId } = req.params;

    const employee = employees.find(
        (employee) => employee.id === employeeId
    );

    if (!employee) {
        return res.status(404).json({
            error: "Employee not found"
        });
    }

    const employeeProgress = learningProgress.filter(
        (progress) => progress.employee_id === employeeId
    );

    res.json({
        employee_id: employeeId,
        learning_progress: employeeProgress
    });
};

const addLearningProgress = (req, res) => {
    const { employeeId } = req.params;

    const {
        course_id,
        status,
        progress_percentage
    } = req.body;

    const employee = employees.find(
        (employee) => employee.id === employeeId
    );

    if (!employee) {
        return res.status(404).json({
            error: "Employee not found"
        });
    }

    const course = courses.find(
        (course) => course.id === course_id
    );

    if (!course) {
        return res.status(404).json({
            error: "Course not found"
        });
    }

    const allowedStatuses = [
        "not_started",
        "in_progress",
        "completed"
    ];

    if (!course_id || !status || progress_percentage === undefined) {
        return res.status(400).json({
            error: "course_id, status and progress_percentage are required"
        });
    }

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            error: "status must be not_started, in_progress, or completed"
        });
    }

    if (
        typeof progress_percentage !== "number" ||
        progress_percentage < 0 ||
        progress_percentage > 100
    ) {
        return res.status(400).json({
            error: "progress_percentage must be a number between 0 and 100"
        });
    }

    const newProgress = {
        employee_id: employeeId,
        course_id,
        status,
        progress_percentage
    };

    learningProgress.push(newProgress);

    res.status(201).json({
        message: "Learning progress added successfully",
        learning_progress: newProgress
    });
};

module.exports = {
    getLearningProgress,
    addLearningProgress
};