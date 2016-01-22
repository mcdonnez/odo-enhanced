console.log("Success! Odo Enhanced Works!");
/* ------------- Built by Zach McDonnell & Matt Bloomfield---------------- */
/* ------------- Return query string in var urlParams ---------------- */

/*-----Retrieve variables from Chrome storage--------*/

var EmailButtonOn;
var ClinicButtonOn;
var ClinicStartTime;
var ClinicEndTime;
var ClinicDay
var MiniTicketOn;
var HelpDeskTabOn;
var DesignTabOn;
var EasterEggsOn;
var PlaybookTabOn;
var SummitTriggerOn;
var SnippetsOn;
var SnippetsClosed;
var SnippetsDay;
var SnippetsColor;
var ShowGradProgressOn;
var EmpID;
var Theme;
var TicketGoal;
var GoalDate;
var CurrentDate = new Date();
var currentDay = CurrentDate.getDay();
var currentHour = CurrentDate.getHours();
var currentMinutes = CurrentDate.getMinutes();
var TipsOn;
var myName;
var panelsTabOn;
var loginText;
var calmAlertsOn;
var minimalPostsOn;


function getVars() {
	chrome.storage.sync.get({
		em: "", //email button
		cl: "", // clinic button
		sct: "", //Clinic start time
		ect: "", // Clinic End Time
		cdn: "", // Clinic Day
		mt: '', // minify the ticket button
		hd: true, // Help Desk Tab
		de: "", // Design Tab
		ee: "", // Easter Eggs
		pb: "", // Playbook Tab
		st: true, // Summit Trigger
		s: true, //Snippets
		sc: "", // Snippets Closed
		sd: 4, // Snippets Day
		sl: "#04b26e", // Snippets Color
		gp: true, // Grad Progress Tracker
		eid: "", // Employee ID
		tm: "", // Current Theme
		tg: 3700, //Ticket Goal
		td: "",//Ticket Goal Date
		tips: false,
		ename: "",
		panels: false,
		ltxt: "",
		calmAlerts: false,
		minPosts:false
	}, function (items) {
		EmailButtonOn = items.em;
		ClinicButtonOn = items.cl;
		ClinicStartTime = items.sct;
		ClinicEndTime = items.ect;
		ClinicDay  = items.cdn;
		MiniTicketOn = items.mt;
		HelpDeskTabOn = items.hd;
		DesignTabOn = items.de;
		EasterEggsOn = items.ee;
		PlaybookTabOn = items.pb;
		SummitTriggerOn = items.st;
		SnippetsOn = items.s;
		SnippetsClosed = items.sc;
		SnippetsDay = items.sd;
		SnippetsColor = items.sl;
		ShowGradProgressOn = items.gp;
		EmpID = items.eid;
		Theme = items.tm;
		TicketGoal = items.tg;
		GoalDate = items.td;
		TipsOn = items.tips;
		PanelsTabOn = items.panels;
		myName = items.ename;
		loginText = items.ltxt;
		calmAlertsOn = items.calmAlerts;
		minimalPostsOn = items.minPosts;
		addons();
	});
}
getVars();
var urlParams;
var product = "RS";
var feature = "";
var status = "Open,'In Progress', Reopened";
(window.onpopstate = function () {
	var match,
		pl = /\+/g, // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) {
			return decodeURIComponent(s.replace(pl, " "));
		},
		query = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
		urlParams[decode(match[1])] = decode(match[2]);
})();

/*GET EMPLOYEE ID*/
var getEID = function() {
	var intID = urlParams["eid"];
	chrome.storage.sync.set({
		eid: intID
	});
}

/* --------- Sets the appropriate favicon to use (works with the new css by Matt Bloomfield) -------- */
var favicon;
switch (urlParams["a"]) {
case 'Tickets':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2gaY9v560X0FrU1&V=1436414045';
	break;
case 'Panels':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MtenAjhuRu5wjz&V=1436405869';
	break;
case 'Sales':
	favicon = 'https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_etfqljehHYElSAJ&V=1437972981';
	break;
case 'Teams':
	favicon = 'http://www.faviconshut.com/pics/11/11351-man-meeting-people-support-team-team-building-user-woman-icon-favicon.png';
	break;
case 'Reports':
	favicon = 'https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_etfqljehHYElSAJ&V=1437972981';
	break;
case 'QUni':
	favicon = 'https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6RJLiTPRHwyfD7v&V=1437974317';
	break;
default:
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bDVm16QoQrNWsx7&V=1436414154';
}
switch (urlParams["b"]) {
case 'TicketViewer':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MtenAjhuRu5wjz&V=1436405869';
	break;
case 'RSBrandProfile':
case 'RSBrandUsers':
case 'RSBrandTickets':
case 'RSBrandContacts':
case 'RSBrandFiles':
	favicon = 'global/template/img/RSBrand.png';
	break;
case 'RSUserProfile':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6nC2kpkijev6cmh&V=1436415959';
	break;
case 'ClientSummary':
	favicon = 'global/template/img/Client.png';
	break;
case 'EB_Viewer':
	favicon = 'global/template/img/Bug.png';
	break;
case 'TicketsMyInBox':
case 'TicketsSupportInBox':
case 'SupportRecommendedTickets':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2gaY9v560X0FrU1&V=1436414045';
	break;
case 'SupportJiraIssues':
	favicon = 'global/template/img/Bug.png';
	$('#BodyContent').html("<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>");
	getJira(product, feature, status);
	break;
case 'SupportAlternateEmailTickets':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1MtenAjhuRu5wjz&V=1436405869';
	break;
case 'SupportAlternatePhoneTickets':
case 'SupportPhoneTickets':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3Ua1IiSMuOPGnR3&V=1436402515';
	break;
case 'SupportPulse':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5APFMnqaGHAp1UF&V=1436413173';
	break;
case 'SupportClinic':
	favicon = 'global/template/img/Clinic.png';
	break;
case 'SupportOtherTickets':
	favicon = 'global/template/img/QUniOtherTickets.png';
	break;
case 'RSUserAccountAccess':
	favicon = 'https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ebNG2a7ncBOoR5b&V=1436412039';
	break;
case 'SupportTeamStatsNew':
case 'SupportVolumeForPhone':
case 'SupportVolumeForEmail':
case 'SupportVolume':
case 'SupportVolumeForTraining':
case 'SupportVolumeForTraining':
case 'ReportTicketInteractionCodes':
case 'SupportTeamStats':
case 'ReportSupportNPS':
case 'SupportStats':
	favicon = 'https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_etfqljehHYElSAJ&V=1437972981';
	break;
case 'CompanyOfficeMaps':
	favicon = '/global/template/img/Map.png';
	break;
default:
}

