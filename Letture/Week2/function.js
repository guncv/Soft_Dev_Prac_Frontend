//Function
// No Output , No Argument
var weight = 55;
var height = 168;
bmiCalculation();

function bmiCalculation(){
    let bmi = weight / ((height/100)*(height/100));
    console.log("BMI = " + bmi);
}

// No Output , Have Argument
bmiCalculation(55 , 168);

function bmiCalculation(w , h){
    let bmi = w / ((h/100)*(h/100));
    console.log("BMI = " + bmi);
}

// Have Output , No Argument
let myBmi = bmiCalculation();
console.log("My BMI = " + myBmi);

function bmiCalculation(){
    let bmi = weight / ((height/100)*(height/100));
    console.log("BMI = " + bmi);
    return bmi;
} console.log(myBmi);

// Have Output and Argument
let bmi = bmiCalculation(55,168);
console.log("My BMI = " + bmi);

function bmiCalculation(w , h){
    let bmi = w / ((h/100)*(h/100));
    return bmi;
}

// Arrow Functions
// No Argument 
const greet = () => {
    return 'Hi!';
}

// One Argument
const greet1 = (name) => {
    return 'Hello, ' + name + "!";
}

// Many Argument
const bmiCal = (weight , height) =>{
    let bmi = weight / ((height/100)*(height/100));
    return  bmi;
} 
console.log("My BMI = " + bmiCal(55,168));

// For Each
let prices = [24.32 , 4241 , 422.55];
prices.forEach(netPrice);
console.log(prices);

function netPrice(price){
    let afterVat = price*1.07;
    console.log("Price with Vat = " + afterVat);
}

prices.forEach((p) => {
    let afterVat = p *1.07;
    console.log("Price with Vat = " + afterVat);
})