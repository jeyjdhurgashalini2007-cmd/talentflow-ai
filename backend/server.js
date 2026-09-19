const express = require("express");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const healthRoutes = require("./routes/healthRoutes");

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

app.listen(PORT, () => {
    console.log(`TalentFlow AI Backend running on port ${PORT}`);
});