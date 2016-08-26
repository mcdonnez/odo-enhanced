/*Defines function used for interpreting query strings*/
function getQueryVariable(variable){
 var query = window.location.search.substring(1);
 var vars = query.split("&");
 for (var i=0;i<vars.length;i++) {
   var pair = vars[i].split("=");
   if(pair[0] == variable){
    console.log("Found something");
    return pair[1];}
 }
 console.log("Found nothing");
 return(false);
}

/*Get the variables we care about from query strings*/
surveyTerm = getQueryVariable("autoSurvey");
emailTerm = getQueryVariable("autoEmail");
userTerm = getQueryVariable("autoUser");

/*Define function used when a Survey ID is found*/
function surveySearchOnLoad(surveyString){
	var surveySearch = document.getElementById("SearchText");
	var surveySubmit = document.getElementById("SearchButton");
	surveySearch.value = surveyString;
	surveySubmit.click();
}

/*NEEDS REVISION: Define function used when an email is found*/
function emailSearchOnLoad(emailString){
  var emailSearch = document.getElementById("Email");
  var emailSubmit = document.getElementById("SearchButton");
  emailSearch.value = emailString;
  emailSubmit.click();
}

/*NEEDS REVISION: Define function used when a username is found*/
function userSearchOnLoad(userString){
  var userSearch = document.getElementById("UserName");
  var userSubmit = document.getElementById("SearchButton");
  console.log(userSearch);
  userSearch.value = userString;
  userSubmit.click();
}

/*Check to see which variables we've defined, and run the appropriate code*/
if (surveyTerm) {
  console.log("Running survey query");
  surveySearchOnLoad(surveyTerm);
} else {
  console.log("No survey query found");
}

/*NEEDS TO BE ABLE TO READ @ SIGNS*/
if (emailTerm) {
  console.log("Running email query");
  decodedEmailTerm = decodeURIComponent(emailTerm);
  emailSearchOnLoad(decodedEmailTerm);
} else {
  console.log("No email query found");
}

/*NEEDS TO BE ABLE TO READ @ SIGNS*/
if (userTerm) {
  console.log("Running user query");
  decodedUserTerm = decodeURIComponent(userTerm);
  userSearchOnLoad(decodedUserTerm);
} else {
  console.log("No user query found");
}