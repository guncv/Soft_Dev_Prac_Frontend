function check() {
    let company = document.getElementById("company_name");
    let person = document.forms["member"]["person_name"];
    let tele = document.forms["member"]["person_number"];
    let chair = document.getElementById("number_of_chair");
    let c = true;
    company.classList.remove("required");
    person.classList.remove("required");
    tele.classList.remove("required");
    chair.classList.remove("required");

    if (company.value == ""){
        alert("ต้องการชื่อบริษัท");
        company.classList.add("required");
        c = false;
    } if (chair.value < 1 || chair.value > 10){
        alert("จำนวนของเก้าอี้สั่งได้แค่ 1-10 ตัวเท่านั้น");
        chair.classList.add("required");
        c = false;
    } if (person.value == ""){
        alert("ต้องการรายชื่อผู้ติดต่อ");
        person.classList.add("required");
        c = false;
    } if (tele.value == ""){
        alert("ต้องการเบอร์โทรผู้ติดต่อ");
        tele.classList.add("required");
        c = false;
    } if (c){
        alert("ลงทะเบียนสำเร็จแล้ว");

        return true;
    } return false;
}