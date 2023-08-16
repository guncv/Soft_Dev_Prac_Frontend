function greeting1(){
    console.log("Week2 Class");
    alert("2222"); // alert on website
    confirm("1233"); //return true or false
}

function greeting2(){
    prompt("1223","5rrr"); //get input message
}

function greeting3(){
    let output = document.getElementById("output");
    output.innerHTML = "Good Morning";
}

function getData(){
    let name = document.forms["member"]["firstName"];
    alert(name.value);
}