/* ------------- Add Email Button ---------------- */
function addEmailTicket() {
container = document.getElementsByClassName('SectionButtonsContainer')[0];
var node = document.createElement("A");
var textnode = document.createTextNode("Create Email Ticket");
node.appendChild(textnode);
node.setAttribute("id", "newEmail");
node.setAttribute("class", "btn btn-success");
node.setAttribute('onclick', 'Dialog("?b=NewEmailEditor&CreateTicketType=SE&account=Support");');
container.appendChild(node);
document.getElementById('newEmail').innerHTML = "<span class='icon icon-envelope'></span><span>Create Email Ticket</span>";
};

/* ------------- Dynamic Favicons ---------------- */
document.head || (document.head = document.getElementsByTagName('head')[0]);

function changeFavicon(src) {
	var link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = src;
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
}
/* --- Dynamic Title --- */
function changeTitle() {
	if ($('.PageTitle')) {
		var title = $('.PageTitle').text().trim();
		var pageTitle = document.head.getElementsByTagName('title')[0];
		if (urlParams['tid'] && !title.match(/Client Pulse/) && urlParams['a'] != 'Team' && !title.match(/User Move/)) {
			title = $('#BodyContent > div:nth-child(3) > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > span').text().trim();
		}
		if (title.match(/Client Pulse/)) {
			title = title.match(/Client Pulse: (.*)/)[1];
			changeFavicon("https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5APFMnqaGHAp1UF&V=1436413173");
		}
		pageTitle.innerHTML = 'Odo | ' + title;
		if (urlParams['iid']) {
			pageTitle.innerHTML = 'Odo | ' + urlParams['iid'];
		}
	}
};

/* ------------- Integrate Jira into Odo Dialog (See Auto-fill section for trigger) ---------------- */
var feature;
var product;
var type;
var jira = {};

function getNewJira() {
	jira.product = $('#jiraProduct').val();
	jira.feature = $('#jiraSearch').val();
	jira.status = $('#jiraStatus').val();
	jira.type = $('#jiraType').val();
	$('#BodyContent').html("<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>");
	getJira(jira);
};

function insertBugs(jiraBugs) {
	$('#BodyContent').html(jiraBugs.getElementsByTagName('body')[0].innerHTML);
	//odoBugs.removeAttribute('style'); //removes height limit of content
	document.getElementById('newSearch').addEventListener('click', getNewJira);
	document.getElementById('jiraSearch').onkeypress = function (event) {
		if (event.keyCode == 13) {
			getNewJira();
		}
	};
	var pageSet = document.createElement('div');
	$('#bugResults').DataTable();
	$('#bugResults tbody').on('click', 'tr td:nth-child(1)', function () {
		console.log(this);
		var url = "http://odo.corp.qualtrics.com/index.php?a=QUni&b=EB_Viewer&iid=" + $.trim(this.innerHTML);
		window.open(url);
	});
	$('#bugResults tbody').on('click', 'tr td:nth-child(3)', function () {
		$(this).closest('tr').toggleClass('selected');
	});
	$('#jiraSearch').val(jira.feature);
	if (jira.product)
		$('#jiraProduct').val(jira.product);
	else
		$('#jiraProduct').val('RS');
	if (jira.status)
		$('#jiraStatus').val(jira.status)
	else
		$('#jiraProduct').val('Open');
	if (jira.type)
		$('#jiraType').val(jira.type);
	else
		$('#jiraType').val('Bug');
}
var bug;

function getJira(jira) {
	console.log(jira);
	if (jira.feature) {
		bug = jira.feature.match(/[A-Z,a-z]{2,3}-\d{3,5}/);
	}
	if (bug) {
		var url = "http://odo.corp.qualtrics.com/index.php?a=QUni&b=EB_Viewer&iid=" + jira.feature;
		window.open(url);
	} else {
		var query = "";
		if (jira.feature) {
			query += "text ~ " + "'" + jira.feature + "'";
		}
		if (jira.type) {
			query += "AND issuetype in (" + jira.type + ")"
		}
		if (jira.status) {
			query += "AND status in (" + jira.status + ")";
		}
		if (jira.product != "") {
			query += "AND project in (" + jira.product + ")";
		}
		//query = "project in (" + product + ") AND issuetype = Bug AND status in (" + status + ") AND text ~ " + "'" + feature + "'";
		query = query.replace(/ /g, '%20');
		query = query.replace(/'/g, '%27');
		var url = "http://mcdonnellteach.com/jiraIssue.php?startAt=0&maxResults=100&query=" + query;
		console.log(url);
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, true);
		xmlhttp.responseType = "document";
		xmlhttp.send();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				insertBugs(xmlhttp.response);
			}
		}
	}
};

