function labelForm(){
    if (lengthValidation(name.value, 0 === true)){
        console.log.style.display = "none";
    } else {
        console.log.style.display = "name required"
    }

 if(lengthValidation(email.value,  /\S+@\S+\.\S+/ === true)){
     console.log.style.display = "none";
 } else {
     console.log.style.display = "Please enter valid email"
 }

 if(lengthValidation(address.value, 24 === true)){
     console.log.style.display = "none"
 } else {
     console.log.style.display = "Address not valid"
 }

 if(lengthValidation(subject.value, 9 === true)){
     console.log.style.display = "none"
 } else {
     console.log.style.display = "Valid subject required"
 };

 function lengthValidation(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)){
        return true;
    } else {
        alert("Invalid e-mail")
        return false;
    }
 }

 if (lengthValidation(email.value, "anystring@anystring.anystring" === true )){
        console.log.style.display = "none"
     } else {
          console.log.style.display = "invalid email";
     }
 }


labelForm();