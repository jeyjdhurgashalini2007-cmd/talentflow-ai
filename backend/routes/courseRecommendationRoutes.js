const express = require("express");

const {
    getCourseRecommendations
} = require("../controllers/courseRecommendationController");

const router = express.Router();

router.get("/:employeeId/:roleId", getCourseRecommendations);

module.exports = router;