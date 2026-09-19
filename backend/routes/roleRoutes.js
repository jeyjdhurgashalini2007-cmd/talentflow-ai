const express = require("express");

const {
    getRoles,
    getRoleById
} = require("../controllers/roleController");

const router = express.Router();

router.get("/", getRoles);
router.get("/:id", getRoleById);

module.exports = router;