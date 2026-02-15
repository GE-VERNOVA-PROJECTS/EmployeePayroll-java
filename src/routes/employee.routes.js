const express = require("express");
const controller = require("../controller/employee.controller");
const { employeeValidation } = require("../validations/employee.validation");

const router = express.Router();

router.get("/", controller.getAllEmployees);
router.get("/:id", controller.getEmployeeById);
router.post("/create", employeeValidation, controller.createEmployee);
router.delete("/delete/:id", controller.deleteEmployee);

module.exports = router;
