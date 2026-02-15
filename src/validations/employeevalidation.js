const {body} = require("express-validator")

exports.employeevalidation=[
body("name")
.matches(/^[A-Z][a-zA-Z\s]{2,}$/)
.withMessage("EmployeeNameInvalid"),

body("gender")
.isIn(["male","female"])
.withMessage("Gender must be male or female"),

body("salary")
    .isInt({ min: 500 })
    .withMessage("Salary must be >= 500"),

  body("department")
    .isArray({ min: 1 })
    .withMessage("Department is required"),

  body("note").notEmpty().withMessage("Note is required"),
  body("profilePic").notEmpty().withMessage("Profile pic is required")

]
