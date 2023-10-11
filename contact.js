function validInfo(){
    var firstName= document.getElementById("firstName").value;
    var secondName= document.getElementById("secondName").value;
    var phoneNo= document.getElementById("phoneNo").value;
    var branchName= document.getElementById("branchName").value;
    var email_form= document.getElementById("email_form").value;
    var message_form= document.getElementById("message_form").value;
    var error_message= document.getElementById("error_message");

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    error_message.style.padding = "10px";
    var text;
    if(firstName.length < 3){
        text= "Please Enter valid First Name";
        error_message.innerHTML= text;
        return false;
    }
    if(secondName.length < 3){
        text= "Please Enter valid Second Name";
        error_message.innerHTML= text;
        return false;
    }
    if( isNaN(phoneNo) || phoneNo.length !=11  ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }
    if( emailRegex.test(email_form)== false ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }
    if( message_form.length<=50 ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }

}



