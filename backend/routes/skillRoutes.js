const express = require("express");

const {
    getSkills,
    getSkillById
} = require("../controllers/skillController");

const router = express.Router();

router.get("/", getSkills);
router.get("/:id", getSkillById);

module.exports = router;