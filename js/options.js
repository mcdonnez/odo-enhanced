function save_options() {
	var createEmail = document.getElementById('EmailButton').checked;
	//My clinic button change
	var createClinicFeedback = document.getElementById('ClinicFeedbackButton').checked;
	var miniCreateEmail = document.getElementById('MiniEmailButton').checked;
	var createClinic = document.getElementById('ClinicButton').checked;
	var clinicStartTime = document.getElementById('StartClinicTime').value;
	var clinicEndTime = document.getElementById('EndClinicTime').value;
	var clinicDay = document.getElementById('ClinicDayNumber').value;
	var minifyTicket = document.getElementById('MiniTicketButton').checked;
	var miniTakeTicket = document.getElementById('MiniTakeTicket').checked;
	var miniSupportPhone = document.getElementById('MiniSupportPhone').checked;
	var miniClientIssue = document.getElementById('MiniClientIssue').checked;
	var design = document.getElementById('Design').checked;
	var easterEggs = document.getElementById('EasterEggs').checked;
	var playbook = document.getElementById('Playbook').checked;
	var ticketGoal = document.getElementById('TicketGoal').value;
	var ticketDate = document.getElementById('TicketDate').value;
	var goalDate = new Date(ticketDate);
	var employeeID = document.getElementById('EmployeeID').value;
	var gradProgress = document.getElementById('GradProgress').checked;
	var theme = document.getElementById('Theme').value;
	var tips = document.getElementById('Tips').checked;
	var myName = document.getElementById('Name').value;
	var loginText = document.getElementById('LoginText').value;
	var panels = document.getElementById('Panels').checked;
	var alerts = document.getElementById('greyAlerts').checked;
	var smallPosts = document.getElementById('shrinkPosts').checked;
	var hideSquawkPosts = document.getElementById('hideSquawkPosts').checked;
	var spamCount = document.getElementById('SpamCount').value;
	var blockSpam = document.getElementById('BlockSpam').checked;
	var omniSearch = document.getElementById('OmniSearch').checked;
	//Quni Ticket Breakdown
	var quniTickets = document.getElementById('QuniTickets').checked;
	var showSIQueue = document.getElementById('SIQueue').checked;
	var showTAQueue = document.getElementById('TAQueue').checked;
	var show360Queue = document.getElementById('360Queue').checked;
	var showEEQueue = document.getElementById('EEQueue').checked;
	var showThemesQueue = document.getElementById('ThemesQueue').checked;
	var showVocQueue = document.getElementById('VocQueue').checked;
	var showStatQueue = document.getElementById('StatQueue').checked;
	var showIntQueue = document.getElementById('IntQueue').checked;
	chrome.storage.sync.set({
		em: createEmail,
		mem: miniCreateEmail,
		cl: createClinic,
		//My clinic button change
		clf: createClinicFeedback,
		mt: minifyTicket,
		mtt: miniTakeTicket,
		msp: miniSupportPhone,
		mci: miniClientIssue,
		sct: clinicStartTime,
		ect: clinicEndTime,
		cdn: clinicDay,
		de: design,
		ee: easterEggs,
		pb: playbook,
		tm: theme,
		eid: employeeID,
		gp: gradProgress,
		tg: ticketGoal,
		td: ticketDate,
		tips: tips,
		ename: myName,
		panels: panels,
		calmAlerts: alerts,
		minPosts: smallPosts,
		ltxt: loginText,
		hidePosts: hideSquawkPosts,
		spamCount: spamCount,
		blockSpam: blockSpam,
		omniSearch: omniSearch,
		//Quni Ticket Breakdown
		showQuniTickets: quniTickets,
		showSIQueue: showSIQueue,
		showTAQueue: showTAQueue,
		show360Queue: show360Queue,
		showEEQueue: showEEQueue,
		showThemesQueue: showThemesQueue,
		showVocQueue: showVocQueue,
		showStatQueue: showStatQueue,
		showIntQueue: showIntQueue
	}, function() {
		// Update status to let the user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options updated.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	chrome.storage.sync.get({
		em: "",
		mem: "",
		cl: "",
		//My clinic button change
		clf: "",
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
		showIntQueue: false
	}, function(items) {
		document.getElementById('EmailButton').checked = items.em;
		//My clinic button change
		document.getElementById('ClinicFeedbackButton').checked = items.clf;
		document.getElementById('MiniEmailButton').checked = items.mem;
		document.getElementById('ClinicButton').checked = items.cl;
		document.getElementById('StartClinicTime').value = items.sct;
		document.getElementById('EndClinicTime').value = items.ect;
		document.getElementById('ClinicDayNumber').value = items.cdn;
		document.getElementById('MiniTicketButton').checked = items.mt;
		document.getElementById('MiniTakeTicket').checked = items.mtt;
		document.getElementById('MiniSupportPhone').checked = items.msp;
		document.getElementById('MiniClientIssue').checked = items.mci;
		document.getElementById('Design').checked = items.de;
		document.getElementById('EasterEggs').checked = items.ee;
		document.getElementById('Playbook').checked = items.pb;
		document.getElementById('EmployeeID').value = items.eid;
		document.getElementById('GradProgress').checked = items.gp;
		document.getElementById('Theme').value = items.tm;
		document.getElementById('TicketGoal').value = items.tg;
		document.getElementById('TicketDate').value = items.td;
		document.getElementById('Tips').checked = items.tips;
		document.getElementById('Name').value = items.ename;
		document.getElementById('LoginText').value = items.ltxt;
		document.getElementById('Panels').checked = items.panels;
		document.getElementById('greyAlerts').checked = items.calmAlerts;
		document.getElementById('shrinkPosts').checked = items.minPosts;
		document.getElementById('hideSquawkPosts').checked = items.hidePosts;
		document.getElementById('SpamCount').value = items.spamCount;
		document.getElementById('BlockSpam').checked = items.blockSpam;
		document.getElementById('OmniSearch').checked = items.omniSearch;
		//Quni Ticket Breakdown
		document.getElementById('QuniTickets').checked = items.showQuniTickets;
		document.getElementById('SIQueue').checked = items.showSIQueue;
		document.getElementById('TAQueue').checked = items.showTAQueue;
		document.getElementById('360Queue').checked = items.show360Queue;
		document.getElementById('EEQueue').checked = items.showEEQueue;
		document.getElementById('ThemesQueue').checked = items.showThemesQueue;
		document.getElementById('VocQueue').checked = items.showVocQueue;
		document.getElementById('StatQueue').checked = items.showStatQueue;
		document.getElementById('IntQueue').checked = items.showIntQueue;
		makeOpaque();
	});
}
//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
	save_options);
