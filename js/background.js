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
        sURL='https://google.com/search?q=site:qualtrics.com/support' + text.substring(1,(text.length));
        chrome.tabs.create({url: sURL });
      }
      else if (text.indexOf('sf ')==0){ //automatically loads the first google result. used if you know the name of the support page
        sfURL='http://google.com/search?btnI=I%27m+Feeling+Lucky&sourceid=navclient&q=site:qualtrics.com/support' + text.substring(2,(text.length));
        console.log(sfURL);
        chrome.tabs.create({url: sfURL });
      }
      else if (text.indexOf('kb ')==0){
        kbURL='http://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
        chrome.tabs.create({url: kbURL });
      }
      else if (text.indexOf('uid ')==0){
        uidURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uidURL });
      }
      else if (text.indexOf('uem ')==0){
        uemURL='http://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
        chrome.tabs.create({url: uemURL });
      }
      else if (text.indexOf('sid ')==0){
        sidURL='http://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
        chrome.tabs.create({url: sidURL });
      }
      // else if (text.indexOf('sumos ')==0){
      // 	sumoURL="http://itwiki.corp.qualtrics.com:4040/#/homesumo-search-general"
      // 	chrome.tabs.create({url: sumoURL});
      // 	window.onload = function () {
      // 		document.getElementById("general-search-box").value=text.substring(6, (text.length)) + " _index=smtp";
      // 		document.getElementsByClassName("btn btn-success")[0].click();
      // 	}
      // }
      else {
	  	var QSearchURL = obj.prefSite + text;
	  	chrome.tabs.create({url: QSearchURL });
      }
	});
});

