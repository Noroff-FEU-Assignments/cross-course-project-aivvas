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


function fullname(name){
  if(name.length < 5)
    text = "Please Enter valid Name";
    return false;
};

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};

function subject(subject){
if(subject.length < 10)
    text = "Please Enter Correct Subject";
    return false;
};

function address(address){
    if(address.length < 5)
      text = "Please Enter valid address";
      return false;
};

function cardnumber(cardnumber){
    if(cardnumber.length < 16)
      text = "Please Enter valid card number";
      return false;
};

function expiry(expirtydate){
    if(expirtydate.length < 4)
      text = "Please Enter valid expiry date";
      return false;
};

function securitycode(securitycode){
    if(securitycode.length < 3)
      text = "Please Enter valid security code";
      return false;
};