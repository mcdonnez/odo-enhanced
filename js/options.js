function init() {
	addReferredExtensions();
	restoreOptions();
	makeOpaque();
	$('#Wrapper').change(function() {
		saveOptions();
	});
	$('#ClinicButton').change(function() {
		makeOpaque();
	});
	$('#ClinicFeedbackButton').change(function() {
		makeOpaque();
	});
	$('#EmailButton').change(function() {
		makeOpaque();
	});
	$('#GradProgress').change(function() {
		makeOpaque();
	});
	$("#FeedbackLink").click(function() {
		toggleFeedback();
	});
	$("#Exit").click(function() {
		toggleFeedback();
	});
	$("#Overlay").click(function() {
		toggleFeedback();
	});
}

function addReferredExtensions() {
	var extensions = [{
		name: "Survey Toolbox",
		url: "https://chrome.google.com/webstore/detail/survey-toolbox/oofmmoemiapmnpodolnmnonjlhcdndlf?authuser=0",
		description: "Easily navigate the survey preview, show IDs, and even run a test on the survey to find custom elements with one click"
	},
	{
		name: "XM Internal",
		url: "https://chrome.google.com/webstore/detail/xm-internal/fogncndjdaghnnlnohnilkfniknbafne",
		description: "Easily retrieve the IDs you need within the Qualtrics products. Adds the IDs in the dropdowns across XM."
	},
	{
		name: "Vocalize Helper",
		url: "https://chrome.google.com/webstore/detail/voc-helper/dljhmklehebdjekjjopdejoncechpmca",
		description: "Gives you great features in Vocalize to better offer support"
	}];

	for (var i = 0; i < extensions.length; i++) {
		$('#ReferredExtensions').append(
			'<div class="referred-extension">' +
				'<div class="referred-extension-headline"><span class="referred-extension-title">' + extensions[i].name + '</span><a class="referred-extension-link" href="' + extensions[i].url + '" target="_blank">Install</a></div>' +
				'<div class="referred-extension-description">' + extensions[i].description + '</div>' +
			'</div>'
		)
	}
}

