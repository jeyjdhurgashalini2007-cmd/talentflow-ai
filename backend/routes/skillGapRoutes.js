const express = require("express");

const {
    getSkillGaps
} = require("../controllers/skillGapController");

const router = express.Router();

router.get("/:employeeId/:roleId", getSkillGaps);

module.exports = router;