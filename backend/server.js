const express = require("express");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const healthRoutes = require("./routes/healthRoutes");
const courseRoutes = require("./routes/courseRoutes");
const projectRoutes = require("./routes/projectRoutes");
const roleRoutes = require("./routes/roleRoutes");
const skillRoutes = require("./routes/skillRoutes");
const skillGapRoutes = require("./routes/skillGapRoutes");
const courseRecommendationRoutes = require("./routes/courseRecommendationRoutes");
const learningProgressRoutes = require("./routes/learningProgressRoutes");
const careerProgressRoutes = require("./routes/careerProgressRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "TalentFlow AI Backend is running!"
    });
});

app.use("/api/health", healthRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/skill-gaps", skillGapRoutes);
app.use("/api/course-recommendations", courseRecommendationRoutes);
app.use("/api/learning-progress", learningProgressRoutes);
app.use("/api/career-progress", careerProgressRoutes);

app.listen(PORT, () => {
    console.log(`TalentFlow AI Backend running on port ${PORT}`);
});