function saveOptions() {
	chrome.storage.sync.set({
		em: $('#EmailButton').prop('checked'),
		mem: $('#MiniEmailButton').prop('checked'),
		cl: $('#ClinicButton').prop('checked'),
		clf: $('#ClinicFeedbackButton').prop('checked'),
		mt: $('#MiniTicketButton').prop('checked'),
		mtt: $('#MiniTakeTicket').prop('checked'),
		msp: $('#MiniSupportPhone').prop('checked'),
		mci: $('#MiniClientIssue').prop('checked'),
		sct: $('#StartClinicTime').val(),
		ect: $('#EndClinicTime').val(),
		cdn: $('#ClinicDayNumber').val(),
		de: $('#Design').prop('checked'),
		ee: $('#EasterEggs').prop('checked'),
		pb: $('#Playbook').prop('checked'),
		tm: $('#Theme').val(),
		eid: $('#EmployeeID').val(),
		gp: $('#GradProgress').prop('checked'),
		tg: $('#TicketGoal').val(),
		td: $('#TicketDate').val(),
		tips: $('#Tips').prop('checked'),
		ename: $('#Name').val(),
		panels: $('#Panels').prop('checked'),
		calmAlerts: $('#greyAlerts').prop('checked'),
		minPosts: $('#shrinkPosts').prop('checked'),
		ltxt: $('#LoginText').val(),
		hidePosts: $('#hideSquawkPosts').prop('checked'),
		spamCount: $('#SpamCount').val(),
		blockSpam: $('#BlockSpam').prop('checked'),
		omniSearch: $('#OmniSearch').prop('checked'),
		showQuniTickets: $('#QuniTickets').prop('checked'),
		showSIQueue: $('#SIQueue').prop('checked'),
		showTAQueue: $('#TAQueue').prop('checked'),
		show360Queue: $('#360Queue').prop('checked'),
		showEEQueue: $('#EEQueue').prop('checked'),
		showThemesQueue: $('#ThemesQueue').prop('checked'),
		showVocQueue: $('#VocQueue').prop('checked'),
		showStatQueue: $('#StatQueue').prop('checked'),
		showIntQueue: $('#IntQueue').prop('checked')
	}, function() {
		// Update status to let the user know options were saved.
		$('#status').html('Options updated.');
		setTimeout(function() {
			$('#status').html('');
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
	chrome.storage.sync.get({
		em: "",
		mem: "",
		cl: "",
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
		showQuniTickets: false,
		showSIQueue: false,
		showTAQueue: false,
		show360Queue: false,
		showEEQueue: false,
		showThemesQueue: false,
		showVocQueue: false,
		showStatQueue: false,
		showIntQueue: false,
		likeAndCloseBLC: true
	}, function(items) {
		$('#EmailButton').prop('checked', items.em);
		$('#ClinicFeedbackButton').prop('checked', items.clf);
		$('#MiniEmailButton').prop('checked', items.mem);
		$('#ClinicButton').prop('checked', items.cl);
		$('#StartClinicTime').val(items.sct);
		$('#EndClinicTime').val(items.ect);
		$('#ClinicDayNumber').val(items.cdn);
		$('#MiniTicketButton').prop('checked', items.mt);
		$('#MiniTakeTicket').prop('checked', items.mtt);
		$('#MiniSupportPhone').prop('checked', items.msp);
		$('#MiniClientIssue').prop('checked', items.mci);
		$('#Design').prop('checked', items.de);
		$('#EasterEggs').prop('checked', items.ee);
		$('#Playbook').prop('checked', items.pb);
		$('#EmployeeID').val(items.eid);
		$('#GradProgress').prop('checked', items.gp);
		$('#Theme').val(items.tm);
		$('#TicketGoal').val(items.tg);
		$('#TicketDate').val(items.td);
		$('#Tips').prop('checked', items.tips);
		$('#Name').val(items.ename);
		$('#LoginText').val(items.ltxt);
		$('#Panels').prop('checked', items.panels);
		$('#greyAlerts').prop('checked', items.calmAlerts);
		$('#shrinkPosts').prop('checked', items.minPosts);
		$('#hideSquawkPosts').prop('checked', items.hidePosts);
		$('#SpamCount').val(items.spamCount);
		$('#BlockSpam').prop('checked', items.blockSpam);
		$('#OmniSearch').prop('checked', items.omniSearch);
		//Quni Ticket Breakdown
		$('#QuniTickets').prop('checked', items.showQuniTickets);
		$('#SIQueue').prop('checked', items.showSIQueue);
		$('#TAQueue').prop('checked', items.showTAQueue);
		$('#360Queue').prop('checked', items.show360Queue);
		$('#EEQueue').prop('checked', items.showEEQueue);
		$('#ThemesQueue').prop('checked', items.showThemesQueue);
		$('#VocQueue').prop('checked', items.showVocQueue);
		$('#StatQueue').prop('checked', items.showStatQueue);
		$('#IntQueue').prop('checked', items.showIntQueue);
		$('#LikeAndCloseBLC').prop('checked', items.likeAndCloseBLC);
	});
}

function makeOpaque() {
	if ($('#ClinicButton').prop('checked')) {
		$('#ClinicOptions').show();
	} else {
		$('#ClinicOptions').hide();
	}
	if ($('#EmailButton').prop('checked')) {
		$('#EmailButtonOptions').show();
	} else {
		$('#EmailButtonOptions').hide();
	}
	if ($('#ClinicFeedbackButton').prop('checked')) {
		$('#ClinicFeedbackButtonOptions').show();
	} else {
		$('#ClinicFeedbackButtonOptions').hide();
	}
	if ($('#GradProgress').prop('checked')) {
		$('#ProgressOptions').show();
	} else {
		$('#ProgressOptions').hide();
	}
}

function toggleFeedback() {
	if ($('#Overlay').is(":visible")) {
		$('#Overlay').hide();
		$('#Iframe').attr('src', '');
	} else {
		$('#Overlay').show();
		$('#Iframe').attr('src', 'https://survey.qualtrics.com/SE/?SID=SV_3OT1mMS5wBagn8p');
	}
}

$(document).ready(function() {
	init();
});

