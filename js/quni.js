/* ------------- Built by Zach McDonnell & Matt Bloomfield---------------- */


/******************************************************************/
/***************                                *******************/
/**************        Page Initialization       ******************/
/***************                                *******************/
/******************************************************************/


/*------- Initialize variables from Chrome Storage ------*/

var EmailButtonOn;
var MiniEmailButtonOn;
//My clinic button change
var ClinicFeedbackButtonOn;
var ClinicButtonOn;
var ClinicStartTime;
var ClinicEndTime;
var ClinicDay;
var MiniTicketOn;
var MiniTakeTicketOn;
var MiniSupportPhoneOn;
var MiniClientIssueOn;
var DesignTabOn;
var EasterEggsOn;
var PlaybookTabOn;
var ShowGradProgressOn;
var EmpID;
var Theme;
var TicketGoal;
var GoalDate;
var CurrentDate = new Date();
var currentDay = CurrentDate.getDay();
var currentHour = CurrentDate.getHours();
var TipsOn;
var myName;
var PanelsTabOn;
var loginText;
var calmAlertsOn;
var minimalPostsOn;
var hidePosts;
var spamCount;
var blockSpam;
var showQuniTickets;
var showSIQueue;
var showTAQueue;
var show360Queue;
var showEEQueue;
var showThemesQueue;
var showVocQueue;
var showStatQueue;
var showIntQueue;
var showFrenchQueue;
var showGermanQueue;
var showSpanishQueue;
var showPortugueseQueue;

/*------- Retrieve variables from Chrome Storage ------*/

function getVars() {
	chrome.storage.sync.get({
		em: "",
		mem: "",
		clf: "",
		cl: "",
		sct: "",
		ect: "",
		cdn: "",
		mt: "",
		mtt: "",
		msp: "",
		mci: "",
		de: false,
		ee: "",
		pb: "",
		eid: "",
		gp: true,
		tm: null,
		tg: 3700,
		td: "2016-12-12",
		tips: true,
		ename: "",
		panels: false,
		calmAlerts: true,
		minPosts: true,
		ltxt: "",
		hidePosts: false,
		spamCount: 25,
		blockSpam: true,
		omniSearch: true,
		//Quni Ticket breakdowns
		showQuniTickets: false,
		showSIQueue: false,
		showTAQueue: false,
		show360Queue: false,
		showEEQueue: false,
		showThemesQueue: false,
		showVocQueue: false,
		showStatQueue: false,
		showIntQueue: false,
		showFrenchQueue: false,
		showGermanQueue: false,
		showSpanishQueue: false,
		showPortugueseQueue: false
	}, function(items) {
		EmailButtonOn = items.em;
		MiniEmailButtonOn = items.mem;
		ClinicFeedbackButtonOn = items.clf;
		ClinicButtonOn = items.cl;
		ClinicStartTime = items.sct;
		ClinicEndTime = items.ect;
		ClinicDay = items.cdn;
		MiniTicketOn = items.mt;
		MiniTakeTicketOn = items.mtt;
		MiniSupportPhoneOn = items.msp;
		MiniClientIssueOn = items.mci;
		DesignTabOn = items.de;
		EasterEggsOn = items.ee;
		PlaybookTabOn = items.pb;
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
		hidePosts = items.hidePosts;
		spamCount = items.spamCount;
		blockSpam = items.blockSpam;
		showQuniTickets = items.showQuniTickets;
		showSIQueue = items.showSIQueue;
		showTAQueue = items.showTAQueue;
		show360Queue = items.show360Queue;
		showEEQueue = items.showEEQueue;
		showThemesQueue = items.showThemesQueue;
		showVocQueue = items.showVocQueue;
		showStatQueue = items.showStatQueue;
		showIntQueue = items.showIntQueue;
		showFrenchQueue = items.showFrenchQueue;
		showGermanQueue = items.showGermanQueue;
		showSpanishQueue = items.showSpanishQueue;
		showPortugueseQueue = items.showPortugueseQueue;
		addons();
	});
}

/*------- Run function to get variables from Chrome Storage ------*/

getVars();

/*------- Know which page you are on via the urlParams ------*/

var urlParams;
var product = "RS";
var feature = "";
var status = "Open,'In Progress', Reopened";
window.onpopstate = function() {
	var match,
		pl = /\+/g, // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function(s) {
			return decodeURIComponent(s.replace(pl, " "));
		},
		query = window.location.search.substring(1);

	urlParams = {};
	while (match == search.exec(query)) {
		urlParams[decode(match[1])] = decode(match[2]);
	}
	setFavicon();
};

/*------- Get EID and set in Chrome Storage ------*/

var getEID = function() {
	EmpID = urlParams.eid;
	chrome.storage.sync.set({
		eid: EmpID
	});
};


/******************************************************************/
/***************                                *******************/
/**************          Page Level Setup        ******************/
/***************                                *******************/
/******************************************************************/

/* --------- Sets the appropriate favicon to use  -------- */
var favicon;