/* ------------- Autofill dialog box depending on fields present ---------------- */
var changeDialog = document.getElementById('Dialog');
changeDialog.onmouseenter = function () {
	/* ------------- Add choices of products for Jira ---------- */
	if (document.getElementById('JiraProduct') && !document.getElementById('addCPR')) {
		var cpr = document.createElement('option');
		cpr.value = 'CPR';
		cpr.id = 'addCPR';
		cpr.innerHTML = 'Genesis Results (CPR)';
		document.getElementById('JiraProduct').appendChild(cpr);
		var rw = document.createElement('option');
		rw.value = 'RW';
		rw.id = 'vocal';
		rw.innerHTML = 'Vocalize';
		document.getElementById('JiraProduct').appendChild(rw);
		var res = document.createElement('option');
		res.value = 'RES';
		res.id = 'Response';
		res.innerHTML = 'Genesis Responses (RES)';
		document.getElementById('JiraProduct').appendChild(res);
	}
	/* ------------- Get dynamic QWiki article and initialize Knowledge Base Tabs (just jira for now)---------- */
	if (document.getElementById('Articles') && !document.getElementById('addedArticle')) {
		document.getElementById('Articles').innerHTML = "<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>";
		if (document.getElementById('TopicList')) {
			page = document.getElementById('TopicList').innerHTML.match(/\| ([\w\s]+)/)[1];
		} else {
			page = '';
		};
		getQWiki(page);
		/* ------------- Prepare for tab clicks on KnowledgeBase -----------*/
		if (document.getElementById('TopicList')) {
			product = document.getElementById('TopicList').querySelectorAll('td')[0].innerHTML.match(/(.*) \| (.*)/)[1];
			if (product == 'Genesis') {
				product = 'CPR';
			};
			feature = document.getElementById('TopicList').querySelectorAll('td')[0].innerHTML.match(/(.*) \| (.*)/)[2];
			status = "Open,'In Progress', Reopened";
		} else {
			product = '';
			feature = '';
			status = "Open,'In Progress', Reopened";
		}
		document.querySelectorAll('[aria-controls=Bugs]')[0].onclick = function () {
			if (!document.getElementById('addedBugs')) {
				document.getElementById('Bugs').innerHTML = "<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>";
				getJira(product, feature, status);
			}
		};
	}
	/*--- Add Confirm to Close on Email Tickets ---*/
	if (document.getElementById('cancel') && !document.getElementById('cancelPrompt')) {
		$('#cancel').hide();
		$("<div id='cancelPrompt' class='button'>Close</div>").insertAfter('#cancel');
		$('.button-group').on('click', '#cancelPrompt', function () {
			var r = confirm('Are you sure you want to close without saving your work?');
			if (r == true) {
				$('#cancel').trigger('click');
			}
		});
	}
	/* ------------- List of IDs to autofill ---------- */
	var user;
	if (document.getElementById('to') !== null && document.getElementById('to').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('to').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/mailto:(.*)" target/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('to').value = user.match(/Email: ([\w\d\.\-\_]+@[\w\d\.\-\_]+)/)[1];
		}
	}
	if (document.getElementById('LoginID') !== null && document.getElementById('LoginID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('LoginID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('LoginID').value = user.match(/UN: (.*)</)[1];
		}
		$('#Product').change(function () {
			var product = document.getElementById("Product").value
			switch (product) {
			case 'SiteIntercept':
				product = 'SiteIntercept';
				break;
			case 'TargetAudience':
				product = 'Target Audience';
				break;
			case 'EE':
				product = 'Employee Engagement';
				break;
			default:
				product = '';
				break;
			}
			if (product != '') {
				document.getElementById("Code").value = product + " -> ";
			}
		});
	}
	if (document.getElementById('UserName') !== null && document.getElementById('UserName').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('UserName').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/<br>(.*)/)[1];
		} else if (document.getElementsByClassName('Box')[0]) {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('UserName').value = user.match(/UN: (.*)</)[1];
		}
	}
	if (document.getElementById('DataCenterID') !== null && document.getElementById('DataCenterID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('DataCenterID').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[3].innerHTML;
		} else {
			user = document.getElementsByClassName('Box')[2].innerHTML;
			document.getElementById('DataCenterID').value = user.match(/([UCAE][TOSZU][1I]?[A]?)/)[1];
		}
	}
	if (document.getElementById('UserID') !== null && document.getElementById('UserID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('UserID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('UserID').value = user.match(/(UR.?_\w{12,15})/)[1];
		}
	}
	if (document.getElementById('RSUserID') !== null && document.getElementById('RSUserID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('RSUserID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('RSUserID').value = user.match(/(UR.?_\w{15})/)[1];
		}
	}
	if (document.getElementById('BrandID') !== null && document.getElementById('BrandID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('BrandID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[1].href.match(/bid=(.*)/)[1];
		} else {
			document.getElementById('BrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
		}
	}
	if (document.getElementById('RSBrandID') !== null && document.getElementById('RSBrandID').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('RSBrandID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[1].href.match(/bid=(.*)/)[1];
		} else {
			document.getElementById('RSBrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
		}
	}
	if (document.getElementById('ClientName') !== null && document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0] !== undefined && document.getElementById('ClientName').value == "") {
		document.getElementById('ClientName').value = document.getElementById('RightMenuColumn').getElementsByClassName('Yellow')[0].getElementsByClassName('overLib')[0].innerHTML;
	}
	if (document.getElementById('ClientID') !== null && document.getElementById('ClientID').value == "" && document.getElementById('RightMenuColumn').getElementsByClassName('Yellow')[0].getElementsByClassName('overLib')[0]) {
		document.getElementById('ClientID').value = document.getElementById('RightMenuColumn').getElementsByClassName('Yellow')[0].getElementsByClassName('overLib')[0].href.match(/cid=(.*)/)[1];
	}
	if (document.getElementById('FirstName') && document.getElementById('FirstName').value == "" && document.getElementById('LastName') && document.getElementById('LastName').value == "") {
		var name = document.getElementsByClassName('Header')[0].querySelectorAll('td')[1].innerHTML;
		var fname = name.split(" ");
		document.getElementById('FirstName').value = fname[0];
		document.getElementById('LastName').value = fname[1];
	}
	if (document.getElementById('Email') && document.getElementById('Email').value == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('Email').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/mailto:(.*)" target/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('Email').value = user.match(/Email: ([\w\d\.\-\_]+@[\w\d\.\-\_]+)/)[1];
		}
	}
	if (document.getElementById('PD-Email') && document.getElementById('PD-Email').innerHTML == "") {
		if (urlParams["b"] == "TicketViewer") {
			document.getElementById('PD-Email').innerHTML = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/mailto:(.*)" target/)[1];
		} else {
			user = document.getElementsByClassName('Box')[0].innerHTML;
			document.getElementById('PD-Email').innerHTML = user.match(/Email: ([\w\d\.\-\_]+@[\w\d\.\-\_]+)/)[1];
		}
	}
};
	// ---- Snippets on Home Page ----
