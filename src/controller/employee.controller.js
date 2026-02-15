const service = require("../service/employee.service");
const { validationResult } = require("express-validator");

exports.createEmployee = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const id = await service.createEmployee(req.body);
    res.json({ message: "Employee Created", employeeId: id });
  } catch (err) {
    next(err);
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const data = await service.getAllEmployees();
    res.json({ message: "All Employees", data });
  } catch (err) {
    next(err);
  }
};

exports.getEmployeeById = async (req, res, next) => {
  try {
    const emp = await service.getEmployeeById(req.params.id);
    res.json({ message: "Employee Found", data: emp });
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    await service.deleteEmployee(req.params.id);
    res.json({ message: "Employee Deleted" });
  } catch (err) {
    next(err);
  }
};
