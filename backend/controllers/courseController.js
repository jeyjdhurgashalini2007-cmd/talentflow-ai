const courses = require("../models/courseData");

const getCourses = (req, res) => {
    res.json(courses);
};

const getCourseById = (req, res) => {
    const { id } = req.params;

    const course = courses.find(
        (course) => course.id === id
    );

    if (!course) {
        return res.status(404).json({
            error: "Course not found"
        });
    }

    res.json(course);
};

module.exports = {
    getCourses,
    getCourseById
};