console.log("Success! Odo Enhanced Works!");
/* ------------- Built by Zach McDonnell & Matt Bloomfield---------------- */
/* ------------- Return query string in var urlParams ---------------- */



/******************************************************************/
/***************                                *******************/
/**************        Page Initialization       ******************/
/***************                                *******************/
/******************************************************************/


/*------- Initialize variables from Chrome Storage ------*/

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
var hidePosts;
var spamCount;
var blockSpam;

/*------- Retrieve variables from Chrome Storage ------*/

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
		gp: true, // Grad Progress Tracker
		eid: "", // Employee ID
		tm: "", // Current Theme
		tg: 3700, //Ticket Goal
		td: "",//Ticket Goal Date
		tips: true,
		ename: "",
		panels: false,
		ltxt: "",
		calmAlerts: false,
		minPosts:false,
		hidePosts: false,
		spamCount: 25,
		blockSpam: true
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

/*------- Get EID and set in Chrome Storage ------*/

var getEID = function() {
	EmpID = urlParams["eid"];
	chrome.storage.sync.set({
		eid: EmpID
	});
}


/******************************************************************/
/***************                                *******************/
/**************          Page Level Setup        ******************/
/***************                                *******************/
/******************************************************************/

/* --------- Sets the appropriate favicon to use  -------- */
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
		var msDay = 60*60*24*1000;
		var today = new Date();
		var daysTillGoal = (( goal - today ) / msDay) + 1;
		var estWeekends = ( daysTillGoal / 7 ) * 2;
		var ticketsPerDay = Math.round(remaining / ( daysTillGoal - estWeekends));
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
		if (remaining <= 0) {
			GradProgContainer.innerHTML = "Congrats! You've finished!"
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
	if (postArea.is(":visible") == false) {
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
$('#BodyContent').on('click', '#SquawkToggle', function () {
	hideSquawkPosts();
});
/******************************************************************/
/***************         Adding Custom Tabs        ****************/
/******************************************************************/


/*------ Reusable function to add additional tabs ------*/

function addTab(name, height, id, src, pageTitle) {
	$('.SectionTabsList').append('<li class="SectionTab" id="' + id + '" style="cursor:pointer;">' + name + '</li>');
	//SET WINDOW HEIGHT
	document.getElementById(id).addEventListener("click", function () {
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
}


/*------ Additional tabs to be added using function above ------*/

var customTabs = {
	/*Adds the Help Desk tab to every page*/
	addHelpDesk: function() {
		addTab("Help Desk Ticket", "1300", "helpdeskTab", 'http://survey.qualtrics.com/WRQualtricsSurveyEngine/?SID=SV_3lo6hZODeRSbXsF&RID=MLRP_6i2XORBVUvB6cm1&_=1', "Help Desk Request");
	},
	addChromeOptions: function() {
		var optionsUrl = chrome.extension.getURL("../resources/options.html");
		addTab("Extension Options", "2300", "optionsTab", optionsUrl, "Odo Enhanced Options");
	},
	addDesign: function() {
		addTab("Design", "1300", "designTab", "http://itwiki.corp.qualtrics.com/odo-enhanced-resources/Portal.html#noHeader", "Design");
	},
	addPanels: function() {
		addTab("Panels Playbook", "1000", "panelsTab", "http://itwiki.corp.qualtrics.com/panels#noHeader", "Panels Resources");
	},
	addPlaybook: function() {
		addTab("Playbook", "1000", "playbookTab", "http://itwiki.corp.qualtrics.com/playbook#noHeader", "Playbook");
	},
	addHelpMessages: function () {
		var container = $('.SectionTabsList');
		var unreadCount = 1;
		var unreadCountDate; // THE LAST TIME THEY LOOKED AT THE TIPS
		chrome.storage.sync.get({
			ucSetDate: new Date().toString(), //MUST CHANGE TO STRING
			uc: 0
		}, function(items) {
			unreadCountDate = new Date(items.ucSetDate);
			unreadCount = items.uc;
			var diff = Math.abs(unreadCountDate - new Date()) // FIGURE OUT HOW MANY MILLISECONDS IT'S BEEN SINCE THEY VISITED THE TIPS SECTION
			if (diff > 432000000) {
				unreadCount += 1;
				var innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer; color: #04a365; border-top: #04a365 4px solid">Tips & Tricks</li>';
				chrome.storage.sync.set({
					uc: unreadCount //PROBABLY NOT NECESSARY ANYMORE
				});
			} else {
				var innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer;">Tips & Tricks</li>';
			}
			container.append(innerTab);
		});
	},

};



/*------------ Adding help messages as a tab -------------*/

	var messages = [
		"Bookmark each data center login page and personal ODO pages to make the granting MBA process faster.",
		"When troubleshooting in a long block, add skip logic to the question before the one you need.",
		"In user moves 'notes', add the ODO ticket URL, usernames, and branded login page so that when you go back to it, you don't waste any more time searching for it.",
		"Place commonly misspelled or mistyped words into AText with the correct spelling as a way to autocorrect yourself.",
		"Saving a short blurb for Jing-answer emails will save you time. For example: 'Hello [Name], Click HERE for your support video!' This way you can just make a video and not worry about also writing everything out.",
		"Use hyperlinks to attach support pages to key words in your emails. e.g., 'you can do this with Email Triggers' (hyperlink 'Email Triggers' to http://www.qualtrics.com/university/researchsuite/advanced-building/advanced-options-drop-down/email-triggers/)",
		"aText a generic message for if you haven't heard from a client in a few days. 'Hi there, I just wanted to follow up on the email I sent you... Did I answer your question?' It makes following up with a client much quicker, and that way you're able to auto-resolve without much worry if they don't respond within a day or so.",
		"Use the comments section in Odo! Include pertinent details in comments on both phone and email tickets. This can save huge amounts of time sifting through emails for details. Similarly in phone tickets, with the added bonus that others looking at them can see what is going on in the interaction.",
		"Title your Jing/Snagit videos with what they pertain to, especially the ones that have generic solutions in them. Reusing these videos can save lots of time."	,
		"Before launching into a solution, it can save a lot of trouble later on in the conversation if you first check with the client to make sure you're understanding the issue. Example: 'So let me make sure I'm getting this right - you would like to send them a link with their previous answers prepopulated? Am I missing anything?'",
		"If a problem seems very complex, simplify. You don't always need the details they provide. Ask the client what their end goal is as a way to see the whole picture. E.g., 'In a perfect situation, what do you want to happen for your participants?'",
		"As a way to keep things organized on your screen, try opening a whole new window when you take a call instead of just a tab. This will keep things you look up and search for with that particular ticket grouped together, instead of having to sort through a million open tabs in one Chrome window.",
		"Use folders in Gmail, especially if you're working on projects or other non-support items. In addition, if you know there are certain weekly emails you never read, use a filter to automatically mark them as read.",
		"Use the Gmail extension. This allows you see when an email comes in while on other pages, and you can even mark as read from other pages.",
		"Using a combination of Marking as Read, automatic filters, and folder sorting has reduced the number of internal emails I have to read to about 10/day. Try one or all of these - you won't regret it.",
		"Don't be afraid to close Google Chat and Gmail, or at least have them in a different window behind what you're focusing on. They can be huge time wasters if you're not careful.",
		"If there are tickets sitting in your inbox for a while, rename them so that you don't have to waste time later sifting through them. E.g. 'Pulse - Reminder Emails for Susan Smith'",
		"When you initially read the email, tag a ticket topic. Doing this later requires you having to go back and reread the thread, whereas if you do it initially, it will save you time.",
		"Use notes on your computer to copy important information such as the Survey ID or other useful information as you work. It will make this information more readily accessible when you file a help desk ticket, pulse, etc.",
		"For one day, track which pages you use the most. At the end of the day, make bookmarks for each page that you used often (e.g. Jira search, playbook, help desk survey)",
		"Create bookmarks for all of your different data center log ins or additional accounts you might have (CSAT, admin accounts, etc)",
		"Take advantage of the notes section on the User Move ticket. Taking notes when you're creating the ticket will make it far easier and quicker reach back to the client in a few days. (E.g., Odo ticket URL, usernames, branded login page, etc.)",
		"When in doubt, make a copy of a client's survey right away. This will allow you to customize your troubleshooting and cut directly to the problem (removing unnecessary logic, blocks, etc.)",
		"Be sure to test on all data centers, as this information is commonly included in a pulse if you're needing to file one. Having these logins readily accessible via bookmarks is helpful, too.",
		"When you're troubleshooting, move the block of the survey you're working on to the top of the survey flow, so you don't have to click through the entire survey when testing.",
		"If you're troubleshooting in a long block, add skip logic to the question before the one you need to test out.",
		"Want to answer those calls faster? Have your headset ring so that you don't have to watch the phone or Calltrics. Check out instructions here: http://screencast.com/t/BAyKzUDip4i",
		"Stay on top of your pulses by checking the status of the bug that it's linked to toward the bottom of the ticket. Here you will see the most recent comments about the bug from the engineering team. ",
		"Refresh your troubleshooting by reading this awesome piece by one of our rockstar Res Team members, Greg: http://odo.corp.qualtrics.com/wiki/index.php/How_to_Troubleshoot",
		"As soon as you hear the words, 'error message', ask the client to grab you a screenshot. Screenshots are crucial for accurately reproducing and for filing pulses. Same thing with anything browser related - always ask for browser type and version number. Never hurts to have and can save you waiting time if you ask right away.",
		"Download the Survey Toolbox, developed by John Morrell. Do it. Right now.",
		"Check out this google doc to download the most useful Chrome extensions, as suggested by current and past Quni members: https://docs.google.com/spreadsheets/d/1myTR4as5lwt3bzfH-Q54dl160skMd-Pe9Prj_vOQLxA/edit#gid=0&vpid=A1",
		"For a quicker login, use s.qualtrics.com.",
		"If you are using Chrome you can go settings > On Startup > Open a specific page or set of pages to have chrome load the 8 tabs I always want to have open.",
		"For troubleshooting, downloading a survey translation is a good way to get a list of all question and answer choice ID's, particularly for things like Drill downs.",
		"Here's a cool tip that I learned that will help you when you are out of town, and will help your clients out while you're gone. If you want people to have access to your Post-Resolution emails while you're gone, create a filter in your Gmail account to automatically forward those emails to a member on your team who has agreed to help, turning it on and off on either side of your break. To do this, in the search bar of Gmail, click the light gray down arrow and next to Subject, paste in 'Post-Resolution Email: ', then pick 'Create filter with this search >>'. There's an option to forward the emails to an address that you'll add to a list.",
		"Don't be afraid to mute your emails, especially for long threads that can be distracting. You can find this option under 'More' in the thread itself."
	];
	var currentMessage;
	var lastWeeksMessage;

	function toggleMessages(refresh) {
		chrome.storage.sync.get({
			cm: 0
		}, function(items) {
			currentMessage = items.cm;
			if ((currentMessage == null) || (refresh)) {
				var max = messages.length;
				var rand = Math.floor(Math.random() * max) + 0
				currentMessage = rand;
				chrome.storage.sync.set({
					cm: currentMessage,
					lwm: lastWeeksMessage,
					uc: 0,
					ucSetDate: new Date()
				});
			} else {
			}
			replaceCenterContent(currentMessage);
		});
	}
	$(".SectionTabsList").on("click", "#MessagesTab", function () {
		toggleMessages(false);
	});

	function replaceCenterContent(id) {
		document.getElementById('BodyContent').innerHTML = "<div id='TipOuter'><div id='TipHeader'></div><div id='TipContent'></div><div id='NewTipContainer'><button id='AddToSnippets' class='btn'>Add tip to my Snippets</button><button class='btn' id='NewTip'>Give me a new tip</button><div id='TipList'></div></div><div style='margin-top: 50px; display:inline-block;' id='TipSurvey'></div></div>";
		document.getElementById('TipContent').innerHTML = messages[id];
		document.getElementById('TipHeader').innerHTML = "To be more productive this week...";
		document.getElementById('TipList').innerHTML = "To see the whole list, <a href='http://odo.corp.qualtrics.com/wiki/index.php/Quni#Quni_Culture' target='_blank'>click here</a>.";
		document.getElementById('TipSurvey').innerHTML = "<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>Was this Helpful?      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>     Suggest a New Tip</a>";
		currentMessageID = id;
		chrome.storage.sync.set({
			ucSetDate: new Date().toString()
		});
	}
	$("#BodyContent").on("click", "#NewTip", function () {
		toggleMessages(true);
	});
	function addFindMeButton() {
		$("#RightMenuColumn").append("<div id='FindMeButtonContainer' style='text-align: right;'><button id='FindMeButton'>Find Myself in the Report</button></div>");
	}
	$("body").on("click", "#AddToSnippets", function () {
		addNewSnippet(messages[currentMessageID]);
	});
	var currentMessageID;
	function addNewSnippet(snippet) {
	    var data = new FormData();
	    data.append('Description', snippet);

	    jQuery.ajax({
	        url: 'http://odo.corp.qualtrics.com/?a=Snippets&b=SnippetsEditor&addSnippet=true&week=ThisWeek&eid=MATTHEWB&date=2016-03-14&Description=test',
	        data: data,
	        cache: false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
	            alert("Added to Snippets");
	        }
	    });
	}


/******************************************************************/
/***************     Adding Additional Buttons     ****************/
/******************************************************************/


/*------ Add Clinic Button ------*/

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

/*------ Minify General Ticket Button ------*/

function minimizeTicketButton() {
	var btnInner = $('body > div.SearchBar > div.SectionButtonsContainer > a:nth-child(5) > span:nth-child(2)');
	btnInner.remove();
	var btn = $('body > div.SearchBar > div.SectionButtonsContainer > a:nth-child(5)');
	btn.parent().prepend(btn);
}



/*------------ Adding a bit of text when logging into accounts -------------*/

function addResTeamBit() {
	var textarea = document.querySelectorAll('#EmergencyLoginForm > textarea')[0];
	textarea.innerHTML = loginText;
}

/*------------- Adding reactions to Odo Squawkbox Posts --------------*/
var hiddenPostsArray = [];
function addReactionButtons() {
	var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/posts");

	// get the counts for every post
	var posts = document.getElementsByClassName('DiscussionControls');
	if (!postElements) {
		var postElements = {};
	}
	var firebasePosts = {};
	firebaseRef.once("value", function(snapshot) {
		firebasePosts = snapshot.val();
		for (var i=0; i<posts.length; i++) {
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
				}
			}
			if (firebasePosts[id]) {
				for (prop in firebasePosts[id]) {
					postElements[id][prop] = firebasePosts[id][prop];
				}
			}
		}
		// add the actual buttons
		addButtons(postElements);
		chrome.storage.sync.get({
			hiddenPostsArray: ""
		}, function(items) {
			hiddenPostsArray = JSON.parse(items.hiddenPostsArray) || [];
			for (var i=0; i<hiddenPostsArray.length; i++) {
				var id = hiddenPostsArray[i];
				var numericId = hiddenPostsArray[i].split("-")[1];
				if (postElements.hasOwnProperty(numericId)) {
					document.getElementById(id).className += " hidden";
				}
			}
		});
	});

	//define actions for button clicks
	$('.DiscussionControls').on('click', '.taco', function () {
		var forReal = confirm("Are you sure you want to hide this spam?");
		if (forReal) {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			var containerID = "DiscussionContainer-" + discussionID;
			$("#" + containerID).addClass("hidden");
			//trigger something to firebase
			postElements[discussionID].tacoCount += 1;
			var obj = {
					id: discussionID,
					tacoCount: postElements[discussionID].tacoCount,
				}
			firebaseRef.child(discussionID).update(obj);
			//trigger something to your personal storage
			hiddenPostsArray.push(containerID);
			chrome.storage.sync.set({
				hiddenPostsArray: JSON.stringify(hiddenPostsArray)
			});
			//trigger something to view
			var selector = "#" + parentID + " div .taco .reaction_count"
			document.querySelector(selector).innerHTML = obj.tacoCount;
		}
	});

	$('.DiscussionControls').on('click', '.scrappy', function () {
		if( $(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].scrappyCount += 1;
			var obj = {
					id: discussionID,
					scrappyCount: postElements[discussionID].scrappyCount,
				}
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .scrappy .reaction_count"
			document.querySelector(selector).innerHTML = obj.scrappyCount;
		}
	});
	$('.DiscussionControls').on('click', '.allIn', function () {
		if( $(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].allInCount += 1;
			var obj = {
					id: discussionID,
					allInCount: postElements[discussionID].allInCount,
				}
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .allIn .reaction_count"
			document.querySelector(selector).innerHTML = obj.allInCount;
		}
	});
	$('.DiscussionControls').on('click', '.obsessed', function () {
		if( $(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].obsessedCount += 1;
			var obj = {
					id: discussionID,
					obsessedCount: postElements[discussionID].obsessedCount,
				}
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .obsessed .reaction_count"
			document.querySelector(selector).innerHTML = obj.obsessedCount;
		}
	});
	$('.DiscussionControls').on('click', '.oneTeam', function () {
		if( $(this).hasClass("noMoreClicky")) {
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
					oneTeamCount: postElements[discussionID].oneTeamCount,
				}
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .oneTeam .reaction_count"
			document.querySelector(selector).innerHTML = obj.oneTeamCount;
		}

	});
	$('.DiscussionControls').on('click', '.transparent', function () {
		if( $(this).hasClass("noMoreClicky")) {
			alert("Hey... stop spamming");
		} else {
			var parentID = this.parentElement.parentElement.id;
			discussionID = parentID.split('-')[1];
			$(this).addClass("nonOpaque");
			$(this).addClass("noMoreClicky");
			//trigger something to firebase
			postElements[discussionID].transparentCount += 1;
			var obj = {
					id: discussionID,
					transparentCount: postElements[discussionID].transparentCount,
				}
			firebaseRef.child(discussionID).update(obj);

			//trigger something to your personal storage

			//trigger something to view
			var selector = "#" + parentID + " div .transparent .reaction_count"
			document.querySelector(selector).innerHTML = obj.transparentCount;
		}

	});
}
var postIdsWithButtons = [];
function addButtons(postElements) {
	for (post in postElements) {
		if (postIdsWithButtons.indexOf(post) > -1) {
		} else {
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
				var spamID = "DiscussionCommentSection-" + post;
				document.getElementById(spamID).style.display = "none";

				var spamID = "DiscussionSummary-" + post;
				document.getElementById(spamID).style.display = "block";

				var spamID = "DiscussionLikesSection-" + post;
				document.getElementById(spamID).style.display = "none";

				var spamID = "DiscussionText-" + post;
				document.getElementById(spamID).style.display = "none";

				var spamID = "DiscussionContainer-" + post;
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
			$(id).append(	"<div>" +
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
	if ((urlParams["eid"] != null) && (urlParams["eid"] != "") && (urlParams["a"] === "MyProfile")) {
		getEID();
	}
	changeTitle();
	changeFavicon(favicon);
	//APPLY A THEME
	//ADD YOUR TABS
	if ((urlParams["a"] == "Home" || urlParams['TopNav'] != "Tickets") || (urlParams["a"] == 'MyProfile') || (urlParams["a"] == null && urlParams['TopNav'] != "Tickets")) {
		if (PlaybookTabOn) {
			customTabs.addPlaybook();
		}
	}
	if (HelpDeskTabOn) {
		customTabs.addHelpDesk();
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
	if ((urlParams["a"] == "QUniReports") && (urlParams["TopNav"] == "Reports")) {
		reportsObject.addFindMeButton();
	}
	//PULSE MODIFICATIONS
	if (document.getElementById('EmergencyLoginCheckbox')) {
		var loginCheckbox = document.getElementById('EmergencyLoginCheckbox');
		window.addEventListener("click", addResTeamBit);
	}
	//CUSTOM STYLESHEETS
	if(minimalPostsOn) {
		customStylesheets.shrinkPosts();
	}
	if(calmAlertsOn) {
		customStylesheets.greyAlerts();
	}
	if (urlParams["b"] == "RSUserAccountAccess") {
		var labelContainer = $('#BodyContent > div:nth-child(7)');
		labelContainer.append("<label style='font-size: 3em; cursor:pointer;' for='EmergencyLoginCheckbox'>CLICK ME TO LOGIN </label>" );
	}
	if ((hidePosts) && (urlParams["a"] == null) && (urlParams["b"] == null)) {
		hideSquawkPosts();
	}
	if ((urlParams["a"] == null) && (urlParams["b"] == null)) {
		var squawkboxChecker = window.setInterval(function() {
			console.log("checking");
			if (document.getElementsByClassName('Discussion')) {
				console.log("Found!")
				addReactionButtons();
				document.getElementById('DiscussionLoadMoreBar').addEventListener("click", function() {
					window.setTimeout(function() {
						addReactionButtons();
					}, 2400);
				})
				clearInterval(squawkboxChecker);
			}
		}, 100);

	}
	//SPF CHECKER
	if (urlParams["b"] == "RSBrandProfile"){
		window.setTimeout(OdoSPFCheck, 100);
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
function OdoSPFCheck()
{
    // Create  Button

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Check SPF";

    // Append to Valid Email Domain
    document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td.BrandSettingsFieldLabelLight").appendChild(button);

    // Add button event handler
    button.addEventListener ("click", function() 
    {
     	//Store email domains in array
     	var DomainArray = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > textarea").value.split(',');

     	//Remove the *, if present
    	var index = DomainArray.indexOf('*');

     	if (index > -1) 
        {
        	DomainArray.splice(index, 1);
        }

        //Remove spaces
        for (i=0; i< DomainArray.length; i++)
        {
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
    	for(i=0; i < DomainArray.length; i++)
        {
    		SPFCheck(DomainArray[i], i, function(Domain, DomainStatus)
            {

                var row = spftable.insertRow(-1);
                var Domain_t = row.insertCell(0);
                var SPF_t = row.insertCell(1);
                var MX_t = row.insertCell(2);

                Domain_t.innerHTML = Domain;
                SPF_t.innerHTML = DomainStatus;
                MX_t.innerHTML = "<a target='_blank' href='http://mxtoolbox.com/SuperTool.aspx?action=spf%3a" + Domain + "&run=toolpage'>Result for " + Domain + "</a>";           
            });
        }

        //Add event listener for '?' info button
        var info = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(1)");
        info.addEventListener("click", function() 
        {
            alert("This SPF Checker uses the Qualtrics SPF Check, which looks for _spf.qualtrics.com on the SPF Record. Uncommon but functional setups such _spf.qemailserver.com or our IP range (162.247.216.0/22) will record as 'No', but can be checked on MXToolbox.");
        });

    });

    // SPF Checker Function
    var data = null;

    function SPFCheck(domain, index, callback)
    {
        var xhr = new XMLHttpRequest();
        var URL = "http://itwiki.corp.qualtrics.com:4040/api/spf-checker?domain=" + domain;
        var DomainStatus = null;

        
        xhr.addEventListener("readystatechange", function ()
        	{
       			 if (this.readyState === 4)
        		{
                    if( this.responseText == '{"hasQualtricsSpf":true}') 
                    {
                        DomainStatus = '<font color="green">Yes</font>';
                    }
                    else if(this.responseText == '{"hasQualtricsSpf":false}')
                    {
                        DomainStatus = '<font color="red">No</font>';
                    }
                    else {
                        DomainStatus = '<font color="yellow">Error</font>';
                    }
                    callback(domain, DomainStatus);
       			}
        	});
        xhr.open("GET", URL);
        xhr.send(data);
     }
}



