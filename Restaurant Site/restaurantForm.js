function validateForm(){
    var contactName = document.forms["contactUs"]["name"].value;
    var phoneNumber = document.forms["contactUs"]["phone"].value;
   
    if(contactName == "" || phoneNumber == "" ){
        alert("Your name and phone number are required in order to submit this form. However, filling in as many fields as possible ensures the best experience. Once finished, please click 'Submit'.");
        return false;
    }else{
    alert("Your request has been submitted. We will be contacting you soon!");
    return false;
    }

}

//Couldn't get this to work
function checkFilled() {
    var inputVal = document.getElementById("name, phone");
    if (inputVal.value == "") {
        inputVal.style.backgroundColor = "red";
    }
    else{
        inputVal.style.backgroundColor = "";
    }
}


