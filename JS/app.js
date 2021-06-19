function clearErrors() {
    errors = document.getElementsByClassName('form-error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    //sets error inside tag of id
    Element = document.getElementById(id);
    Element.getElementsByClassName('form-error')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['contact-form']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Please enter your full name");
        returnval = false;
    }
    if (name.length == 0) {
        seterror("name", "*Name Cannot be Blank");
        returnval = false;
    }

    var email = document.forms['contact-form']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['contact-form']["phone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be 10 digit");
        returnval = false;
    }

    var subject = document.forms['contact-form']["fsubject"].value;
    if (subject.length > 20) {
        seterror("subject", "*subject is not more than 20 words");
        returnval = false;
    }


    return returnval;
}