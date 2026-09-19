const express = require("express");

const {
    getLearningProgress,
    addLearningProgress
} = require("../controllers/learningProgressController");

const router = express.Router();

router.get("/:employeeId", getLearningProgress);

router.post("/:employeeId", addLearningProgress);

module.exports = router;