function setFavicon() {
	switch (urlParams.a) {
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
	switch (urlParams.b) {
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
}

/* ------------- Dynamic Favicons ---------------- */
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
	var $pageTitle = $('.PageTitle');
	if ($pageTitle) {
		var title = $pageTitle.text().trim();
		var pageTitle = document.head.getElementsByTagName('title')[0];
		if (urlParams.tid && !title.match(/Client Pulse/) && urlParams.a != 'Team' && !title.match(/User Move/)) {
			title = $('#BodyContent').find('div:nth-child(3) > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > span').text().trim();
		}
		if (title.match(/Client Pulse/)) {
			title = title.match(/Client Pulse: (.*)/)[1];
			changeFavicon("https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5APFMnqaGHAp1UF&V=1436413173");
		}
		if (pageTitle) {
			pageTitle.innerHTML = 'Odo | ' + title;
		}
		if (urlParams.iid) {
			pageTitle.innerHTML = 'Odo | ' + urlParams.iid;
		}
	}
}

/******************************************************************/
/***************                                *******************/
/**************         Feature Additions        ******************/
/***************                                *******************/
/******************************************************************/


/******************************************************************/
/***************  Better Views into Hidden Things  ****************/
/******************************************************************/

/*------- Show Quni's progress toward milestones ------*/

function showQuniProgress() {
	var url = "https://odo.corp.qualtrics.com/?TopNav=Home&query=clinic&eid=" + EmpID + "&a=MyProfile&b=TicketsMyStats";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.responseType = "document";
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = xmlhttp.response;
			var headerRow;
			var emailValue;
			var phoneValue;
			//Create Container
			$('#LeftMenuColumn').prepend("<div class='Title' style='' id='GradProgHeader'>Ticket Milestone Progress</div><div style='cursor:pointer' id='GradProgContainer'></div>");
			if (Theme === "starwars") {
				document.getElementById('GradProgHeader').innerHTML = "Wookie Training";
			}
			var tds = response.getElementsByTagName('td');
			//LOOP THROUGH ALL td ELEMENTS TO  FIND THE CORRECT TABLE
			for (var i = 0; i < tds.length; i++) {
				if (tds[i].textContent === "Support Phone Tickets") {
					var table = tds[i].parentNode.parentNode.parentNode;
					var thead = tds[i].parentNode.parentNode.parentNode.querySelector('thead');
					var tbody = tds[i].parentNode.parentNode;
					var tLength = tbody.rows.length;
					headerRow = thead.rows[0].querySelectorAll('th');
				}
			}

			if (headerRow) {
				// LOOP THROUGH HEADER OF TABLE TO FIND THE RESOLVED COLUMN
				for (var j = 0; j < headerRow.length; j++) {
					if (headerRow[j].textContent === "Resolved") {
						var resCol = j;
					}
				}
				//LOOP THROUGH THE TABLE BODY TO FIND THE PHONE/EMAIL ROWS, THEN COLLECT VALUES IF THEY EXIST
				for (var k = 0; k < tbody.querySelectorAll('td').length; k++) {
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
				calculateTicketTotals(phoneValue, emailValue);
			}
		}
	};
}

function calculateTicketTotals(phoneValue, emailValue) {
	//CALCULATE VISIBLE VALUES
	if ((phoneValue > 0) && (emailValue > 0)) {
		var goalTickets = TicketGoal;
		var total = phoneValue + emailValue;
		var remaining = goalTickets - total;
		var percentComplete = Math.round((total / goalTickets) * 100);
		var goal = new Date(GoalDate);
		var msDay = 60 * 60 * 24 * 1000;
		var today = new Date();
		var percentContainer;
		var daysTillGoal = ((goal - today) / msDay) + 1;
		var estWeekends = (daysTillGoal / 7) * 2;
		var ticketsPerDay = Math.round(remaining / (daysTillGoal - estWeekends));
		GradProgContainer.innerHTML = "<div id='TicketCounterInner' style='height: 20px; width: 100%; position: relative; border: 1px solid #000; border-radius: 3px;margin-bottom: 5px;'> <div style='background: #007ac0; position: absolute; left: 0; top: 0; bottom: 0; height: 20px; width: " + percentComplete + "%; color: #fff; text-align: right'></div><div id='PercentGradComplete' style='position: absolute; bottom: 0; top: 0; right: 0; left: 0; text-align: center;'>" + percentComplete + "%</div></div><div style='text-align: center;'>You need " + remaining + " tickets to hit the milestone! That means about " + ticketsPerDay + " tickets per day!</div>";
		//DEPENDING ON THE PROGRESS, CHANGE THE LOCATION AND COLOR OF THE PERCENT SYMBOL WITHIN THE GRADPROGRESS BAR
		if ((percentComplete >= 43) && (percentComplete < 60)) {
			percentContainer = document.getElementById("PercentGradComplete");
			percentContainer.style.color = "#FFF";
			percentContainer.style.textAlign = "right";
			percentContainer.style.right = "auto";
			percentContainer.style.width = percentComplete + "%";
		} else if (percentComplete >= 60) {
			percentContainer = document.getElementById("PercentGradComplete");
			percentContainer.style.color = "#FFF";
			percentContainer.style.textAlign = "center";
			percentContainer.style.right = "0";
			percentContainer.style.width = "auto";
		}
		if (remaining <= 0) {
			GradProgContainer.innerHTML = "Congrats! You've finished!";
		}
	} else {
		GradProgContainer.innerHTML = "<div style='text-align: center;'>Hmmmm... Doesn't look like you have any tickets!</div>";

	}

}


/*------ Hide the Squawkbox on page load until clicked ------*/