document.getElementById('Wrapper').addEventListener('change',
	save_options);
document.getElementById('ClinicButton').addEventListener('change', makeOpaque);
//My clinic button change
document.getElementById('ClinicFeedbackButton').addEventListener('change', makeOpaque);
document.getElementById('EmailButton').addEventListener('change', makeOpaque);
document.getElementById('GradProgress').addEventListener('change', makeOpaque);
document.getElementById("FeedbackLink").addEventListener("click", loadFeedback);
document.getElementById("Exit").addEventListener("click", closeFeedback);
document.getElementById("Overlay").addEventListener("click", closeFeedback);

	function makeOpaque() {
		var clinOps = document.getElementById('ClinicOptions');
		var clinToggle = document.getElementById('ClinicButton').checked;
		if (clinToggle) {
			clinOps.style.display = "block";
		} else {
			clinOps.style.display = "none";
		}
		var emailOps = document.getElementById('EmailButtonOptions');
		var emailToggle = document.getElementById('EmailButton').checked;
		if (emailToggle) {
			emailOps.style.display = "block";
		} else {
			emailOps.style.display = "none";
		}
		var clinFeedOps = document.getElementById('ClinicFeedbackButtonOptions');
		var clinFeedToggle = document.getElementById('ClinicFeedbackButton').checked;
		if (clinFeedToggle) {
			clinFeedOps.style.display = "block";
		} else {
			clinFeedOps.style.display = "none";
		}
		var progOps = document.getElementById('ProgressOptions');
		var progToggle = document.getElementById('GradProgress').checked;
		if (progToggle) {
			progOps.style.display = "block";
		} else {
			progOps.style.display = "none";
		}
		
	}
	function loadFeedback() {
		document.getElementById('Overlay').style.display = "block";
		document.getElementById('Iframe').src='https://survey.qualtrics.com/SE/?SID=SV_3OT1mMS5wBagn8p';
	}
	function closeFeedback() {
		document.getElementById('Overlay').style.display = "none";
		document.getElementById('Iframe').src='';
	}



