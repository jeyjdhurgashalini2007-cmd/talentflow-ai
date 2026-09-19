const roles = require("../models/roleData");

const getRoles = (req, res) => {
    res.json(roles);
};

const getRoleById = (req, res) => {
    const { id } = req.params;

    const role = roles.find(
        (role) => role.id === id
    );

    if (!role) {
        return res.status(404).json({
            error: "Role not found"
        });
    }

    res.json(role);
};

module.exports = {
    getRoles,
    getRoleById
};