var snippetsMods = {
	//RETRIEVE CONTENT FROM SNIPPETS PAGE
	setSnippetsContainer: function () {
		var url = "http://odo.corp.qualtrics.com/?a=Snippets&b=SnippetsEditor";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, true);
		xmlhttp.responseType = "document";
		xmlhttp.send();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var response = xmlhttp.response;
				//Create Container
				$('#LeftMenuColumn').prepend("<div class='Title' style='cursor:pointer;' id='SnippetsHeader'>My Snippets</div><div id='SnippetsPreview' style='font-size: 10px; text-align:center; overflow: hidden;'></div><table style='cursor:pointer' id='snippetsContainer'><tbody></tbody></table>");
				if (Theme === "starwars") {
					document.getElementById('SnippetsHeader').innerHTML = "Emperor's Task List";
				}
				// PLACE SNIPPETS IN CONTAINER
				if (response.querySelectorAll('#ThisWeekSnippetTable > table > tbody')[0]) {
					var numberComplete = 0;
					var finalOutput = response.querySelectorAll('#ThisWeekSnippetTable > table > tbody')[0].innerHTML;
					var snippetSideBar = document.getElementById('snippetsContainer');
					snippetSideBar.innerHTML = finalOutput;
					var table = document.getElementById('snippetsContainer');
					//CLEAN EACH SNIPPET ONE BY ONE
					for (i = 0; i < table.rows.length; i++) {
						var row = table.rows[i];
						row.style.background = "transparent";
						//COLOR SNIPPETS WHEN COMPLETED
						var checkBox = row.getElementsByTagName('input')[0];
						//GET DATE TO TURN SNIPPETS RED AFTER WEDNESDAY
						var d = new Date();
						var n = d.getDay();
						if (checkBox.checked) {
							row.style.display = "none";
							numberComplete = numberComplete + 1;
						} else if (n >= SnippetsDay) /*var set in chrome options */ {
							row.style.outline = "1px solid " + SnippetsColor;
						}
						//ELIMINATE X
						row.deleteCell(0);
						row.deleteCell(1);
						//TRUNCATE LABELS ON SNIPPETS
						var length = 40; //LENGTH OF SNIPPET POST BEFORE TRUNCATION
						var rowContents = row.getElementsByTagName('td')[0];
						//VERIFY THAT TRUNCATION IS NECESSARY
						if (rowContents.innerHTML.length > length) {
							var replaceMe = row.getElementsByTagName('td')[0].innerHTML;
							rowContents.innerHTML = replaceMe.substring(0, length) + "...";
						}
					}
					//Congratulate if Snippets are completed
					if (table.rows.length == numberComplete) {
						var snippetSideBar = document.getElementById('snippetsContainer');
						snippetSideBar.innerHTML = "<div style='padding:5px;text-align:center;font-size:10pt;'>Success! <br>Great Job! Way to be a finisher.</div>";
						document.getElementById('SnippetsPreview').style.height = "0px";
					}
					//Add preview bar for when closed
					var numberIncomplete = table.rows.length - numberComplete;
					document.getElementById('SnippetsPreview').innerHTML = numberComplete + " Complete; " + numberIncomplete + " to go";
					if (SnippetsClosed == false) {
						document.getElementById('SnippetsPreview').style.display = "none";
					}
				} else {
					//ALERT THAT NO SNIPPETS ARE PRESENT
					var snippetSideBar = document.getElementById('snippetsContainer');
					snippetSideBar.innerHTML = "<div style='padding:5px;text-align:center;font-size:10pt;'>You don't have any snippets! Click here to add snippets.</div>";
					snippetSideBar.style.cursor = "pointer";
					snippetSideBar.style.outline = "1px solid " + SnippetsColor;
				}
				//ALLOW FOR EDITING OF SNIPPETS
				snippetSideBar.setAttribute('onclick', "Dialog('?a=Snippets&b=SnippetsEditor&date=&reload=false');");
				//CLOSE SNIPPETS
				if (SnippetsClosed) {
					table.style.display = "none";
				}
			}
		}
	}
};
// ALLOW FOR OPENING AND CLOSING SNIPPETS CONTAINER
$("#LeftMenuColumn").on("click", "#SnippetsHeader", function () {
	var container = document.getElementById('snippetsContainer');
	if (container != null) {
		if (container.style.display === "none") {
			container.style.display = "table";
			document.getElementById('SnippetsPreview').style.display = "none";
			chrome.storage.sync.set({
				sc: false
			});
		} else {
			container.style.display = "none";
			document.getElementById('SnippetsPreview').style.display = "block";
			chrome.storage.sync.set({
				sc: true
			});
		}
	}
});

