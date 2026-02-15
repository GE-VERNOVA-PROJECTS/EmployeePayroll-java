class Employee{
    constructor({
        employeeId,name,gender,salary,department,startDate,note,profilePic})
    {
        this.employeeId = employeeId;
    this.name = name;
    this.gender = gender;
    this.salary = salary;
    this.department = department;
    this.startDate = startDate;
    this.note = note;
    this.profilePic = profilePic;
    }
}
module.exports=Employee;