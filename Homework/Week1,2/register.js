function check(){
    let company = document.getElementById("company_name");
    let person = document.getElementById("person_name");
    let number = document.forms["member"]["person_number"];

    if (company == "" || person == "" || number ==""){
        alert("Cant Have Empty Text");
    }
}