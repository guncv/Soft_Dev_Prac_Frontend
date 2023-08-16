// Static Typing
// variable_keyword variable_name:data_type

let department:string = "Marketing";
let member:number = 8; // Cant Change to another data type
console.log(department , "has" , member , "members");

let x:any; //any type
x = "david";
x = 8;

let x1:string|number; //can be both string and number
x1 = "dqd";
x1 = 2344;

let arr:string[] = []; //empty array
arr.push("Fa");
arr.push("qwe");

let arr1:(string|number)[] = []; // empty array that can have both string and number
arr1.push("David");
arr1.push(123.42);

let myStr:string = "Hello World";
console.log(myStr);

// Function
console.log("My BMI =" , bmiCalculation(55 , 168));

function bmiCalculation(weight:number , height:number):number{
    let bmi = weight/ ((height/100)*(height/100));
    return bmi;
}

// Class
class Employe{
    public empId:string;
    private name:string;
    private lastName:string;
    private position:string;
    private salary:number;

    constructor(empId:string , name:string , lastName:string , position:string , salary:number){
        this.empId = empId;
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    public bonus(months:number):number{
        return this.salary*months;
    }
}

let emp2:Employe = new Employe("e001","Robert","Gun","Engineer",23444);
console.log(emp2.empId , "bonus is" , emp2.bonus(3.5));

class Employe1{
    // Like First Classs
    constructor(public empId:string ,private name:string ,private lastName:string ,private position:string ,private salary:number){
        this.empId = empId;
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    public bonus(months:number):number{
        return this.salary*months;
    }
}

let emp3:Employe1 = new Employe1("e001","Robert","Gun","Engineer",23444);
console.log(emp3.empId , "bonus is" , emp3.bonus(3.5));