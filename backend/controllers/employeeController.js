const employees = require("../models/employeeData");

const getEmployees = (req, res) => {
    res.json(employees);
};

const getEmployeeById = (req, res) => {
    const { id } = req.params;

    const employee = employees.find(
        (employee) => employee.id === id
    );

    if (!employee) {
        return res.status(404).json({
            error: "Employee not found"
        });
    }

    res.json(employee);
};

module.exports = {
    getEmployees,
    getEmployeeById
};