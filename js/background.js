chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
    	var key="prefSite";
  		var obj = {};
 		obj[key] = 'https://google.com/search?q=site:qualtrics.com/support ';
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
        chrome.tabs.create({url: sURL });
      }
      else if (text.indexOf('sf ')==0){ //automatically loads the first google result. used if you know the name of the support page
        var sfURL='http://google.com/search?btnI=I%27m+Feeling+Lucky&sourceid=navclient&q=site:qualtrics.com/support' + text.substring(2,(text.length));
        console.log(sfURL);
        chrome.tabs.create({url: sfURL });
      }
      else if (text.indexOf('kb ')==0){
        var kbURL='http://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
        chrome.tabs.create({url: kbURL });
      }
      else if (text.indexOf('uid ')==0){
        var uidURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uidURL });
      }
      else if (text.indexOf('uem ')==0){
        var uemURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uemURL });
      }
      else if (text.indexOf('sid ')==0){
        var sidURL='http://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
        chrome.tabs.create({url: sidURL });
      }
      else {
	  	var QSearchURL = obj.prefSite + text;
	  	chrome.tabs.create({url: QSearchURL });
      }
	});
});

