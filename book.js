function collapseIconSwap() {
	var crossIcon = document.getElementById("crossIcon");
	var hamburgerIcon = document.getElementById("hamburgerIcons");
	if (!$("#myNavbar").is(":visible")) {
		hamburgerIcon.style.display="none";
		crossIcon.style.display="block";
	}
	else {
		crossIcon.style.display="none";
		hamburgerIcon.style.display="block";
	}
}

function showColor(){
	var colorCheck = document.getElementById("colorCheck");
	var colorDiv = document.getElementById("colorDiv");
	if (colorCheck.checked == true){
		colorDiv.style.display="block";
	}
	else colorDiv.style.display="none";
}
function showCut(){
	var colorCheck = document.getElementById("cutCheck");
	var colorDiv = document.getElementById("cutDiv");
	if (colorCheck.checked == true){
		colorDiv.style.display="block";
	}
	else colorDiv.style.display="none";
}

function book() {
	loadSomething();
	var halt = false;
	var returningClient = document.getElementsByName('newReturnRadio')[0].checked;
	var newClient = document.getElementsByName('newReturnRadio')[1].checked;
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var cutBool = document.getElementById('cutCheck').checked;
	var colorBool = document.getElementById('colorCheck').checked;
	var keratinBool = document.getElementById('keratinCheck').checked;
	var tueBool = document.getElementById('tuesdayCheck').checked;
	var wedBool = document.getElementById('wednesdayCheck').checked;
	var thuBool = document.getElementById('thursdayCheck').checked;
	var friBool = document.getElementById('fridayCheck').checked;
	var morningBool = document.getElementById('morningCheck').checked;
	var afternoonBool = document.getElementById('afternoonCheck').checked;
	var customerTypeString;
	var cutString;
	var colorString;
	var subjectString;
	var messageString;
	var nameString;
	var emailString;
	var phoneString;
	var serviceString;
	var dayString;
	var timeString;
	
	//Missing info divs
	var returnDiv = document.getElementById('returnMissing');
	var nameDiv = document.getElementById('nameMissing');
	var emailDiv = document.getElementById('emailMissing');
	var phoneDiv = document.getElementById('phoneMissing');
	var serviceDiv = document.getElementById('serviceMissing');
	var cutDiv = document.getElementById('cutMissing');
	var colorDiv = document.getElementById('colorMissing');
	var dayDiv = document.getElementById('dayMissing');
	var timeDiv = document.getElementById('timeMissing');
	
	//Getting cut description
	if (cutBool){
		cutString = document.getElementById('cutServiceDescription').value;
	}
	//Getting color description
	if (colorBool) {
		colorString = document.getElementById('colorServiceDescription').value;
	}
	
	//Checking that client has selected returning or new
	if (!returningClient && !newClient) {
		returnDiv.style.display = "block";
		halt = true;
	}
	else {
		returnDiv.style.display = "none"
	}
	//Checking that the name has a length and isn't just spaces
	if (name.length === 0 || !name.trim()) {
		nameDiv.style.display = "block";
		halt = true;
	}
	else {
		nameDiv.style.display = "none";
	}
	//Checking that the email has a length and isn't just spaces
	if (email.length === 0 || !email.trim()) {
		emailDiv.style.display = "block";
		halt = true;
	}
	else {
		emailDiv.style.display = "none";
	}
	//Checking that the phone number has a length and isn't just spaces
	if (phone.length === 0 || !phone.trim()) {
		phoneDiv.style.display = "block";
		halt = true;
	}
	else {
		phoneDiv.style.display = "none";
	}	
	//Checking that a service was selected
	if (!cutBool && !colorBool && !keratinBool) {
		serviceDiv.style.display = "block";
		halt = true;
	}
	else {
		serviceDiv.style.display = "none";
	}
	//Checking that a cut description was given if checked
	if (cutBool && cutString.length === 0 || cutBool && !cutString.trim()) {
		cutDiv.style.display = "block";
		halt = true;
	}
	else {
		cutDiv.style.display = "none";
	}
	//Checking that a color description was given if checked
	if (colorBool && colorString.length === 0 || colorBool && !colorString.trim()) {
		colorDiv.style.display = "block";
		halt = true;
	}
	else {
		colorDiv.style.display = "none";
	}
	//Checking that a day was selected
	if (!tueBool && !wedBool && !thuBool && !friBool) {
		dayDiv.style.display = "block";
		halt = true;
	}
	else {
		dayDiv.style.display = "none";
	}
	//Checking that a time was selected
	if (!morningBool && !afternoonBool) {
		timeDiv.style.display = "block";
		halt = true;
	}
	else {
		timeDiv.style.display = "none";
	}
	
	if (halt) {
		unloadSomething();
		return;
	}
	
	//Building and formatting the message
	if (cutBool) {
		serviceString = "Cut/Style";
	}
	if (colorBool) {
		if (cutBool) {
			serviceString = serviceString + ", Color";
		}
		else {
			serviceString = "Color";
		}
	}
	if (keratinBool) {
		if (cutBool || colorBool) {
			serviceString = serviceString + ", Keratin";
		}
		else {
			serviceString = "Keratin";
		}
	}
	
	if (returningClient) {
		customerTypeString = "Returning";
	}
	else {
		customerTypeString = "New";
	}
	
	if (tueBool) {
		dayString = "Tuesday";
	}
	if (wedBool) {
		if (tueBool) {
			dayString = dayString + ", Wednesday";
		}
		else {
			dayString = "Wednesday";
		}
	}
	if (thuBool) {
		if (tueBool || wedBool) {
			dayString = dayString + ", Thursday";
		}
		else {
			dayString = "Thursday";
		}
	}
	if (friBool) {
		if (tueBool || wedBool || thuBool) {
			dayString = dayString + ", Friday";
		}
		else {
			dayString = "Friday";
		}
	}
	if (morningBool && !afternoonBool) {
		timeString = "Morning";
	}
	else if (afternoonBool && !morningBool) {
		timeString = "Afternoon";
	}
	else {
		timeString = "Morning and Afternoon";
	}
	
	
	
	nameString = "<strong>Name:</strong> " + name;
	phoneString = "<strong>Phone:</strong> " + phone;
	emailString = "<strong>Email:</strong> " + email;
	messageString = "<strong>" + customerTypeString + " Client</strong><br>" + nameString + '<br>' + phoneString + '<br>' + emailString + '<br><strong>Services Requested:</strong> ' + serviceString;
	if (cutBool) {
		messageString = messageString + "<br><strong>Cut/Style Description:</strong>" + "<p style=\"margin-left: 60px; margin-top: 10px; width: 300px\">" + cutString + '</p>';
	}
	if (colorBool) {
		messageString = messageString + '<br><strong>Color Description:</strong>' + '<p style=\"margin-left: 60px; margin-top: 10px; width: 300px\">' + colorString + '</p>';
	}
	messageString = messageString + "<br><strong>Days Available: </strong>" + dayString + "<br><strong>Time Available: </strong>" + timeString;
	
	
	subjectString = serviceString + " service request from " + name;
	bookEmail(subjectString, messageString);
}

function loadSomething() {
	var loadFill = document.getElementById("loadFill");
	loadFill.style.display = "flex";
}

function unloadSomething() {
	var loadFill = document.getElementById("loadFill");
	loadFill.style.display = "none";
}

function bookEmail (subjectString, messageString) {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "radiant.hair.booker@gmail.com",
		Password : "2CF55017820A3C85E1F3B3E88ADDA6CEBC8F",
		To : 'radiant.hair.booker@gmail.com',
		From : "radiant.hair.booker@gmail.com",
		Subject : subjectString,
		Body : messageString
	}).then(emailSuccess, message => alert(message));
}

function emailSuccess() {
	unloadSomething();
	var formDiv = document.getElementById('formHolder');
	var successDiv = document.getElementById('successDiv');
	formDiv.style.display="none";
	successDiv.style.display="block";
}