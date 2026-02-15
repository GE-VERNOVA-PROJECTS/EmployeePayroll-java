const mysql=require("mysql2")

const pool=mysql.createPool({
    host:"localhost",
    user: "payrolluser",
  password: "password",
  database: "payroll_db"
})