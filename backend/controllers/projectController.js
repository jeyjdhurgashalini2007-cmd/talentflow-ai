const projects = require("../models/projectData");

const getProjects = (req, res) => {
    res.json(projects);
};

const getProjectById = (req, res) => {
    const { id } = req.params;

    const project = projects.find(
        (project) => project.id === id
    );

    if (!project) {
        return res.status(404).json({
            error: "Project not found"
        });
    }

    res.json(project);
};

module.exports = {
    getProjects,
    getProjectById
};