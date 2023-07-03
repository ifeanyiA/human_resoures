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
    
}