// JS file to validate purchase form

let form = document.getElementById('form');
let name = document.getElementById('name');
let adress = document.getElementById('adress');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let error = document.getElementsByClassName('error');
let mailVal = document.getElementById('mail-validation');
let phoneVal = document.getElementById('phone-validation');
let btn = document.getElementById('btn');

//Event Listener on click
btn.addEventListener('click',showError);

// Function for checkinng is there a empty field
// All fields are required
function validation () {
  
    //name
    if(name.value == "") { error[0].style.display = 'block';  }
    else { error[0].style.display = 'none';}
    
    // adress
    if(adress.value == "") { error[1].style.display = 'block'; }
    else { error[1].style.display = 'none';}

    //phone
    if(phone.value == "") { error[2].style.display = 'block'; }
    else { error[2].style.display = 'none';}

    //email
    if(email.value == "") { error[3].style.display = 'block'; } 
    else { error[3].style.display = 'none';} 
    
}
// Function for email validation
function emailValidation () {
    let myemail = email.value;

    // Regex pattern for valid mail format 
    let emailPattern = /^[a-z\d-\.]+\@[a-z\d-]+(\.[a-z]{1,4}){1,2}$/;

    // Case when pattern mached
    if(myemail.match(emailPattern)) { 
        error[3].style.display = 'none';
       mailVal.innerHTML ="Email je validan"; 
       mailVal.style.color = 'green';  
    }

    // Case when pattern didnt mached
    else {
        mailVal.innerHTML ="Email nije validan";
        mailVal.style.color = 'red';    
    }   
}

// Function for phone number validation
function phoneValidation() {
    let myphone = phone.value;

    // Regex pattern for valid phone number format 
    let phonePattern = /[0-9]{3}\s\d{3}\s\d{3}/;

    // Case when pattern mached
    if(myphone.match(phonePattern)) {
        error[2].style.display = 'none';
        phoneVal.innerHTML ="Telefon je validan";
        phoneVal.style.color = 'green'; 
    } 

    // Case when didnt pattern mached
    else {
        phoneVal.innerHTML ="Telefon nije validan";
        phoneVal.style.color = 'red';  
    }
}

// This Function will show alert if all fields are validated
function sendAlert() { 
    if(error[0].style.display == 'none' && error[1].style.display == 'none' && 
    mailVal.style.color == 'green' && phoneVal.style.color == 'green' ) { 
        alert( 'Narudžba poslana' ); 
        }  
    }

// This Function calls other functions on click
function showError () {
    validation ();
    emailValidation ();
    phoneValidation ();
    sendAlert ();
}