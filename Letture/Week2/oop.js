//Use by Object Literal
let emp1 = {
    empId : "e001",
    name : "Robert",
    lastName : "Lee",
    position : "Engineer",
    salary : 46000,
    bonus : function(months){
        return this.salary*months;
    }
};

emp1.salary += 5000;
console.log(emp1.name , "is" , emp1.position);
console.log(emp1.name , "salary is" , emp1.salary);
console.log(emp1.name , "bonus is" , emp1.bonus(3.5));

//Object by Constructor
function employee (empId , name , lastName , position , salary) {
    this.empId = empId;
    this.name = name;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.bonus = function(months) {
        return this.salary*months;
    }
}

let e1 = new employee("e001" , "Robert" , "Lee" , "Engineer" , 45000);
console.log(e1.name , "bonus is" , e1.bonus(3.5));

//Class
class Employee {
    constructor(empId , name , lastName , position , salary){
        this.empId = empId;
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    //Method 
    bonus(months){
        return this.salary*months;
    }
}

let e2 = new Employee("e002" , "Robert" , "Lee" , "Engineer" , 65000);
for (p in e2){
    console.log(e1[p]); // cant use for of
}