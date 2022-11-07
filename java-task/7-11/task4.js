function employeesInfo (ob){
    document.write("The first name is:" + ob.firstName + "<br> The age is:" + ob.age+ "<br> The salary is:"+ ob.salary);
}

let person={firstName: "lubna", lastName: "ajlouni", age:23, salary: 550};
employeesInfo(person);
