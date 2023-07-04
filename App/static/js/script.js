/* -----------------------------------------
FULL VALIDATION FORM
------------------------------------------*/
//  1) iNPUT MASK (PHONE)

$(document).ready(function(){

 $(".phone").inputmask("(999) 999-999-9999",{"onincomplete":function(){
    $(".phone").val("");
    swal("Oops !", "Incomplete phone, Please review !","info");
    return false;
 }});

});

// 2) iNPUT VALIDATION
// a) Frontend form

function validateEmail(email){
    const regex =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);

}
function validateForm(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const file = document.getElementById("file").value;

    if(name == ""){
        swal("Opsss !","Name field cannot be empty.","error");
        return false;
    }
    else if(age == ""){
        swal("Opsss !","Age field cannot be empty.","error");
        return false;
    }
    else if(email == ""){
        swal("Opsss !","Email field cannot be empty.","error");
        return false;
    }
    else if(phone == ""){
        swal("Opsss !","Phone field cannot be empty.","error");
        return false;
    }
    else if(experience == ""){
        swal("Opsss !","Experience field cannot be empty.","error");
        return false;
    }
    else if(skills == ""){
        swal("Opsss !","Skills field cannot be empty.","error");
        return false;
    }
    else if(file == ""){
        swal("Opsss !","File field cannot be empty.","error");
        return false;
    }
    else{
        return true;
    }
}