function hideSquawkPosts() {
	var postArea = $('#DiscussionWrapper');
	if (!document.getElementById("SquawkToggle")) {
		$("#BodyContent").prepend("<div id='SquawkToggle' style='transition: .2s; border: 2px solid green; padding: 5px 10px; text-align: center; margin: 20px auto; cursor: pointer; border-radius: .2em; color: green; font-size: 16px;'>Show Posts</div>");
	}
	if (postArea.is(":visible") === false) {
		postArea.show();
		document.getElementById('SquawkToggle').innerHTML = "Hide Posts";
		document.getElementById('SquawkToggle').style.padding = "5px 10px";
	} else {
		document.getElementById('DiscussionWrapper').style.display = "none";
		postArea.hide();
		document.getElementById('SquawkToggle').innerHTML = "Show Posts";
		document.getElementById('SquawkToggle').style.padding = "60px 10px";
	}
}

$('#BodyContent').on('click', '#SquawkToggle', function() {
	hideSquawkPosts();
});
/******************************************************************/
/***************         Adding Custom Tabs        ****************/
/******************************************************************/


/*------ Reusable function to add additional tabs ------*/

function addTab(name, height, id, src, pageTitle, type) {
	if (type == "inPage" && document.getElementById(id)) {
		$('.SectionTabsList').append('<li class="SectionTab" id="' + id + '" style="cursor:pointer;">' + name + '</li>');
		//SET WINDOW HEIGHT
		document.getElementById(id).addEventListener("click", function() {
			$(".SectionTabsList > li").removeClass('ActiveTab');
			var tabID = "#" + id;
			$(tabID).addClass(' ActiveTab');
			$('.SectionButtonsContainer, .TimezonesTableContainer').fadeOut();
			//ADD IFRAME
			document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: " + height + "px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='" + src + "'></iframe>";
			//CHANGE THE PAGE TITLE
			document.getElementsByClassName('PageTitle')[0].innerHTML = pageTitle;
			document.title = "Odo | " + pageTitle;
		});
	} else {
		$('.SectionTabsList').append('<li class="SectionTab" id="' + id + '" style="cursor:pointer;"><a href="' + src + '" target="_blank">' + name + '</a></li>');
	}
}

/*------ Additional tabs to be added using function above ------*/

var customTabs = {
	addChromeOptions: function() {
		var optionsUrl = chrome.extension.getURL("../views/options.html");
		addTab("Extension Options", "2300", "optionsTab", optionsUrl, "Odo Enhanced Options", "inPage");
	},
	addDesign: function() {
		addTab("Design", "1300", "designTab", "http://itwiki.corp.qualtrics.com/odo-enhanced-resources/designportal/Portal.html#noHeader", "Design", "inPage");
	},
	addPanels: function() {
		addTab("Panels Playbook", "1000", "panelsTab", "http://itwiki.corp.qualtrics.com/panels#noHeader", "Panels Resources", "inPage");
	},
	addPlaybook: function() {
		addTab("Playbook", "1000", "playbookTab", "http://itwiki.corp.qualtrics.com/playbook#noHeader", "Playbook", "inPage");
	},
	addHelpMessages: function() {
		var container = $('.SectionTabsList');
		var unreadCount = 1;
		var unreadCountDate; // THE LAST TIME THEY LOOKED AT THE TIPS
		chrome.storage.sync.get({
			ucSetDate: new Date().toString(), //MUST CHANGE TO STRING
			uc: 0
		}, function(items) {
			var innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer;">Tips & Tricks</li>';
			unreadCountDate = new Date(items.ucSetDate);
			unreadCount = items.uc;
			var diff = Math.abs(unreadCountDate - new Date()); // FIGURE OUT HOW MANY MILLISECONDS IT'S BEEN SINCE THEY VISITED THE TIPS SECTION
			if (diff > 432000000) {
				unreadCount += 1;
				innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer; color: #04a365; border-top: #04a365 4px solid">Tips & Tricks</li>';
				chrome.storage.sync.set({
					uc: unreadCount //PROBABLY NOT NECESSARY ANYMORE
				});
			}
			container.append(innerTab);
		});
	}

};


/*------------ Adding help messages as a tab -------------*/

var currentMessage;
var lastWeeksMessage;

function toggleMessages(refresh) {
	chrome.storage.sync.get({
		cm: 0
	}, function(items) {
		currentMessage = items.cm;
		if ((currentMessage === null) || (refresh)) {
			var max = messages.length;
			currentMessage = Math.floor(Math.random() * max);
			chrome.storage.sync.set({
				cm: currentMessage,
				lwm: lastWeeksMessage,
				uc: 0,
				ucSetDate: new Date()
			});
		} else {}
		replaceCenterContent(currentMessage);
	});
}
$(".SectionTabsList").on("click", "#MessagesTab", function() {
	toggleMessages(false);
});

function replaceCenterContent(id) {
	document.getElementById('BodyContent').innerHTML = "<div id='TipOuter'><div id='TipHeader'></div><div id='TipContent'></div><div id='NewTipContainer'><button id='AddToSnippets' class='btn'>Add tip to my Snippets</button><button class='btn' id='NewTip'>Give me a new tip</button><div id='TipList'></div></div><div style='margin-top: 50px; display:inline-block;' id='TipSurvey'></div></div>";
	document.getElementById('TipContent').innerHTML = messages[id];
	document.getElementById('TipHeader').innerHTML = "To be more productive this week...";
	document.getElementById('TipList').innerHTML = "To see the whole list, <a href='https://odo.corp.qualtrics.com/wiki/index.php/Quni#Quni_Culture' target='_blank'>click here</a>.";
	document.getElementById('TipSurvey').innerHTML = "<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>Was this Helpful?      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>     Suggest a New Tip</a>";
	currentMessageID = id;
	chrome.storage.sync.set({
		ucSetDate: new Date().toString()
	});
}
$("#BodyContent").on("click", "#NewTip", function() {
	toggleMessages(true);
});