/*--- Konami Code for Mario Face to Appear ---*/
// check to make sure that the browser can handle window.addEventListener
function konami() {
	if (window.addEventListener) {
		// create the keys and konami variables
		var keys = [],
			konami = "38,38,40,40,37,39,37,39,66,65";
		// bind the keydown event to the Konami function
		window.addEventListener("keydown", function (e) {
			// push the keycode to the 'keys' array
			keys.push(e.keyCode);
			// and check to see if the user has entered the Konami code
			if (keys.toString().indexOf(konami) >= 0) {
				var pageLogo = document.querySelector('body > div.Masthead > a > img');
				pageLogo.src = "http://s29.postimg.org/8v50sgzon/Mario_head.png";
				addMario();
				// and finally clean up the keys array
				keys = [];
			};
		}, true);
	};
};

/*ADD Mario brothers on konami code execution: */
function addMario() {
	$('.SectionTabsList').append('<li class="SectionTab" id="marioTab" style="cursor:pointer;">Mario</li>');
	//SET WINDOW HEIGHT
	document.getElementById("marioTab").addEventListener("click", function () {
		$(".SectionTabsList > li").removeClass('ActiveTab');
		$('#marioTab').addClass(' ActiveTab');
		$('.SectionButtonsContainer, .TimezonesTableContainer').fadeOut();
		document.getElementsByClassName('Masthead')[0].style.background = "black";
		//ADD IFRAME
		document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1300px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://justiceleague.az1.qualtrics.com/jfe/form/SV_9XpCXziiai5lVDn?23=3'></iframe>";
		//CHANGE THE PAGE TITLE
		document.getElementsByClassName('PageTitle')[0].innerHTML = "Mario Brothers";
		document.title = "Odo | Important Stuff";
	});
};


//CUSTOM TABS
var customTabs = {
	/*Adds the Help Desk tab to every page*/
	addHelpDesk: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="helpdeskTab" style="cursor:pointer;">Help Desk Ticket</li>');
		//SET WINDOW HEIGHT
		document.getElementById("helpdeskTab").addEventListener("click", function () {
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#helpdeskTab').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1300px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://survey.qualtrics.com/WRQualtricsSurveyEngine/?SID=SV_3lo6hZODeRSbXsF&RID=MLRP_6i2XORBVUvB6cm1&_=1'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Help Desk Request";
			document.title = "Odo | Help Desk Request";
		});
	},
	/*Adds the Options tab to home page*/
	addChromeOptions: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="optionsTab" style="cursor:pointer;">Extension Options</li>');
		//SET WINDOW HEIGHT
		document.getElementById("optionsTab").addEventListener("click", function () {
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#optionsTab').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .TimezonesTableContainer').fadeIn();
			//ADD IFRAME
			var optionsUrl = chrome.extension.getURL("options.html");
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 800px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='" + optionsUrl + "'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Chrome Extension Options";
			document.title = "Odo | Extension Options";
		});
	},
	//Adding Design Tab to each page
	addDesign: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="designTab" style="cursor:pointer;">Design</li>');
		//SET WINDOW HEIGHT
		document.getElementById("designTab").addEventListener("click", function () {
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#designTab').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .SearchBar, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1000px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://itwiki.corp.qualtrics.com/odo-enhanced-resources/Portal.html#noHeader'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Design";
			document.title = "Odo | Design";
		});
	},
	//Adding Panels Tab to each page
	addPanels: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="panelsTab" style="cursor:pointer;">Panels Playbook</li>');
		//SET WINDOW HEIGHT
		document.getElementById("panelsTab").addEventListener("click", function () {
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#panelsTab').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .SearchBar, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1000px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://itwiki.corp.qualtrics.com/panels#noHeader'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Panels";
			document.title = "Odo | Panels Resources";
		});
	},
	/*--- Add Playbook as a tab ---*/

	//CHANGE TAB NAME
	addPlaybook: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="playbookTab" style="cursor:pointer;">Playbook</li>');
		//SET WINDOW HEIGHT
		document.getElementById("playbookTab").addEventListener("click", function () {
			window.location.hash = "playbook";
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#playbookTab').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .SearchBar, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1000px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://itwiki.corp.qualtrics.com/playbook#noHeader'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Playbook";
			document.title = "Odo | Playbook";
		});
	},
	addSummitTrigger: function () {
		$('.SectionTabsList').append('<li class="SectionTab" id="summitTrigger" style="cursor:pointer;">Summit Trigger</li>');
		//SET WINDOW HEIGHT
		document.getElementById("summitTrigger").addEventListener("click", function () {
			window.location.hash = "SummitTrigger";
			$(".SectionTabsList > li").removeClass('ActiveTab');
			$('#summitTrigger').addClass(' ActiveTab');
			$('.SectionButtonsContainer, .SearchBar, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: 1000px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='//genesisqcorput1.qualtrics.com/SE/?SID=SV_5jZmbyiuIfBis8B'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = "Summit Trigger";
			document.title = "Odo | Summit Trigger";
		});
	},
	addHelpMessages: function () {
		var container = $('.SectionTabsList');
		var unreadCount = 0;
		chrome.storage.sync.get({
			cm: null
		}, function (items) {
			currentMessage = items.cm;
			console.log(items.cm);
			if (currentMessage == null) {
				unreadCount += 1;
			} else {
				unreadCount = 0;
			}
			console.log(unreadCount);
			chrome.storage.sync.set({
				uc: unreadCount
			});
			chrome.storage.sync.get({
				uc: 0
			}, function (items) {
				console.log(items.uc);
				unreadCount = items.uc;
			});
			if (unreadCount > 0) {
				var messageCounter = '<div id="MessageCount" style="display: inline; border-radius: 100%; background: #04a365; color: #fff; padding: 5px 10px; margin 5px;">'+ unreadCount +'</div>';
			} else {
				var messageCounter = '';
			}
			var innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer;">Tips & Tricks' + messageCounter + '</li>';
			container.append(innerTab);
		});

	}
};









