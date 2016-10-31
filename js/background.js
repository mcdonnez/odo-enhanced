var parent = chrome.contextMenus.create({"title":"Barnabot"});
var child1 = chrome.contextMenus.create({"title":"Add Question", 
                  "parentId": parent, "onclick": questionOnClick});
var child2 = chrome.contextMenus.create({"title":"Add Answer", 
                  "parentId": parent, "onclick": answerOnClick})
var child2 = chrome.contextMenus.create({"title":"Teach Barnabot", 
                  "parentId": parent, "onclick": teachBarnabot})
var child3 = chrome.contextMenus.create({"title": "Reset Q and A",
                  "parentId": parent, "onclick": resetQandA})
var child4 = chrome.contextMenus.create({"title": "Show Q and A",
                  "parentId": parent, "onclick": showQandA})

function questionOnClick(info, tab) {
  question = prompt("Please paste the question into the box");
  if (question != null){
    storeData(question, null);
  }
}

function answerOnClick(info, tab) {
  answer = prompt("Please paste the answer into the box");
  if (answer != null){
    storeData(null, answer);
  }
}

function teachBarnabot(info, tab) {
    var hasQuest;
    var obj1 = {};
    var key1 = "question";
    var key2 = "answer";
    chrome.storage.local.get('question', function (obj) {
      if (obj.question != null){
        obj1[key1] = obj.question;
        console.log("Set Question: "+obj1[key1]);
        hasQuest = 1;
      }
      else if (obj.question == null){
        hasQuest = 0;
      }
    });
    chrome.storage.local.get('answer', function (obj) {
      if ((obj.answer != null)&&(hasQuest!=0)){
        obj1[key2] = obj.answer;
        console.log("Set Answer: "+obj1[key2]);
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://itwiki.corp.qualtrics.com:2345/newData?params="+JSON.stringify({"data":{"question":obj1[key1],"answer":obj1[key2]}}), false);
        alert("Barnabot is getting smarter");
        var key="question";
        var obj = {};
        obj[key] = null;
        chrome.storage.local.set(obj, function() {
          console.log('Question Reset: '+obj.question);
        });
        var key="answer";
        var obj = {};
        obj[key] = null;
        chrome.storage.local.set(obj, function() {
          console.log('Answer Reset: '+obj.answer);
        });
        xhttp.send();
      }
      else{
        alert("one or more fields is empty. Please reset and try again");
        return;
      }
    });
}

function storeData(question, answer) {
  if ((question != null)&&(answer==null)){
    var key="question";
    var obj = {};
    obj[key] = question;
    chrome.storage.local.set(obj, function() {
        console.log('Question Initialized: '+obj.question);
    });  
  }
  else if ((answer != null)&&(question==null)){
    var key="answer";
    var obj = {};
    obj[key] = answer;
    chrome.storage.local.set(obj, function() {
        console.log('Answer Initialized: '+obj.answer);
    });  
  }
  else {
    
  }
}

function resetQandA(){
  var key="question";
  var obj = {};
  obj[key] = null;
  chrome.storage.local.set(obj, function() {
    console.log('Question Reset: '+obj.question);
  });
  var key="answer";
  var obj = {};
  obj[key] = null;
  chrome.storage.local.set(obj, function() {
    console.log('Answer Reset: '+obj.answer);
  });
  alert("Question and Answer has been Reset")
}

function showQandA(){
  var q;
  var a;
  chrome.storage.local.get("question", function(obj){
    q = obj.question;
  });
  chrome.storage.local.get("answer", function(obj){
    a = obj.answer;
    alert("Question: "+q+", Answer: "+a);
  });
  
}

chrome.runtime.onInstalled.addListener(function(details){
	if(details.reason == "install"){
    	var key="prefSite";
  		var obj = {};
 		obj[key] = '1https://google.com/search?q=site:qualtrics.com/support ';
 		chrome.storage.sync.set(obj, function() {
    		console.log('Initialized');
})}});

function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Search Qualtrics Support for: %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.storage.sync.get('prefSite', function (obj) {
      console.log(obj);
      if (text.indexOf('s ')==0){
        var sURL='https://google.com/search?q=site:qualtrics.com/support' + text.substring(1,(text.length));
        chrome.tabs.create({url: sURL});
        // chrome.tabs.create({url: "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=S&LastName="+text.substring(2,text.length)});
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=S&LastName="+text.substring(2,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('sf ')==0){ //automatically loads the first google result. used if you know the name of the support page
        var sfURL="https://duckduckgo.com/?q=!ducky+"+text.substring(2,(text.length))+"+site%3Aqualtrics.com";
        chrome.tabs.create({url: sfURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SF&LastName="+text.substring(3,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('kb ')==0){
        var kbURL='http://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
        chrome.tabs.create({url: kbURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=KB&LastName="+text.substring(3,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('uid ')==0){
        var uidURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uidURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=UID&LastName="+text.substring(4,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('uem ')==0){
        var uemURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uemURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=UEM&LastName="+text.substring(4,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('sid ')==0){
        var sidURL='http://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
        chrome.tabs.create({url: sidURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SID&LastName="+text.substring(4,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('sales ')==0){
        var salesURL='https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(6, (text.length));
        chrome.tabs.create({url: salesURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SALES&LastName="+text.substring(6,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('link ')==0){
        var linkURL='https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
        chrome.tabs.create({url: linkURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=LINK&LastName="+text.substring(5,text.length), false);
        xhttp.send();
      }
      else if (text.indexOf('sali ')==0){
      	var salesURL='https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(5, (text.length));
      	var linkURL='https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
      	chrome.tabs.create({url: salesURL });
      	chrome.tabs.create({url: linkURL });
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SALI&LastName="+text.substring(5,text.length), false);
        xhttp.send();
      }
      else {
          var site=obj.prefSite.substring(0,1)
          var QSearchURL = obj.prefSite.substring(1,(obj.prefSite.length)) + text;
          chrome.tabs.create({url: QSearchURL });
          var xhttp = new XMLHttpRequest();
          xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName="+site+"&LastName="+text, false);
          xhttp.send();
      }
    }); 
});

