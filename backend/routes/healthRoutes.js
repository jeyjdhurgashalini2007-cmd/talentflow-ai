const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "ok",
        message: "TalentFlow AI Backend is healthy",
        timestamp: new Date().toISOString()
    });
});

module.exports = router;