function addons() {
	//GENERAL GRABBING
	if ((urlParams["eid"] != null) && (urlParams["eid"] != "") && (urlParams["a"] === "MyProfile")) {
		getEID();
	}
	changeTitle();
	changeFavicon(favicon);
	//APPLY A THEME
	console.log("Current Theme is: " + Theme);
	//ADD YOUR TABS
	if ((urlParams["a"] == "Home" || urlParams['TopNav'] != "Tickets") || (urlParams["a"] == 'MyProfile') || (urlParams["a"] == null && urlParams['TopNav'] != "Tickets")) {
		if (PlaybookTabOn) {
			customTabs.addPlaybook();
		}
		if (EasterEggsOn) {
			konami();
		}
	}
	if (HelpDeskTabOn) {
		customTabs.addHelpDesk();
	}
	if (SummitTriggerOn){
		customTabs.addSummitTrigger();
	}
	if (TipsOn){
		customTabs.addHelpMessages();
	}
	if (DesignTabOn) {
		customTabs.addDesign();
	}
	if (PanelsTabOn) {
		customTabs.addPanels();
	}
	//SNIPPETS AND CHROME OPTIONS
	if ((urlParams["a"] == "Home") || (urlParams["a"] == null && urlParams['TopNav'] != "Tickets" && urlParams['TopNav'] != "Company" && urlParams['TopNav'] != "Reports")) {
		if (SnippetsOn) {
			snippetsMods.setSnippetsContainer();
		}
		customTabs.addChromeOptions();
	}
	//CUSTOM BUTTONS
	if (EmailButtonOn) {
		addEmailTicket();
	}
	if (ClinicButtonOn) {
		if (currentDay == ClinicDay) {
			if ( (currentHour >= ClinicStartTime.split(":")[0]) && (currentHour <= ClinicEndTime.split(":")[1]) ) {
				addClinicTicket();
			}
		}
	}
	if (MiniTicketOn) {
		minimizeTicketButton();
	}
	if ((ShowGradProgressOn) && (EmpID != "")) {
		showQuniProgress();
	}
	if (urlParams["a"] == "QUni") {
		addJiraSearch();
		addTicketSearch();
	}
	if ((urlParams["a"] == "QUniReports") && (urlParams["TopNav"] == "Reports")) {
		reportsObject.addFindMeButton();
	}
	//PULSE MODIFICATIONS
	if (urlParams["b"] == "TicketViewer") {
		if (document.getElementsByClassName('SectionHeaderText')[0].innerHTML === "Client Pulse") {
			pulseMods.addPulseButtons();
		} else {
			console.log("not a pulse");
		}
	}
	if (document.getElementById('EmergencyLoginCheckbox')) {
		var loginCheckbox = document.getElementById('EmergencyLoginCheckbox');
		window.addEventListener("click", pulseMods.addResTeamBit);
	}
	//CUSTOM STYLESHEETS
	if(minimalPostsOn) {
		customStylesheets.shrinkPosts();
	}
	if(calmAlertsOn) {
		customStylesheets.greyAlerts();
	}
}

function addClinicTicket() {
	container = document.getElementsByClassName('SectionButtonsContainer')[0];
	var node = document.createElement("A");
	var textnode = document.createTextNode("Create Clinic Ticket");
	node.appendChild(textnode);
	node.setAttribute("id", "newClinic");
	node.setAttribute("class", "btn btn-success");
	node.setAttribute('onclick', 'Dialog("http://odo.corp.qualtrics.com/?a=Tickets&b=CT_Creator&ot=&oid=&uid=");');
	container.appendChild(node);
	document.getElementById('newClinic').innerHTML = "<span class='icon btn-icon-plus'></span><span>Create Clinic Ticket</span>";
}

function minimizeTicketButton() {
	var btnInner = $('body > div.SearchBar > div.SectionButtonsContainer > a:nth-child(5) > span:nth-child(2)');
	btnInner.remove();
	var btn = $('body > div.SearchBar > div.SectionButtonsContainer > a:nth-child(5)');
	btn.parent().prepend(btn);

}

