const getEmployees = (req, res) => {
    res.json({
        message: "Employee API is working",
        employees: []
    });
};

const getEmployeeById = (req, res) => {
    const { id } = req.params;

    res.json({
        message: "Employee details API is working",
        employeeId: id
    });
};

module.exports = {
    getEmployees,
    getEmployeeById
};