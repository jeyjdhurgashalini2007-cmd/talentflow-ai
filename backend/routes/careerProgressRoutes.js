const express = require("express");

const {
    getCareerProgress
} = require("../controllers/careerProgressController");

const router = express.Router();

router.get("/:employeeId", getCareerProgress);

module.exports = router;