function addFindMeButton() {
	$("#RightMenuColumn").append("<div id='FindMeButtonContainer' style='text-align: right;'><button id='FindMeButton'>Find Myself in the Report</button></div>");
}
$("body").on("click", "#AddToSnippets", function() {
	addNewSnippet(messages[currentMessageID]);
});
var currentMessageID;

function addNewSnippet(snippet) {
	var data = new FormData();
	data.append('Description', snippet);

	jQuery.ajax({
		url: 'https://odo.corp.qualtrics.com/?a=Snippets&b=SnippetsEditor&addSnippet=true&week=ThisWeek&eid=MATTHEWB&date=2016-03-14&Description=test',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		type: 'POST',
		success: function(data) {
			alert("Added to Snippets");
		}
	});
}

/*******************************************************************/
/***************     Add Clinic Feedback Options    ****************/
/******************************************************************+/

/*------ Add Submit Clinic Feedback Button ------*/
function addClinicFeedbackButton() {
	var container = document.getElementsByClassName('ui-dialog-buttonset')[0];
	var node = document.createElement("Z");
	var textnode = document.createTextNode("Submit Clinic Feedback");
	node.appendChild(textnode);
	node.setAttribute("id", "newClinicButton");
	node.setAttribute("class", "btn btn-success");
	node.setAttribute("style", "display:inline; font-size:1em; margin:.5em .4em .5em 0; border:0px solid #cccccc; border-radius:4px;");
	container.appendChild(node);
	document.getElementById('newClinicButton').innerHTML = "<span class='icon icon-envelope'></span><span>Submit Clinic Feedback</span>";
}

/*------ Add Clinic Feedback Features ------*/

function addClinicFeedbackFeature() {
	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
		//check for Create Ticket
		if ($('.ui-dialog .ui-dialog-title').text() == 'Clinic Ticket') {
			clearInterval(myVar);
			//Check for InteractionCodes element
			clinicVar = setInterval(clinicTimer, 1000);
		}
	}

	function clinicTimer() {
		if ($('#InteractionCodes').length) {
			console.log("InteractionCodes detected. Injecting elements.");
			$(document).ready(function() {
				$("#InteractionCodes").after('<div class="Caption" style="font-family:sans-serif; font-size: 13px; padding:4px 2px 4px 0px; color:#a5a5a5;">Purpose of Visit:</div> <select style="margin-bottom:10px; border:1px solid #ccc; border-radius:5px; height:24px; background:transparent;" id="dropDown" name="Purpose of Visit"> <option></option> <option onClick="something();">Client Support Question</option> <option>Client Use-Case Consultation</option> <option>Personal</option> </select> <div id="textInput" style="font-family:sans-serif; width:515px; font-size:13px; color:#a5a5a5; display:none;"> <div class="Caption">Reason client support question was not routed through Support:</div> <input style="width:100%; overflow:auto; padding:2px; border:1px solid #ccc;border-radius:5px;" type="text" id="Explanation" name="Description" value="" style="width: 515px; height:30px;" autocomplete="off" ></input> </div>');
				$('button:contains("Mark Resolved")').css("display", "none");
				addClinicFeedbackButton();
				//Display textbox if Client Support Question selected
				$(document).ready(function() {
					$('#dropDown').on('change', function() {
						var value = $(this).val();
						purposeOfVisit = value;
						if (value == "Client Support Question") {
							document.getElementById("textInput").style.display = "block";
						} else {
							document.getElementById("textInput").style.display = "none";
						}
					});
				});
				$('#newClinicButton').on('click', function() {
					var textArray = [$("#NoteBox").val(), '\nPurpose:', purposeOfVisit, '\nExplanation:', $("#Explanation").val()];
					$("#NoteBox").val(textArray.join(' '));
					console.log("Text is being passed into the hidden textarea.");
					console.log("Hidden textarea has been populated with: " + $('#NoteBox').val());
					$('button:contains("Mark Resolved")')[0].click();
				});
				clearInterval(clinicVar);
			});
		}
	}
}

/******************************************************************/
/***************     Adding Additional Buttons     ****************/
/******************************************************************/


/*------ Add Clinic Button ------*/

function addClinicTicket() {
	var container = document.getElementsByClassName('SectionButtonsContainer')[0];
	var node = document.createElement("A");
	var textnode = document.createTextNode("Create Clinic Ticket");
	node.appendChild(textnode);
	node.setAttribute("id", "newClinic");
	node.setAttribute("class", "btn btn-success");
	node.setAttribute('onclick', 'Dialog("https://odo.corp.qualtrics.com/?a=Tickets&b=CT_Creator&ot=&oid=&uid=");');
	container.appendChild(node);
	document.getElementById('newClinic').innerHTML = "<span class='icon btn-icon-plus'></span><span>Create Clinic Ticket</span>";
}

/* ------------- Add Email Button ---------------- */

function addEmailTicket() {
	var container = document.getElementsByClassName('SectionButtonsContainer')[0];
	var node = document.createElement("A");
	var textnode = document.createTextNode("Create Email Ticket");
	node.appendChild(textnode);
	node.setAttribute("id", "newEmail");
	node.setAttribute("class", "btn btn-success");
	if ($('body#odo-not-wiki').length == 1) {
		node.setAttribute('onclick', 'odoApp.setVar("ReplyToEmailID", "");odoApp.setVar("draft", undefined);odoApp.setVar("NewEmail", "new-email");odoApp.setVar("Account", "Support");odoApp.Dialog("modules/Email/EmailEditor/template.EmailEditor.html");');
	} else {
		node.setAttribute('onclick', 'Dialog("?b=NewEmailEditor&CreateTicketType=SE&account=Support");');
	}
	if (container) {
		container.appendChild(node);
		document.getElementById('newEmail').innerHTML = "<span class='icon icon-envelope'></span><span>Create Email Ticket</span>";
	}
	if (MiniEmailButtonOn) {
		minimizeTicketButton("Create Email Ticket");
	}
}

