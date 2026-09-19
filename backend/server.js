const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "TalentFlow AI Backend is running!"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        service: "TalentFlow AI Backend"
    });
});

app.listen(PORT, () => {
    console.log(`TalentFlow AI Backend running on port ${PORT}`);
});