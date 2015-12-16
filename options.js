function loadFeedback() {
	document.getElementById('Overlay').style.display = "block";
	document.getElementById('Iframe').src='https://survey.qualtrics.com/SE/?SID=SV_3OT1mMS5wBagn8p';
}
function closeFeedback() {
	document.getElementById('Overlay').style.display = "none";
	document.getElementById('Iframe').src='';
}
document.getElementById("FeedbackLink").addEventListener("click", loadFeedback);
document.getElementById("Exit").addEventListener("click", closeFeedback);
document.getElementById("Overlay").addEventListener("click", closeFeedback);

function save_options() {
	var createEmail = document.getElementById('EmailButton').checked;
	var createClinic = document.getElementById('ClinicButton').checked;
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
	chrome.storage.sync.set({
		em: createEmail,
		cl: createClinic,
		mt: minifyTicket,
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
		td: ticketDate
	}, function() {
		// Update status to let user know options were saved.
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
		td: "2016-12-12"
	}, function(items) {
		document.getElementById('EmailButton').checked = items.em;
		document.getElementById('ClinicButton').checked = items.cl;
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
		makeOpaque();

	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
	save_options);
document.getElementById('Wrapper').addEventListener('change',
	save_options);

document.getElementById('Snippets').addEventListener('change', makeOpaque);

function makeOpaque() {
	var snipOps = document.getElementsByClassName('SubOption')[0];
	var snipToggle = document.getElementById('Snippets').checked;
	if (snipToggle) {
		snipOps.style.opacity = "1";
	} else {
		snipOps.style.opacity = ".2";
	}
}