/*------ Minify General Ticket Button ------*/

function minimizeTicketButton(text) {
	var btnInner = $('span:contains("' + text + '")');
	btnInner.remove();
}


/*------------ Adding a bit of text when logging into accounts -------------*/

function addResTeamBit() {
	var textarea = document.querySelectorAll('#EmergencyLoginForm > textarea')[0];
	textarea.innerHTML = loginText;
}

/*------------- Adding reactions to Odo Squawkbox Posts --------------*/
var hiddenPostsArray = [];
var postElements = {};

function addReactionButtons() {
	var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/posts");

	// get the counts for every post
	var posts = document.getElementsByClassName('DiscussionControls');
	var firebasePosts = {};
	firebaseRef.once("value", function(snapshot) {
		firebasePosts = snapshot.val();
		for (var i = 0; i < posts.length; i++) {
			var id = posts[i].id.split("-")[1];
			if (!postElements[id]) {
				postElements[id] = {
					scrappyCount: 0,
					allInCount: 0,
					obsessedCount: 0,
					oneTeamCount: 0,
					transparentCount: 0,
					tacoCount: 0,
					id: id
				};
			}
			if (firebasePosts[id]) {
				for (var prop in firebasePosts[id]) {
					postElements[id][prop] = firebasePosts[id][prop];
				}
			}
		}
		// add the actual buttons
		addButtons(postElements);
		chrome.storage.sync.get({
			hiddenPostsArray: ""
		}, function(items) {
			if (items.hiddenPostsArray.length > 0) {
				hiddenPostsArray = JSON.parse(items.hiddenPostsArray) || [];
				for (var i = 0; i < hiddenPostsArray.length; i++) {
					var id = hiddenPostsArray[i];
					var numericId = hiddenPostsArray[i].split("-")[1];
					if (postElements.hasOwnProperty(numericId)) {
						document.getElementById(id).className += " hidden";
					}
				}
			}
		});
	});

	//define actions for button clicks
	$('.DiscussionControls').on('click', '.taco', function() {
		var forReal = confirm("Are you sure you want to hide this spam?");
		if (forReal) {
			var parentID = this.parentElement.parentElement.id;
			var discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			var containerID = "DiscussionContainer-" + discussionID;
			$("#" + containerID).addClass("hidden");
			//trigger something to firebase
			postElements[discussionID].tacoCount += 1;
			var obj = {
				id: discussionID,
				tacoCount: postElements[discussionID].tacoCount
			};
			firebaseRef.child(discussionID).update(obj);
			//trigger something to your personal storage
			hiddenPostsArray.push(containerID);
			chrome.storage.sync.set({
				hiddenPostsArray: JSON.stringify(hiddenPostsArray)
			});
			//trigger something to view
			var selector = "#" + parentID + " div .taco .reaction_count";
			document.querySelector(selector).innerHTML = obj.tacoCount;
		}
	});

	$('.DiscussionControls').on('click', '.scrappy', function() {
		if ($(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			var discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].scrappyCount += 1;
			var obj = {
				id: discussionID,
				scrappyCount: postElements[discussionID].scrappyCount
			};
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .scrappy .reaction_count";
			document.querySelector(selector).innerHTML = obj.scrappyCount;
		}
	});
	$('.DiscussionControls').on('click', '.allIn', function() {
		if ($(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			var discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].allInCount += 1;
			var obj = {
				id: discussionID,
				allInCount: postElements[discussionID].allInCount
			};
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .allIn .reaction_count";
			document.querySelector(selector).innerHTML = obj.allInCount;
		}
	});
	$('.DiscussionControls').on('click', '.obsessed', function() {
		if ($(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			var discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].obsessedCount += 1;
			var obj = {
				id: discussionID,
				obsessedCount: postElements[discussionID].obsessedCount
			};
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .obsessed .reaction_count";
			document.querySelector(selector).innerHTML = obj.obsessedCount;
		}
	});
	$('.DiscussionControls').on('click', '.oneTeam', function() {
		if ($(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].oneTeamCount += 1;
			var obj = {
				id: discussionID,
				oneTeamCount: postElements[discussionID].oneTeamCount
			};
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .oneTeam .reaction_count";
			document.querySelector(selector).innerHTML = obj.oneTeamCount;
		}

	});
	$('.DiscussionControls').on('click', '.transparent', function() {
		if ($(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			var discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].transparentCount += 1;
			var obj = {
				id: discussionID,
				transparentCount: postElements[discussionID].transparentCount
			};
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .transparent .reaction_count";
			document.querySelector(selector).innerHTML = obj.transparentCount;
		}

	});
}
var postIdsWithButtons = [];

