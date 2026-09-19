const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "OK",
        service: "TalentFlow AI Backend",
        message: "API is healthy"
    });
});

module.exports = router;