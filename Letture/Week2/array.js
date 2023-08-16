//comment

/* comment 
many line
*/

let a = "Hello World";
console.log(a);

//Array
let student = []; // empty array
let courses = new Array();

let students = ["Peter" , "Alice" , "Guncv"];
let preferences = new Array("Sport" , 45 , 23.43 , true); // Can be difference type
console.log(preferences);
preferences[0] = "Music"; //Change Element in Array
console.log(preferences)
console.log(preferences[0] + preferences[2]);

students.push("Chana"); //Push in last element of array
console.log(students);
console.log(students.length); //Length of array

const products = ["Milk" , "Butter" , "Egg" , "Sugar"];
products.pop(); //delete and return last element
products.push("Honey");
console.log(products.toString()); //get String that have each element with ,

products.splice(2,1); //delete 1 member at index 2
console.log(products.length);
console.log(products.toString());

