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

chrome.omnibox.onInputEntered.addListener(function (text) {
	chrome.storage.sync.get('prefSite', function (obj) {
		if (text.indexOf('s ') == 0) {
			var sURL = 'https://google.com/search?q=site:qualtrics.com/support' + text.substring(1, (text.length));
			chrome.tabs.create({url: sURL});

		} else if (text.indexOf('sf ') == 0) { //automatically loads the first google result. used if you know the name of the support page
			var sfURL = "https://duckduckgo.com/?q=!ducky+" + text.substring(2, (text.length)) + "+site%3Aqualtrics.com/support";
			chrome.tabs.create({url: sfURL});
		} else if (text.indexOf('kb ') == 0) {
			var kbURL = 'https://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
			chrome.tabs.create({url: kbURL});
		} else if (text.indexOf('uid ') == 0) {
			var uidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
			chrome.tabs.create({url: uidURL});
		} else if (text.indexOf('uem ') == 0) {
			var uemURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
			chrome.tabs.create({url: uemURL});
		} else if (text.indexOf('sid ') == 0) {
			var sidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
			chrome.tabs.create({url: sidURL});
		} else if (text.indexOf('sales ') == 0) {
			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(6, (text.length));
			chrome.tabs.create({url: salesURL});
		} else if (text.indexOf('link ') == 0) {
			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
			chrome.tabs.create({url: linkURL});
		} else if (text.indexOf('sali ') == 0) {
			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(5, (text.length));
			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
			chrome.tabs.create({url: salesURL});
			chrome.tabs.create({url: linkURL});
		} else {
			var site = obj.prefSite.substring(0, 1);
			var QSearchURL = obj.prefSite.substring(0, (obj.prefSite.length)) + text;
			chrome.tabs.create({url: QSearchURL});
		}
	});
});

chrome.runtime.onMessage.addListener(
	function (request, sender) {
		if (request.msg === "myaccount_clicked" || request.msg === "promote_clicked") {
			var datacenter = request.data.datacenter;
			var ticketID = request.data.ticketID;
			console.log("message received");
			chrome.storage.sync.get("eid", function (obj) {
				var userID = obj.eid;
				$(document).ready(function () {
					getUserList(datacenter, userID, request.msg, ticketID);
				});
			});
		};
	});


function makePersonalUrl(dc, qualtricsID, ticketID) {
	if (dc == "CO1") {
		chrome.tabs.create({ "url": "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserAccountAccess&bid=qus1&uid=" + qualtricsID + "&RSLogin&FromTicket=" + ticketID + "&Direct" });
	}
	else if (dc === "AZ1") {
		chrome.tabs.create({ "url": "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserAccountAccess&bid=qaz1&uid=" + qualtricsID + "&RSLogin&FromTicket=" + ticketID + "&Direct" });
	}
	else if (dc === "CA1") {
		chrome.tabs.create({ "url": "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserAccountAccess&bid=qcorp&uid=" + qualtricsID + "&RSLogin&FromTicket=" + ticketID + "&Direct" });
	}
	else if (dc === "EU1") {
		chrome.tabs.create({ "url": "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserAccountAccess&bid=qeurope&uid=" + qualtricsID + "&RSLogin&FromTicket=" + ticketID + "&Direct" });
	}
	else if (dc === "AU1") {
		chrome.tabs.create({ "url": "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserAccountAccess&bid=qasia&uid=" + qualtricsID + "&RSLogin&FromTicket=" + ticketID + "&Direct" });
	}
}

