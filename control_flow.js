//// Bottles of Beer Assignment ///////

for (i = 5; i > 0; i--) {
     if (i >= 2) {
     console.log(i + " bottles of beer on the wall,");
     console.log(i + " bottles of beer!");
     console.log("Take one down and pass it around, \n"); 
    } else if (i - 1 === 2) {
    	console.log(i + " bottle of beer on the wall");
   	} else {
     console.log(i + " bottle of beer on the wall,");
     console.log(i + " bottle of beer!");
     console.log("Take one down and pass it around, \n" + (i - 1) + " bottles of beer on the wall");
    }
}

//// Excercise 2: Login ////

var userLogin = {userName : "Rockin'", password : "Rockin' it!" };

var userAnswer = prompt("Enter password for Rockin'"); //// This is happening outside of the for loop and counts as one of the prompts. 

var tries = 0;
	for (i = 0; i < 2; i++) {	
		if (userAnswer === userLogin.password) {
			alert("Welcome back! You've once again gained access to the site!");
			break;
		} else if (userAnswer !== userLogin.password && tries < 2) { 
			alert("Go away! You're not who you say you are, imposter!");
			userAnswer = prompt("Enter password for Rockin'");
			tries += 1;
		}
	}

	if (userAnswer === userLogin.password && tries > 1) {  //// Interesting to note: by fixing one problem, you created another.
			alert("Welcome back! You've once again gained access to the site!");
		} else if (userAnswer === userLogin.password && tries === 2){
    	alert("You used your maximum three attempts. Please try again later. Goodbye.");
	}


//// Excercise 3: Security Questions ////

var securityQuestions = [
	{question : "What's your first name?", expectedAnswer : "Matthew"}, 
	{question : "What school did you go to for elementary", expectedAnswer : "Upland Terrace"}, 
	{question : "What street did you grow up on?", expectedAnswer : "3776"}];

	var userAnswer = prompt(securityQuestions[0].question);

for (i = 0; i < securityQuestions.length; i++) {
	if (userAnswer === securityQuestions[i].expectedAnswer) {
			userAnswer = prompt(securityQuestions[i + 1].question);
	} else if (userAnswer === securityQuestions[i].expectedAnswer) {
			userAnswer = prompt(securityQuestions[i].question);
	} else {
		alert("You're an imposter! What are you doing here!");
		break;
	}
}
