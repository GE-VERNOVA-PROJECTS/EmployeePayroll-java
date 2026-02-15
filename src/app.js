const express = require("express");
const employeeRoutes = require("./routes/employee.routes");

const app = express();
app.use(express.json());

app.use("/employeepayrollservice", employeeRoutes);

// Global Error Handler (ControllerAdvice)
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: err.message
  });
});

app.listen(8080, () => {
  console.log("Employee Payroll App running on port 3000");
});

