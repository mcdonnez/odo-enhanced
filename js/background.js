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
	  	var QSearchURL = obj.prefSite + text;
	  	chrome.tabs.create({url: QSearchURL });
	});
});

