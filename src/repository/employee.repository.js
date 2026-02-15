const db=reuire("../db")
const Employee=require("../model/employee.model")

exports.createEmployee=async(emp)=>{
const result=await db.execute(`INSERT INTO employee_payroll
     (name, gender, salary, note, profilePic)
     VALUES (?, ?, ?, ?, ?)`,
    [emp.name, emp.gender, emp.salary, emp.note, emp.profilePic]);
    return result.insertId;
};

exports.getAllEmployees=async()=>{
    const [rows]=await db.execute("Select * from employee_payroll");
    return rows.map(row=>new Employee(row));
};

exports.getEmployeeById=async(id)=>{
    const [rows]=db.execute("SELECT * FROM employee_payroll WHERE employeeId = ?",[id]);
    return rows.length ? new Employee(rows[0]) : null;
};

exports.deleteEmployee = async (id) => {
  await db.execute(
    "DELETE FROM employee_payroll WHERE employeeId = ?",
    [id]
  );
};

