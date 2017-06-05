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
		description: 'Search Qualtrics Support for: %s'
	});
}

resetDefaultSuggestion();

chrome.omnibox.onInputCancelled.addListener(function () {
	resetDefaultSuggestion();
});

chrome.omnibox.onInputEntered.addListener(function (text) {
	chrome.storage.sync.get('prefSite', function (obj) {
		var xhttp = new XMLHttpRequest();
		var salesURL;
		var linkURL;
		if (text.indexOf('s ') == 0) {
			var sURL = 'https://google.com/search?q=site:qualtrics.com/support' + text.substring(1, (text.length));
			chrome.tabs.create({url: sURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=S&LastName=" + text.substring(2, text.length), false);

		} else if (text.indexOf('sf ') == 0) { //automatically loads the first google result. used if you know the name of the support page
			var sfURL = "https://duckduckgo.com/?q=!ducky+" + text.substring(2, (text.length)) + "+site%3Aqualtrics.com";
			chrome.tabs.create({url: sfURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SF&LastName=" + text.substring(3, text.length), false);
		} else if (text.indexOf('kb ') == 0) {
			var kbURL = 'https://odo.corp.qualtrics.com/wiki/index.php?search=' + text.substring(3, (text.length));
			chrome.tabs.create({url: kbURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=KB&LastName=" + text.substring(3, text.length), false);
		} else if (text.indexOf('uid ') == 0) {
			var uidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoUser=' + text.substring(4, (text.length));
			chrome.tabs.create({url: uidURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=UID&LastName=" + text.substring(4, text.length), false);
		} else if (text.indexOf('uem ') == 0) {
			var uemURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsUserSearch&autoEmail=' + text.substring(4, (text.length));
			chrome.tabs.create({url: uemURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=UEM&LastName=" + text.substring(4, text.length), false);
		} else if (text.indexOf('sid ') == 0) {
			var sidURL = 'https://odo.corp.qualtrics.com/?b=ProductToolsSurveySearch&autoSurvey=' + text.substring(4, (text.length));
			chrome.tabs.create({url: sidURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SID&LastName=" + text.substring(4, text.length), false);
		} else if (text.indexOf('sales ') == 0) {
			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(6, (text.length));
			chrome.tabs.create({url: salesURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SALES&LastName=" + text.substring(6, text.length), false);
		} else if (text.indexOf('link ') == 0) {
			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
			chrome.tabs.create({url: linkURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=LINK&LastName=" + text.substring(5, text.length), false);
		} else if (text.indexOf('sali ') == 0) {
			salesURL = 'https://qualtrics.my.salesforce.com/search/SearchResults?sbstr=' + text.substring(5, (text.length));
			linkURL = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + text.substring(5, (text.length));
			chrome.tabs.create({url: salesURL});
			chrome.tabs.create({url: linkURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=SALI&LastName=" + text.substring(5, text.length), false);
		} else {
			var site = obj.prefSite.substring(0, 1);
			var QSearchURL = obj.prefSite.substring(1, (obj.prefSite.length)) + text;
			chrome.tabs.create({url: QSearchURL});
			xhttp.open("GET", "https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?API_SELECT=ControlPanel&Version=2.5&Request=addRecipient&User=zacs%2Bca1%40qualtrics.com&Token=k4zxv0Rwx5uAULtu1vLZrTlCktEFSSztHEkYPx3r&Format=JSON&LibraryID=UR_6EuRzJuG6BBvNTD&PanelID=ML_9RHqBDIHuP6N8EJ&FirstName=" + site + "&LastName=" + text, false);
		}
		xhttp.send();
	});
});