function addButtons(postElements) {
	for (var post in postElements) {
		if (postIdsWithButtons.indexOf(post) > -1) {} else {
			postIdsWithButtons.push(post);
			var tacoClass = "";
			var scrappyClass = "";
			var allInClass = "";
			var obsessedClass = "";
			var oneTeamClass = "";
			var transparentClass = "";
			var id = "#DiscussionControls-" + post;
			//minimize some posts
			if (minimalPostsOn) {
				$('.DiscussionSummary').addClass("hidden");
			}
			//check for spam
			if (postElements[post].tacoCount >= spamCount) {
				var spamID;
				spamID = "DiscussionCommentSection-" + post;
				document.getElementById(spamID).style.display = "none";

				spamID = "DiscussionSummary-" + post;
				document.getElementById(spamID).style.display = "block";

				spamID = "DiscussionLikesSection-" + post;
				document.getElementById(spamID).style.display = "none";

				spamID = "DiscussionText-" + post;
				document.getElementById(spamID).style.display = "none";

				spamID = "DiscussionContainer-" + post;
				var container = document.getElementById(spamID);
				container.querySelector('img').src = "http://blog.fpweb.net/media/2013/02/Say-NO-to-SPAM-325x321.png";
			}
			//set counts
			if (postElements[post].scrappyCount >= 1) {
				scrappyClass = "nonOpaque";
			}
			if (postElements[post].allInCount >= 1) {
				allInClass = "nonOpaque";
			}
			if (postElements[post].obsessedCount >= 1) {
				obsessedClass = "nonOpaque";
			}
			if (postElements[post].oneTeamCount >= 1) {
				oneTeamClass = "nonOpaque";
			}
			if (postElements[post].transparentCount >= 1) {
				transparentClass = "nonOpaque";
			}
			$(id).append("<div>" +
				"<div class='transparent reaction " + transparentClass + "' title='Transparent'>" +
				"<div class='reaction_count'>" + postElements[post].transparentCount + "</div>" +
				"</div>" +
				"<div class='allIn reaction " + allInClass + "' title='All In'>" +
				"<div class='reaction_count'>" + postElements[post].allInCount + "</div>" +
				"</div>" +
				"<div class='obsessed reaction " + obsessedClass + "' title='Customer Obsessed'>" +
				"<div class='reaction_count'>" + postElements[post].obsessedCount + "</div>" +
				"</div>" +
				"<div class='oneTeam reaction " + oneTeamClass + "' title='One Team'>" +
				"<div class='reaction_count'>" + postElements[post].oneTeamCount + "</div>" +
				"</div>" +
				"<div class='scrappy reaction " + scrappyClass + "' title='Scrappy'>" +
				"<div class='reaction_count'>" + postElements[post].scrappyCount + "</div>" +
				"</div>" +
				"<div class='taco reaction " + tacoClass + "' title='Archive'>" +
				"<div class='hidden reaction_count'>" + postElements[post].tacoCount + "</div>" +
				"</div>" +
				"</div>");
		}

	}
}


/******************************************************************/
/***************                                *******************/
/**************      Add custom stylesheets      ******************/
/**************    based on selected options     ******************/
/***************                                *******************/
/******************************************************************/

var customStylesheets = {
	shrinkPosts: function() {
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("css/squawkPosts.css") + '">'
		);
	},
	greyAlerts: function() {
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("css/greyAlerts.css") + '">'
		);
	}
};

/******************************************************************/
/***************                                *******************/
/**************       Check user settings        ******************/
/**************        and run functions         ******************/
/**************           accordingly            ******************/
/***************                                *******************/
/******************************************************************/


function addons() {
	//GENERAL GRABBING
	if ((urlParams.eid !== null) && (urlParams.eid !== "") && (urlParams.a === "MyProfile")) {
		getEID();
	}
	changeTitle();
	changeFavicon(favicon);
	//APPLY A THEME
	//ADD YOUR TABS
	if ((urlParams.a == "Home" || urlParams.TopNav != "Tickets") || (urlParams.a == 'MyProfile') || (urlParams.a === null && urlParams.TopNav != "Tickets")) {
		if (PlaybookTabOn) {
			customTabs.addPlaybook();
		}
	}
	if (TipsOn) {
		customTabs.addHelpMessages();
	}
	if (DesignTabOn) {
		customTabs.addDesign();
	}
	if (PanelsTabOn) {
		customTabs.addPanels();
	}
	//QUNI TICKET BREAKOUT
	if (showQuniTickets) {
		addDashTable();
	}
	//SNIPPETS AND CHROME OPTIONS
	if ((urlParams.a == "Home") || (urlParams.a === null && urlParams.TopNav != "Tickets" && urlParams.TopNav != "Company" && urlParams.TopNav != "Reports")) {
		customTabs.addChromeOptions();
	}
	//CUSTOM BUTTONS
	if (EmailButtonOn) {
		addEmailTicket();
	}
	//My clinic button change
	if (ClinicFeedbackButtonOn) {
		addClinicFeedbackFeature();
	}
	if (ClinicButtonOn) {
		if (currentDay == ClinicDay) {
			if ((currentHour >= ClinicStartTime.split(":")[0]) && (currentHour <= ClinicEndTime.split(":")[1])) {
				addClinicTicket();
			}
		}
	}
	if (MiniTicketOn) {
		minimizeTicketButton("Create Ticket");
	}
	if (MiniTakeTicketOn) {
		minimizeTicketButton("Take a Ticket");
	}
	if (MiniSupportPhoneOn) {
		minimizeTicketButton("Support Phone Ticket");
	}
	if (MiniClientIssueOn) {
		minimizeTicketButton("Report Client Issue");
	}
	if ((ShowGradProgressOn) && (EmpID !== "")) {
		showQuniProgress();
	}
	if ((urlParams.a == "QUniReports") && (urlParams.TopNav == "Reports")) {
		addFindMeButton();
	}
	//PULSE MODIFICATIONS
	if (document.getElementById('EmergencyLoginCheckbox')) {
		var loginCheckbox = document.getElementById('EmergencyLoginCheckbox');
		window.addEventListener("click", addResTeamBit);
	}
	//CUSTOM STYLESHEETS
	if (minimalPostsOn) {
		customStylesheets.shrinkPosts();
	}
	if (calmAlertsOn) {
		customStylesheets.greyAlerts();
	}
	if (urlParams.b == "RSUserAccountAccess") {
		var labelContainer = $('#BodyContent').find('div:nth-child(7)');
		labelContainer.append("<label for='EmergencyLoginCheckbox' class='btn btn-primary'>CLICK ME TO LOGIN </label>");
	}
	if ((hidePosts) && (urlParams.a === null) && (urlParams.b === null)) {
		hideSquawkPosts();
	}
	if (urlParams.a === null && urlParams.b === null) {
		var count = 0;
		var squawkboxChecker = window.setInterval(function() {
			if (document.getElementById('DiscussionLoadMoreBar')) {
				addReactionButtons();
				document.getElementById('DiscussionLoadMoreBar').addEventListener("click", function() {
					window.setTimeout(function() {
						addReactionButtons();
					}, 2400);
				});
				clearInterval(squawkboxChecker);
			}
			count++;
			if (count > 5) {
				clearInterval(squawkboxChecker);
			}
		}, 500);

	}
	//SPF CHECKER
	if (urlParams.b == "RSBrandProfile") {
		window.setTimeout(OdoSPFCheck, 300);

	}
}
/*****************************************************
 This is a tool to automate looking up SPF Records. It uses the Qualtrics SPF checker, which looks for the value of
 _spf.qualtrics.com on the DNS layer.

 Programmed by: Aaron Monk
 With help from Matthew Bloomfield and Carson Zeller
 Created: July 4 2016
 Last Modified: July 12 2016
 ******************************************************/
