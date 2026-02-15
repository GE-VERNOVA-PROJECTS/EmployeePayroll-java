const repo=require("../repository/employee.repository")
const Apperror=require("../errors/Apperror")

exports.createEmployee=async(data)=>{
    return await repo.createEmployee(data);
}

exports.getAllEmployees = async () => {
  return await repo.getAllEmployees();
};

exports.getEmployeeById = async (id) => {
  const emp = await repo.getEmployeeById(id);
  if (!emp) 
    throw new AppError("Employee not found", 404);
  return emp;
};

exports.deleteEmployee = async (id) => {
 const emp= await exports.getEmployeeById(id);
  await repo.deleteEmployee(id);
};