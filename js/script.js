//Cart form and contact form//

const cartform = document.querySelector(".cart-form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const address = document.querySelector(".address");
const subject = document.querySelector(".subject");
const cardnumber = document.querySelector(".card-number");
const expirydate = document.querySelector(".expiry-date");
const securitycode = document.querySelector(".security-code");
const submitcart = document.querySelector(".submit-cart");
const submit = documentt.querySelector(".submit");



function labelForm(){
    if (lengthValidation(name.value, 0 === true)){
        console.log.style.display = "none";
    } else {
        console.log.style.display = "name required"
    }

function emailValidation(email){
     const regEx = /\S+@\S+\.\S+/;
     const email = regEx.test(email);
     return email;
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

 var submitbutton = document.querySelector(".submit")
     submitbutton.onsubmit = function(){
     alert("Your email has been succesfully sent!");
     return true;
 }

labelForm();