function showQuniProgress() {
	var url = "http://odo.corp.qualtrics.com/?TopNav=Home&query=clinic&eid=" + EmpID + "&a=MyProfile&b=TicketsMyStats";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.responseType = "document";
	xmlhttp.send();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.response;
			//Create Container
			$('#LeftMenuColumn').prepend("<div class='Title' style='' id='GradProgHeader'>Ticket Milestone Progress</div><div style='cursor:pointer' id='GradProgContainer'></div>");
			if (Theme === "starwars") {
				document.getElementById('GradProgHeader').innerHTML = "Wookie Training";
			}
			var tds = response.getElementsByTagName('td');
			//LOOP THROUGH ALL td ELEMENTS TO  FIND THE CORRECT TABLE
			for (i=0; i<tds.length; i++) {
				if (tds[i].textContent === "Support Phone Tickets") {
					var table = tds[i].parentNode.parentNode.parentNode;
					var thead = tds[i].parentNode.parentNode.parentNode.querySelector('thead');
					var tbody = tds[i].parentNode.parentNode;
					var tLength = tbody.rows.length;
					var headerRow = thead.rows[0].querySelectorAll('th');
				}
			}
			// LOOP THROUGH HEADER OF TABLE TO FIND THE RESOLVED COLUMN
			for (j=0; j<headerRow.length; j++) {
				if (headerRow[j].textContent === "Resolved") {
					var resCol = j;
				}
			}
			//LOOP THROUGH THE TABLE BODY TO FIND THE PHONE/EMAIL ROWS, THEN COLLECT VALUES IF THEY EXIST
			for (k=0; k<tbody.querySelectorAll('td').length; k++) {
				if (tbody.querySelectorAll('td')[k].textContent === "Support Phone Tickets") {
					var phoneRow = tbody.querySelectorAll('td')[k].parentNode;
					var phoneValue = phoneRow.cells[resCol].innerHTML.replace(",", "");
					phoneValue = parseInt(phoneValue);
				} else {
					//phoneValue = 0;
				}
				if (tbody.querySelectorAll('td')[k].textContent === "Support Email Tickets") {
					var emailRow = tbody.querySelectorAll('td')[k].parentNode;
					var emailValue = emailRow.cells[resCol].innerHTML.replace(",", "");
					emailValue = parseInt(emailValue);
				} else {
					//emailValue = 0;
				}
			}
			calculateTicketTotals(phoneValue,emailValue);
		}
	}
}
function calculateTicketTotals(phoneValue,emailValue) {
	//CALCULATE VISIBLE VALUES
	if ((phoneValue > 0) && (emailValue > 0)) {
		var goalTickets = TicketGoal;
		var total = phoneValue + emailValue;
		var remaining = goalTickets - total;
		var percentComplete = Math.round((total / goalTickets)*100);
		var goal = new Date(GoalDate);
		console.log(goal);
		var msDay = 60*60*24*1000;
		var today = new Date();
		console.log(today);
		var daysTillGoal = (( goal - today ) / msDay) + 1;
		var estWeekends = ( daysTillGoal / 7 ) * 2;
		var ticketsPerDay = Math.round(remaining / ( daysTillGoal - estWeekends));
		console.log(daysTillGoal);
		GradProgContainer.innerHTML = "<div id='TicketCounterInner' style='height: 20px; width: 100%; position: relative; border: 1px solid #000; border-radius: 3px;margin-bottom: 5px;'> <div style='background: #007ac0; position: absolute; left: 0; top: 0; bottom: 0; height: 20px; width: " + percentComplete + "%; color: #fff; text-align: right'></div><div id='PercentGradComplete' style='position: absolute; bottom: 0; top: 0; right: 0; left: 0; text-align: center;'>" + percentComplete + "%</div></div><div style='text-align: center;'>You need " + remaining + " tickets to hit the milestone! That means about " + ticketsPerDay + " tickets per day!</div>";
		//DEPENDING ON THE PROGRESS, CHANGE THE LOCATION AND COLOR OF THE PERCENT SYMBOL WITHIN THE GRADPROGRESS BAR
		if ((percentComplete >= 43) && (percentComplete < 60)) {
			var percentContainer = document.getElementById("PercentGradComplete");
			percentContainer.style.color = "#FFF";
			percentContainer.style.textAlign = "right";
			percentContainer.style.right = "auto";
			percentContainer.style.width = percentComplete + "%";
		} else if (percentComplete >= 60) {
			var percentContainer = document.getElementById("PercentGradComplete");
			percentContainer.style.color = "#FFF";
			percentContainer.style.textAlign = "center";
			percentContainer.style.right = "0";
			percentContainer.style.width = "auto";
		}
		if (percentComplete >= 100) {
			GradProgContainer.innerHTML = "Congrats! You've finished!"
		}
	} else {
		GradProgContainer.innerHTML = "<div style='text-align: center;'>Hmmmm... Doesn't look like you have any tickets!</div>";

	}

}
	// REDIRECT TO TICKET PAGE ON CLICK
$(document).ready(function(){
	$("#LeftMenuColumn").on("click", "#GradProgContainer", function(){
		console.log("redirect");
		window.location.href = 'http://odo.corp.qualtrics.com/?TopNav=Home&query=clinic&a=Home&b=TicketsMyStats';
	});
});
function addTicketSearch() {
	$('#LeftMenuColumn').append("<div class='PageFrameLeftMenuItem' style='cursor:pointer' id='TicketSearch'>Ticket Search</div>");
}
	// REDIRECT TO TICKET PAGE ON CLICK