function getUserList(datacenter, userID, msg, ticketID) {
	var requestURL = '';
	var APItoken = '';
	var qualtricsID = localStorage['qualtricsID' + datacenter] || '';
	switch (datacenter) {
		case 'CA1':
			requestURL = "https://ca1.qualtrics.com/API/v3/users";
			APItoken = "DN0IZVvgSpGxWA6NZCbBX05z4IucmDdx3hxIsk3P";
			break;
		case 'CO1':
			requestURL = "https://co1.qualtrics.com/API/v3/users";
			APItoken = "rp0jgST3Lg2iTCE2xZpvsSKoMJTnyULOlUTdFuoW";
			break;
		case 'AZ1':
			requestURL = "https://az1.qualtrics.com/API/v3/users";
			APItoken = "KbdFL5Lces6qzpQqkv27hwEMnqBmnR4foskSZREe";
			break;
		case 'AU1':
			requestURL = "https://au1.qualtrics.com/API/v3/users";
			APItoken = "9hTIVdvyVTbnLvb7YTqXDwFvLLm14DZxTlqx2ueI";
			break;
		case 'EU1':
			requestURL = "https://eu1.qualtrics.com/API/v3/users";
			APItoken = "v1L62gZaaO2zIFEZIfdohUrEKydT5cIVsawHxnC7";
			break;
		default:
			console.log('Not a valid datacenter - cannot generate request url');
			return 'error';
	}
	if (qualtricsID === '') {
		makeCall(requestURL, APItoken, userID, datacenter, msg, ticketID);
	}
	else if (msg === 'myaccount_clicked') {
		makePersonalUrl(datacenter, qualtricsID, ticketID);
	}
	else if (msg === 'promote_clicked') {
		promoteMBA(qualtricsID, userID, datacenter);
	}
	else { console.log("What do you want me to do!?") };



}

function makeCall(url, token, userID, datacenter, msg, ticketID) {

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": url,
		"method": "GET",
		"headers": {
			"x-api-token": token,
			"cache-control": "no-cache",
		}
	}

	$.ajax(settings).done(function (response) {
		var listing = response.result.elements;
		var nextPage = response.result.nextPage;
		var qualtricsID = '';
		var employeeID = userID + "+" + datacenter + "@qualtrics.com";
		for (var i = 0; i < listing.length; ++i) {
			if (listing[i].username.toLowerCase() === employeeID.toLowerCase()) {
				qualtricsID = listing[i].id;
				console.log(qualtricsID);
			}
		}
		if (qualtricsID !== '') {
			localStorage['qualtricsID' + datacenter] = qualtricsID;
			if (msg === 'myaccount_clicked') {
				makePersonalUrl(datacenter, qualtricsID, ticketID);
			}
			else if (msg === 'promote_clicked') {
				promoteMBA(qualtricsID, userID, datacenter);
			}
			else { console.log("What do you want me to do!?2") }
		}
		else if (nextPage !== null) {
			makeCall(nextPage, token, userID, datacenter, msg, ticketID);
		}
		else {
			console.log("userID not found");
		}
	});
}

function promoteMBA(qualtricsID, userID, datacenter) {
	var baseUrl = "http://odo.corp.qualtrics.com/?b=RSUserProfile&UserAccountPromotion&uid=" + qualtricsID + "&hours=1&reason=";
	var reason = prompt("Please enter the reason", "Extension Testing");
	var url = baseUrl + reason;
	var userURL = '';
	switch (datacenter) {
		case 'CA1':
			userURL = "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserProfile&bid=qcorp&uid=" + qualtricsID;
			break;
		case 'CO1':
			userURL = "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserProfile&bid=qus1&uid=" + qualtricsID;
			break;
		case 'AZ1':
			userURL = "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserProfile&bid=qaz1&uid=" + qualtricsID;
			break;
		case 'AU1':
			userURL = "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserProfile&bid=qasia&uid=" + qualtricsID;
			break;
		case 'EU1':
			userURL = "https://odo.corp.qualtrics.com/?a=ResearchSuite&b=RSUserProfile&bid=qeurope&uid=" + qualtricsID;
			break;
		default:
			console.log('Not a valid datacenter - cannot generate request url');
			return 'error';
	}

	var settings = {
		"url": url
	};
	var newURL = "https://odo.corp.qualtrics.com/?b=RSUserProfile&UserAccountPromotion&uid=" + qualtricsID + "&hours=1&reason=" + reason;
	$.ajax(settings).done(function (response) {
		var Responses= response;
		response.result;
		console.log(Responses);
		var test= response.error;
		if ( typeof test != 'undefined') {
			console.log("MBA promotion failed");
			postToSlack(userID, newURL, reason);
		}
	});
}

function postToSlack(userID, url, reason) {
	if (reason !== '') {
		payload = JSON.stringify({ "text": "@mbagrantors \n" + userID + " would like to have MBA for " + reason + "\n<" + url + ">" });
	}
	var settings = {
		"url": "https://hooks.slack.com/services/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",
		"username": "MBA Request",
		"icon_url": "https://login.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0wTaUBXzr2VM9ed",
		"data": payload,
		"dataType": "json",
		"processData": "false",
		"type": "POST"
	}
	$.ajax(settings).done(function (response) {
		console.log(response.text);
	});
}