function OdoSPFCheck() {
	// Create  Button

	var button = document.createElement("input");
	button.type = "button";
	button.value = "Check SPF";

	// Append to Valid Email Domain
	document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td.BrandSettingsFieldLabelLight").appendChild(button);

	// Add button event handler
	button.addEventListener("click", function() {
		//Store email domains in array
		var DomainArray = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > textarea").value.split(',');

		//Remove the *, if present
		var index = DomainArray.indexOf('*');

		if (index > -1) {
			DomainArray.splice(index, 1);
		}

		//Remove spaces
		for (i = 0; i < DomainArray.length; i++) {
			DomainArray[i] = DomainArray[i].trim();
		}


		//Create a HTML Table element.
		var spftable = document.createElement("TABLE");
		spftable.border = "1";

		//Populate Table Headers
		var row = spftable.insertRow(-1);
		var Domain_t = row.insertCell(0);
		var SPF_t = row.insertCell(1);
		var MX_t = row.insertCell(2);

		Domain_t.innerHTML = '<b>Domain (<span style="color:blue; cursor:pointer;">?</span>)</b>';
		SPF_t.innerHTML = "<b>Has SPF?</b>";
		MX_t.innerHTML = "<b>Verify on MXToolbox</b>";


		document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2)").appendChild(spftable);

		// Perform an SPF Check of each domain and populate table
		for (var i = 0; i < DomainArray.length; i++) {
			SPFCheck(DomainArray[i], i, checkDomain);
		}

		function checkDomain(Domain, DomainStatus) {
			var row = spftable.insertRow(-1);
			var Domain_t = row.insertCell(0);
			var SPF_t = row.insertCell(1);
			var MX_t = row.insertCell(2);

			Domain_t.innerHTML = Domain;
			SPF_t.innerHTML = DomainStatus;
			MX_t.innerHTML = "<a target='_blank' href='http://mxtoolbox.com/SuperTool.aspx?action=spf%3a" + Domain + "&run=toolpage'>Result for " + Domain + "</a>";
		}

		//Add event listener for '?' info button
		var info = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(1)");
		info.addEventListener("click", function() {
			alert("This SPF Checker uses the Qualtrics SPF Check, which looks for _spf.qualtrics.com on the SPF Record. Uncommon but functional setups such _spf.qemailserver.com or our IP range (162.247.216.0/22) will record as 'No', but can be checked on MXToolbox.");
		});

	});

	// SPF Checker Function
	var data = null;

	function SPFCheck(domain, index, callback) {
		var xhr = new XMLHttpRequest();
		var URL = "http://itwiki.corp.qualtrics.com:4040/api/spf-checker?domain=" + domain;
		var DomainStatus = null;


		xhr.addEventListener("readystatechange", function() {
			if (this.readyState === 4) {
				if (this.responseText == '{"hasQualtricsSpf":true}') {
					DomainStatus = '<font color="green">Yes</font>';
				} else if (this.responseText == '{"hasQualtricsSpf":false}') {
					DomainStatus = '<font color="red">No</font>';
				} else {
					DomainStatus = '<font color="yellow">Error</font>';
				}
				callback(domain, DomainStatus);
			}
		});
		xhr.open("GET", URL);
		xhr.send(data);
	}
}
////////////////////////////////////////////////////////////////
function addDashTable() {

	if ((urlParams.TopNav == "Tickets" || urlParams.a == "Tickets") && (urlParams.b === undefined || urlParams.b == "TicketsSupportInBox")) {
		var menu = $('.menu-items');

		var Tickets;

		var QueueObjects = {

			"Student": {
				"head": "StudentHead",
				"item": "StudentItem",
				"count": 0
			},
			"ZebraRhino": {
				"head": "ZRHead",
				"item": "ZRItem",
				"count": 0
			},
			"Tiger": {
				"head": "TigerHead",
				"item": "TigerItem",
				"count": 0
			},
			"DragonLion": {
				"head": "DLHead",
				"item": "DLItem",
				"count": 0
			},
			"SI": {
				"head": "SIHead",
				"item": "SIItem",
				"count": 0,
				"show": showSIQueue
			},
			"TA": {
				"head": "TAHead",
				"item": "TAItem",
				"count": 0,
				"show": showTAQueue
			},
			"360": {
				"head": "360Head",
				"item": "360Item",
				"count": 0,
				"show": show360Queue
			},
			"EE": {
				"head": "EEHead",
				"item": "EEItem",
				"count": 0,
				"show": showEEQueue
			},
			"Themes": {
				"head": "ThemesHead",
				"item": "ThemesItem",
				"count": 0,
				"show": showThemesQueue
			},
			"VC": {
				"head": "VCHead",
				"item": "VCItem",
				"count": 0,
				"show": showVocQueue
			},
			"SW": {
				"head": "SWHead",
				"item": "SWItem",
				"count": 0,
				"show": showStatQueue
			},
			"Integrations": {
				"head": "IntegrationsHead",
				"item": "IntegrationsItem",
				"count": 0,
				"show": showIntQueue
			}

		};

		$('.PageSectionToolbar').after('<div id="TicketBreakdownDiv"></div>');
		var ticketBreakdownURL = chrome.extension.getURL('views/TicketBreakdown.html');

		$('#TicketBreakdownDiv').load(ticketBreakdownURL, function() {
			var queues = Object.keys(QueueObjects);
			for (var i = 0; i < queues.length; i++) {
				var queue = queues[i];
				if (QueueObjects[queue].show === false) {
					$("#" + QueueObjects[queue].head).hide();
					$("#" + QueueObjects[queue].item).hide();
				}
			}
		});


		chrome.storage.sync.get({
			eid: ""
		}, function(items) {
			$.ajax({
				url: 'https://odoservices.b1-prv.qops.net/Tickets/tickets?recommended=true&employeeID=' + items.eid,
				success: function(data) {
					Tickets = data;
					for (var i = 0; i < Tickets.length; i++) {
						var ticket = Tickets[i];
						//Capture the interaction code to assign queue
						var ticketCode = ticket.InteractionCode;
						if (ticketCode === null) {
							ticketCode = "";
						}
						var ticketTier = ticket.ClientTier;
						//Assign Tier Variable that can also be used as the queue if it's a standard GS ticket
						if (ticketTier == "Trial User" || ticketTier === "") {
							ticketTier = "Student";
						} else if (ticketTier == "Dragon" || ticketTier == "Lion") {
							ticketTier = "DragonLion";
						} else if (ticketTier == "Zebra" || ticketTier == "Rhino") {
							ticketTier = "ZebraRhino";
						}
						//call assignQueue() helper function
						var queue = assignQueue(ticketCode, ticketTier);

						var queueItem = QueueObjects[queue].item;
						//Increment ticket count
						QueueObjects[queue].count = QueueObjects[queue].count + 1;
						//Update count in widget
						document.getElementById(queueItem).innerHTML = QueueObjects[queue].count;
						if (QueueObjects[queue].count > 0) {
							//Bold the text
							$("#" + QueueObjects[queue].head).css("font-weight", "bold");
							$("#" + QueueObjects[queue].item).css("font-weight", "bold");
						}

					}
				}
			});
		});
	}
}