$(document).ready(function(){
	$("#LeftMenuColumn").on("click", "#TicketSearch", function(){
		$("#LeftMenuColumn > a > div").removeClass('PageFrameLeftMenuItemSelected');
		$("#LeftMenuColumn > a > div").addClass('PageFrameLeftMenuItem');
		$('#TicketSearch').addClass(' PageFrameLeftMenuItemSelected');
		//ADD IFRAME
		document.getElementById('BodyContent').innerHTML = "<iframe style='border: 0; height: 1000px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://itwiki.corp.qualtrics.com/odo-enhanced-resources/ticketSearch.html'></iframe>";

		document.getElementsByClassName('PageTitle')[0].innerHTML = "Ticket Search";
		document.title = "Odo | Ticket Search";
	});
});
function addJiraSearch() {
	console.log("Adding JIRA");
	$('#LeftMenuColumn').append("<div class='PageFrameLeftMenuItem' style='cursor:pointer' id='JiraSearch'>JIRA Bug Search</div>");
}
// USED FOR JIRA TICKET SEARCH
$(document).ready(function(){
	$("#LeftMenuColumn").on("click", "#JiraSearch", function(){
		$("#LeftMenuColumn > a > div").removeClass('PageFrameLeftMenuItemSelected');
		$("#LeftMenuColumn > a > div").addClass('PageFrameLeftMenuItem');
		$('#JiraSearch').addClass(' PageFrameLeftMenuItemSelected');
		window.location = "http://odo.corp.qualtrics.com/index.php?a=QUni&b=SupportJiraIssues";
		document.getElementsByClassName('PageTitle')[0].innerHTML = "JIRA Search";
		document.title = "Odo | JIRA Search";
	});
});
var pulseMods  = {
	addPulseButtons: function () {
		/*
		var container = document.getElementById('CPbuttons');
		console.log(container);
		var button1Text = "<button class='ui-button ui-widget ui-state-default ui-button-text-only ui-corner-left' role='button' aria-disabled='false'><span class='ui-button-text'><a href='https://service.sumologic.com/ui/' target='_blank' style='color: #007ac0; font-weight: normal;'>Check SumoLogic</a></span></button>";
		$(container).append(button1Text);
		*/
		var placer = $('.SectionHeader');
		$("<div id='NewButtonContainer'></div>").insertAfter(placer);
		var container = $('#NewButtonContainer');
		$(container).append("<h3>Resources</h3>");
		$(container).append("<a href='https://service.sumologic.com/ui/' target='_blank' class='pulse-helpers'>Check SumoLogic</a>");
		$(container).append("<a href='https://qualtrics.atlassian.net/secure/Dashboard.jspa' target='_blank' class='pulse-helpers'>Check JIRA</a>");
	},
	addResTeamBit: function () {
		var textarea = document.querySelectorAll('#EmergencyLoginForm > textarea')[0];
		textarea.innerHTML = loginText;
	}
}







//ADD MESSAGING TO THE APP

	var messages = [
		"Brush your teeth before you come to work...",
		"Never eat with your mouth open",
		"If you're going to talk, make sure it's enriching the silence"
	]
	var currentMessage;
	var lastWeeksMessage;
	chrome.storage.sync.get({
		cm: null,
		lwm: null
	}, function (items) {
		currentMessage = items.cm;
		lastWeeksMessage = items.lwm;
		console.log(items.cm);
		console.log(lastWeeksMessage);
	});

	function toggleMessages(refresh) {
		if ((currentMessage == null) || (refresh)) {
			var max = messages.length;
			var rand = Math.floor(Math.random() * max) + 0
			currentMessage = rand;
			chrome.storage.sync.set({
				cm: currentMessage,
				lwm: lastWeeksMessage
			});
		}
		replaceCenterContent(currentMessage);
	}
	$(".SectionTabsList").on("click", "#MessagesTab", function () {
		console.log("Show me a message");
		toggleMessages(false);
	});

	function replaceCenterContent(id) {
		document.getElementById('BodyContent').innerHTML = "<div id='TipOuter'><div id='TipHeader'></div><div id='TipContent'></div><div id='NewTipContainer'><button id='NewTip'>Give me a new tip</button><div id='TipList'></div></div></div>";
		document.getElementById('TipContent').innerHTML = messages[id];
		document.getElementById('TipHeader').innerHTML = "Your tip is: ";
		document.getElementById('TipList').innerHTML = "To see the whole list, <a href='#' target='_blank'>click here</a>.";

	}
	$("#BodyContent").on("click", "#NewTip", function () {
		console.log("Show me a new message");
		toggleMessages(true);
	});
	function addFindMeButton() {
		$("#RightMenuColumn").append("<div id='FindMeButtonContainer' style='text-align: right;'><button id='FindMeButton'>Find Myself in the Report</button></div>");
	}
	$("#RightMenuColumn").on("click", "#FindMeButton", function () {
		findMe(myName);
	});

//ALLOW FOR FINDING ONESELF ON THE ODO REPORTS PAGE FOR QUNI
	function findMe(nameInput) {
		console.log(nameInput);
		if ((nameInput == "") || (nameInput == undefined)) {
			var nameInput = prompt("Please enter your name", "");
			chrome.storage.sync.set({
				name: nameInput
			});
			var allEmployees = document.querySelectorAll('#Rankings > a > div');
			for (i=0; i<allEmployees.length; i++) {
				var name = allEmployees[i].querySelector('div.rank-text > b').innerHTML;
				console.log(name[i]);
				if (name.toLowerCase().indexOf(nameInput.toLowerCase()) != -1) {
					console.log("Found you!");
					allEmployees[i].style.background = "#fff";
					allEmployees[i].style.outline = "5px solid red";
				}
			}
		} else {
			console.log("Running Else Function");
			var allEmployees = document.querySelectorAll('#Rankings > a > div');
		for (i=0; i<allEmployees.length; i++) {
			var name = allEmployees[i].querySelector('div.rank-text > b').innerHTML;
			console.log(name[i]);
			if (name.toLowerCase().indexOf(nameInput.toLowerCase()) != -1) {
				console.log("Found you!");
				allEmployees[i].style.background = "#fff";
				allEmployees[i].style.outline = "5px solid red";
			}
		}
		}
	}
var customStylesheets = {
	shrinkPosts: function() {
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("squawkPosts.css") + '">'
		);
	},
	greyAlerts: function() {
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("greyAlerts.css") + '">'
		);
	}
};






