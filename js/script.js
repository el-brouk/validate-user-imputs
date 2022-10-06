//Provide the solution code here

let contacts = [];


function init() {
    // listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
   
   document.getElementById('addContactNo').addEventListener('click', createContact) 
    function createContact () {
        let div = document.createElement('div');
        div.classList.add('col-md-6');
        //input.class = "form-control form-control-sm";
        let input = document.createElement('input');
        input.classList.add('form-control');
        input.name = "addContact";
        div.appendChild(input);
        let element = document.getElementById('contactNos');
        element.appendChild(div);
    }
    //disable all dates for whom age is less than 18
    setMaxDate(document.getElementById('birthdate'));

}

const submitContact = (event) => {
 //contact object captures all the inputs provided
 let contactForm = document.querySelector('form');
    
 let contact = Object.fromEntries(new FormData(contactForm));
 
 let result = validateData(contact);
 return result;
 
}
 
 const validateData = (contact) => {
console.log(contact);
 //errors object captures all the validation errors
 let error = {
     firstNameError: validateFirstname(contact.firstname, 'FirstName'),
     emailError: validateEmail(contact.email),
     homeNoError: validateHomeNo(contact.homeNo),
     workNoError:validateWorkNo(contact.workNo),
     notesError: validateNotes(contact.notes),
 }

 //display validation summary with error messages
 //if no errors, push the contact to contacts array
 let errorMessages = Object.values(error).filter(e => e !== '');
 if (errorMessages.length === 0) {
     contacts.push(contact);
     alert('feedback submitted');
     return true;
    } else {
 //display validation summary with error messages
     displayValidationSummary(errorMessages);
 //display error messages alongside input fields
     displayIndividualErrorMessages(errorMessages);
     return false;
 }

 //contacts can be logged on to console, or can even be updated on UI
 console.log(contacts);
}



//function to display validation summary with error messages provided
function displayValidationSummary(error) {
    let list = error.map(e => `<li>${e}</li>`).join('');
    document.getElementsByTagName('ul')[0].innerHTML = list;
}

//function to display error messages alongside the input fields
function displayIndividualErrorMessages(error) {
    let smallElements = document.getElementsByTagName('small');
    [...smallElements].forEach((element) => {
        element.innerText = error[element.id]
    });
}
//function to validate firstName
const validateFirstname = (firstName) => {
    let validRegex = "^[a-zA-Z]";
    let firstNameError = validateInput(firstName,"FirstName");
    return firstNameError !== '' ? firstNameError : !firstName.match(validRegex) ? "FirstName can contain only alphabets and (.)" : '';    
}
//function to validate lastName
const isEmpty = value => value === '' || value === undefined || value === null;

const validateInput = (value, fieldName) => isEmpty(value) ? `${fieldName} cannot be left blank` : '';

//function to validate email
const validateEmail = (email) => {
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    let emailError = validateInput(email,"Email");
    return emailError !== '' ? emailError : !email.match(validRegex) ? "Invalid Email" : '';    
}
//function to validate home no
const validateHomeNo = (HomeNo) => {
	//let validRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/;
    let validRegex = /^\+(\d{2})[-. ]?\(?(\d{3})|(\d{4})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
	let homeNoError = validateInput(HomeNo,"Home No");
	return homeNoError !== '' ? homeNoError : !HomeNo.match(validRegex) ? 'Home Contact No should start with country code prefixed by + and followed by 10 digits' : '';
}
//function to validate work no
const validateWorkNo = (WorkNo) => {
	let validRegex = /^\+(\d{2})[-. ]?\(?(\d{3})|(\d{4})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
	
	return workNoError !== !WorkNo.match(validRegex) ? 'Work Contact No should start with country code prefixed by + and followed by 10 digits' : '';
}
//function to validate additional contact no

//function to validate additional contact no

//function to validate notes
const validateNotes = (notes) => {
    let notesError = validateInput(notes, 'Notes');
    return notesError !== '' ? notesError : notes.length > 200 ? "Notes should contain maximum of 200 characters" : '';
}
//disable all dates for whom age is less than 18
const setMaxDate = element => {
    element !== null ? element.setAttribute('max', new Date().toISOString().split('T')[0]) : element;
}

module.exports = submitContact
