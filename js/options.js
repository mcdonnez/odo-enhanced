function init() {
	restoreOptions(function() {
		addReferredExtensions();
		makeOpaque();
	});
	$('#Wrapper').change(function() {
		saveOptions();
	});
	$('#ClinicFeedbackButton').change(function() {
		makeOpaque();
	});
	$('#EmailButton').change(function() {
		makeOpaque();
	});
	$('#ClinicButton').change(function() {
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
		emailButton: $('#EmailButton').prop('checked'),
		miniEmailBtn: $('#MiniEmailButton').prop('checked'),
		miniClinicBtn: $('#MiniClinicButton').prop('checked'),
		clinicButton: $('#ClinicButton').prop('checked'),
		clinicFeedbackBtn: $('#ClinicFeedbackButton').prop('checked'),
		miniTicketButton: $('#MiniTicketButton').prop('checked'),
		miniTakeTicketBtn: $('#MiniTakeTicket').prop('checked'),
		miniSupportPhoneBtn: $('#MiniSupportPhone').prop('checked'),
		miniClientIssueBtn: $('#MiniClientIssue').prop('checked'),
		designTab: $('#Design').prop('checked'),
		playbookTab: $('#Playbook').prop('checked'),
		odoTheme: $('#Theme').val(),
		tips: $('#Tips').prop('checked'),
		ename: $('#Name').val(),
		panels: $('#Panels').prop('checked'),
		calmAlerts: $('#greyAlerts').prop('checked'),
		minPosts: $('#shrinkPosts').prop('checked'),
		loginText: $('#LoginText').val(),
		hidePosts: $('#hideSquawkPosts').prop('checked'),
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
		showIntQueue: $('#IntQueue').prop('checked'),
		likeAndCloseBLC: $('#LikeAndCloseBLC').prop('checked'),
		newBarnaby: $('#NewBarnaby').prop('checked')
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
function restoreOptions(cb) {
	chrome.storage.sync.get({
		emailButton: "",
		miniEmailBtn: false,
		miniClinicBtn: false,
		clinicButton: "",
		clinicFeedbackBtn: "",
		miniTicketButton: "",
		miniTakeTicketBtn: "",
		miniSupportPhoneBtn: "",
		miniClientIssueBtn: "",
		designTab: false,
		playbookTab: "",
		odoTheme: null,
		tips: true,
		ename: "",
		panels: false,
		calmAlerts: true,
		minPosts: true,
		loginText: "",
		hidePosts: false,
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
		likeAndCloseBLC: true,
		newBarnaby: true
	}, function(items) {
		$('#EmailButton').prop('checked', items.emailButton);
		$('#ClinicFeedbackButton').prop('checked', items.clinicFeedbackBtn);
		$('#MiniEmailButton').prop('checked', items.miniEmailBtn);
		$('#MiniClinicButton').prop('checked', items.miniClinicBtn);
		$('#ClinicButton').prop('checked', items.clinicButton);
		$('#MiniTicketButton').prop('checked', items.miniTicketButton);
		$('#MiniTakeTicket').prop('checked', items.miniTakeTicketBtn);
		$('#MiniSupportPhone').prop('checked', items.miniSupportPhoneBtn);
		$('#MiniClientIssue').prop('checked', items.miniClientIssueBtn);
		$('#Design').prop('checked', items.designTab);
		$('#EasterEggs').prop('checked', items.ee);
		$('#Playbook').prop('checked', items.playbookTab);
		$('#Theme').val(items.odoTheme);
		$('#Tips').prop('checked', items.tips);
		$('#Name').val(items.ename);
		$('#LoginText').val(items.loginText);
		$('#Panels').prop('checked', items.panels);
		$('#greyAlerts').prop('checked', items.calmAlerts);
		$('#shrinkPosts').prop('checked', items.minPosts);
		$('#hideSquawkPosts').prop('checked', items.hidePosts);
		$('#SpamCount').val(items.spamCount);
		$('#BlockSpam').prop('checked', items.blockSpam);
		$('#OmniSearch').prop('checked', items.omniSearch);
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
		$('#NewBarnaby').prop('checked', items.newBarnaby);
		cb();
	});
}

function makeOpaque() {
	if ($('#EmailButton').prop('checked')) {
		$('#MiniEmailLabel').show();
	} else {
		$('#MiniEmailLabel').hide();
	}
	if ($('#ClinicButton').prop('checked')) {
		$('#MiniClinicLabel').show();
	} else {
		$('#MiniClinicLabel').hide();
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

