//Loop
for (let i = 0 ; i < 5 ; i++){
    console.log("Number is " + i);
}
for (let i = 0 , n = 3 ; i < 5 ; i++ , n++){
    console.log("i is " + i + ", n is " + n);
    console.log("Multiplied to " + i*n);
} 

// Variable Scope
for (var i = 0 ; i < 5 ; i++){
    console.log("Number is " + i);
} 
console.log("Final i is " + i); //Can use because i is global scope(var)

//For in
const products = ["Milks" , "Butter" , "Egg"];
for (let i in products){
    console.log("Product is " + products[i]); // i is each index of array
}

//For of
for (let p of products){
    console.log("Product is " + p); // p is each element of array
}

//While
var n = 50;
while (n > 10){
    n /= 2;
    console.log("n = " + n); // Loop until condition is false
}

//Do..While
var q = 5, n = 20;
do {
    q += 2;
    console.log("q= " + q + ", n=" + n);
} while(q <= n); // Do operation first time then loop like while

//Break
for (let p of products){
    if (p == "Butter"){
        break; //Use for break loop immediately
    }
    console.log("Product is " + p);
}
console.log("--End--");

//Continue 
for (let p of products){
    if (p == "Butter"){
        continue; //Use for end this operation and go to next loop
    }
    console.log("Product is " + p);
}
console.log("--End--");