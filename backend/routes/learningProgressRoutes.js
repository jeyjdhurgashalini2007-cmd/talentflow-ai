const express = require("express");

const {
    getLearningProgress,
    addLearningProgress,
    updateLearningProgress
} = require("../controllers/learningProgressController");

const router = express.Router();

router.get("/:employeeId", getLearningProgress);

router.post("/:employeeId", addLearningProgress);

router.put("/:employeeId/:courseId", updateLearningProgress);

module.exports = router;