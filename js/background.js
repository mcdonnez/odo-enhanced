chrome.runtime.onInstalled.addListener(function (details) {
	if (details.reason == "install") {
		var key = "prefSite";
		var obj = {};
		obj[key] = '1https://google.com/search?q=site:qualtrics.com/support ';
		chrome.storage.sync.set(obj, function () {
		})
	}
});

function resetDefaultSuggestion() {
	chrome.omnibox.setDefaultSuggestion({
		description: 'Search for: %s'
	});
}

resetDefaultSuggestion();

chrome.omnibox.onInputCancelled.addListener(function () {
	resetDefaultSuggestion();
});
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.msg === "button_clicked") {
			var sid = request.data;
			var link= request.link;
			chrome.tabs.create({ "url":link+ sid, "active": false });
		};
	});



// chrome.omnibox.onInputEntered.addListener(function (text) {
// 	chrome.storage.sync.get('prefSite', function (obj) {
// 		if (text.indexOf('s ') == 0) {
// 			var sURL = 'https://google.com/search?q=site:qualtrics.com/support' + text.substring(1, (text.length));
// 			chrome.tabs.create({url: sURL});

// 		} else if (text.indexOf('sf ') == 0) { //automatically loads the first google result. used if you know the name of the support page
// 			var sfURL = "https://duckduckgo.com/?q=!ducky+" + text.substring(2, (text.length)) + "+site%3Aqualtrics.com/support";
// 			chrome.tabs.create({url: sfURL});
// 		} else if (text.indexOf('kb ') == 0) {
// 			var kbURL = 'https://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
// 			chrome.tabs.create({url: kbURL});
// 		} else if (text.indexOf('uid ') == 0) {
// 			var uidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
// 			chrome.tabs.create({url: uidURL});
// 		} else if (text.indexOf('uem ') == 0) {
// 			var uemURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
// 			chrome.tabs.create({url: uemURL});
// 		} else if (text.indexOf('sid ') == 0) {
// 			var sidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
// 			chrome.tabs.create({url: sidURL});
// 		} else if (text.indexOf('sales ') == 0) {
// 			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(6, (text.length));
// 			chrome.tabs.create({url: salesURL});
// 		} else if (text.indexOf('link ') == 0) {
// 			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
// 			chrome.tabs.create({url: linkURL});
// 		} else if (text.indexOf('sali ') == 0) {
// 			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(5, (text.length));
// 			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
// 			chrome.tabs.create({url: salesURL});
// 			chrome.tabs.create({url: linkURL});
// 		} else {
// 			var site = obj.prefSite.substring(0, 1);
// 			var QSearchURL = obj.prefSite.substring(1, (obj.prefSite.length)) + text;
// 			chrome.tabs.create({url: QSearchURL});
// 		}
// 	});
// });

