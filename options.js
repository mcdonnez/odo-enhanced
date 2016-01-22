function save_options() {
	var createEmail = document.getElementById('EmailButton').checked;
	var createClinic = document.getElementById('ClinicButton').checked;
	var clinicStartTime = document.getElementById('StartClinicTime').value;
	var clinicEndTime = document.getElementById('EndClinicTime').value;
	var clinicDay = document.getElementById('ClinicDayNumber').value;
	var minifyTicket = document.getElementById('MiniTicketButton').checked;
	var helpDesk = document.getElementById('HelpDesk').checked;
	var design = document.getElementById('Design').checked;
	var easterEggs = document.getElementById('EasterEggs').checked;
	var playbook = document.getElementById('Playbook').checked;
	var summitTrigger = document.getElementById('SummitTrigger').checked;
	var snippets = document.getElementById('Snippets').checked;
	var snippetsClosed = document.getElementById('CloseSnippets').checked;
	var snippetDay = document.getElementById('ColorSnippets').value;
	var snippetColor = document.getElementById('SnippetColor').value;
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
	chrome.storage.sync.set({
		em: createEmail,
		cl: createClinic,
		mt: minifyTicket,
		sct: clinicStartTime,
		ect: clinicEndTime,
		cdn: clinicDay,
		hd: helpDesk,
		de: design,
		ee: easterEggs,
		pb: playbook,
		st: summitTrigger,
		tm: theme,
		s: snippets,
		sc: snippetsClosed,
		sd: snippetDay,
		sl: snippetColor,
		eid: employeeID,
		gp: gradProgress,
		tg: ticketGoal,
		td: ticketDate,
		tips: tips,
		ename: myName,
		panels: panels,
		calmAlerts: alerts,
		minPosts: smallPosts,
		ltxt: loginText
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
		cl: "",
		sct: "",
		ect: "",
		cdn: "",
		mt: "",
		hd: true,
		de: false,
		ee: "",
		pb: "",
		s: true,
		st: true,
		sc: "",
		sd: 4,
		sl: "#04b26e",
		eid: "",
		gp: true,
		tm: null,
		tg: 3700,
		td: "2016-12-12",
		tips: false,
		ename: "",
		panels: false,
		calmAlerts: true,
		minPosts: true,
		ltxt: ""
	}, function(items) {
		console.log(items.gp);
		document.getElementById('EmailButton').checked = items.em;
		document.getElementById('ClinicButton').checked = items.cl;
		document.getElementById('StartClinicTime').value = items.sct;
		document.getElementById('EndClinicTime').value = items.ect;
		document.getElementById('ClinicDayNumber').value = items.cdn;
		document.getElementById('MiniTicketButton').checked = items.mt;
		document.getElementById('HelpDesk').checked = items.hd;
		document.getElementById('Design').checked = items.de;
		document.getElementById('EasterEggs').checked = items.ee;
		document.getElementById('Playbook').checked = items.pb;
		document.getElementById('SummitTrigger').checked = items.st;
		document.getElementById('Snippets').checked = items.s;
		document.getElementById('CloseSnippets').checked = items.sc;
		document.getElementById('ColorSnippets').value = items.sd;
		document.getElementById('SnippetColor').value = items.sl;
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
		modifiers.makeOpaque();

	});
}
//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
	save_options);
document.getElementById('Wrapper').addEventListener('change',
	save_options);
document.getElementById('Snippets').addEventListener('change', modifiers.makeOpaque);
document.getElementById('ClinicButton').addEventListener('change', modifiers.makeOpaque);
document.getElementById("FeedbackLink").addEventListener("click", modifiers.loadFeedback);
document.getElementById("Exit").addEventListener("click", modifiers.closeFeedback);
document.getElementById("Overlay").addEventListener("click", modifiers.closeFeedback);
var modifiers = {
	makeOpaque: function() {
		var snipOps = document.getElementsByClassName('SubOption')[0];
		var snipToggle = document.getElementById('Snippets').checked;
		if (snipToggle) {
			snipOps.style.display = "block";
		} else {
			snipOps.style.display = "none";
		}
		var clinOps = document.getElementById('ClinicOptions');
		var clinToggle = document.getElementById('ClinicButton').checked;
		if (clinToggle) {
			clinOps.style.display = "block";
		} else {
			clinOps.style.display = "none";
		}
	},
	loadFeedback: function () {
		document.getElementById('Overlay').style.display = "block";
		document.getElementById('Iframe').src='https://survey.qualtrics.com/SE/?SID=SV_3OT1mMS5wBagn8p';
	},
	closeFeedback: function () {
		document.getElementById('Overlay').style.display = "none";
		document.getElementById('Iframe').src='';
	}
}