/////// Helper function to assign queue ////////

function assignQueue(ticketCode, ticketTier) {

	var assignedQueue = null;
	var nextQueue = null;
	var ticketCodeArray = ticketCode.split(",");
	var specialties = ["SI", "EE", "TA", "360", "EE", "Themes", "VC", "Statwing", "Integrations"];

	for (var i = 0; i < ticketCodeArray.length; i++) {

		var thisCode = ticketCodeArray[i];
		//Split up the current code into the product code and subcode
		thisCode = thisCode.split("|");
		var thisProductCode = thisCode[0];
		var thisSubCode;
		if (thisCode[1] === undefined) {
			thisSubCode = "";
		} else {
			thisSubCode = thisCode[1];
		}
		//Assign the queue based on the current code
		if (thisProductCode == "GS" && thisSubCode == "11") {
			nextQueue = "Integrations";
		} else if (thisProductCode == "GS") {
			nextQueue = ticketTier;
		} else if (thisProductCode == "OT" && thisSubCode == "3") {
			nextQueue = "Themes";
		} else if (thisProductCode == "OT") {
			nextQueue = ticketTier;
		} else if (thisProductCode == "SI") {
			nextQueue = "SI";
		} else if (thisProductCode == "TA") {
			nextQueue = "TA";
		} else if (thisProductCode == "TS") {
			nextQueue = "360";
		} else if (thisProductCode == "VC") {
			nextQueue = "VC";
		} else if (thisProductCode == "EE") {
			nextQueue = "EE";
		} else if (thisProductCode == "SW") {
			nextQueue = "SW";
		} else {
			nextQueue = ticketTier;
		}

		if (assignedQueue === null || (specialties.indexOf(assignedQueue) < 0 && specialties.indexOf(nextQueue) > -1)) {
			assignedQueue = nextQueue;
		}

	}
	return assignedQueue;

}

console.log("Success! Odo Enhanced Works!");