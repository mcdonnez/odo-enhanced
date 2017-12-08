/* ------------- Built by Zach McDonnell & Matt Bloomfield---------------- */


// store any global variables as properties on the below object
var tmpInfo = {};

function init() {
	tmpInfo.userData = JSON.parse(helpers.retrieveWindowVariables(['userData']).userData);
	tmpInfo.urlParams = helpers.getUrlParams();
	pageHelperService.setFavicon(tmpInfo.urlParams);
	pageHelperService.changeTitle(tmpInfo.urlParams);
	pageHelperService.changeFavicon(favicon);
	helpers.getVars(function(chromeStorageVars) {
		addCustomFeatures(urlParams, chromeStorageVars);
		listeners.create();
		console.log("Success! Odo Enhanced Works!");
	});
}

function addCustomFeatures(urlParams, chromeStorageVars) {
	//squawkbox page
	if (!urlParams.a && !urlParams.b && !urlParams.TopNav) {
		//squawkbox loaded
		var count = 0;
		tmpInfo.squawkboxChecker = window.setInterval(function() {
			if (document.getElementById('DiscussionLoadMoreBar')) {
				if (chromeStorageVars.likeAndCloseBLC) {
					features.likeAndCloseAllBLC();
				}
				clearInterval(tmpInfo.squawkboxChecker);
			}
			count++;
			if (count > 5) {
				clearInterval(tmpInfo.squawkboxChecker);
			}
		}, 500);
		if (chromeStorageVars.PlaybookTabOn) {
			features.tabs.add("Playbook", "1000", "playbookTab", "https://global-ops-toolbox.corp.qualtrics.com/#/playbook", "Playbook", "inPage");
		}
		if (chromeStorageVars.hidePosts) {
			features.toggleSquawkboxPosts();
		}
		if (chromeStorageVars.minimalPostsOn) {
			pageHelperService.customStylesheets.add("squawkPosts");
		}
		features.tabs.add("Extension Options", "2300", "optionsTab", chrome.extension.getURL("../views/options.html"), "Odo Enhanced Options", "inPage");
	}

	// unauthorized user account access page
	if (urlParams.b == "RSUserAccountAccess") {
	    pageHelperService.addCustomLoginText(chromeStorageVars.loginText);
	}

	// Brand Page
	if (urlParams.b == "RSBrandProfile") {
		window.setTimeout(features.OdoSPFCheck, 300);
		window.setTimeout(features.addPermissionSearch, 500);
	}

	// User Page
	if (urlParams.b == "RSUserProfile") {
		features.addSurveySnapshotLinks();
		pageHelperService.addCustomLoginText(chromeStorageVars.loginText);
		window.setTimeout(features.addPermissionSearch, 500);
	}
	// any page
	if (chromeStorageVars.DesignTabOn) {
		features.tabs.add("Design", "1300", "designTab", "https://global-ops-toolbox.corp.qualtrics.com/#/playbook?category=59934d8461ee2b3e16907509", "Design", "inPage");
	}
	if (chromeStorageVars.PanelsTabOn) {
		features.tabs.add("Panels Playbook", "1000", "panelsTab", "https://global-ops-toolbox.corp.qualtrics.com/#/playbook", "Panels Resources", "inPage");
	}
	if (chromeStorageVars.TipsOn) {
		features.tabs.addHelpMessages();
	}
	if (chromeStorageVars.showQuniTickets) {
		features.addQuniDashboardView();
	}
	if (chromeStorageVars.EmailButtonOn) {
		features.buttons.add('SectionButtonsContainer', 'newEmail', 'odoApp.Dialog("modules/Email/EmailEditor/template.EmailEditor.html");', 'Create Email Ticket', 'envelope');
		if (chromeStorageVars.MiniEmailButtonOn) {
			features.buttons.minimize("Create Email Ticket");
		}
	}
	if (chromeStorageVars.ClinicButtonOn) {
		features.buttons.add('SectionButtonsContainer', 'newClinic', 'Dialog("https://odo.corp.qualtrics.com/?a=Tickets&b=CT_Creator&ot=&oid=&uid=");', 'Create Clinic Ticket', 'plus');
		if (chromeStorageVars.MiniEmailButtonOn) {
			features.buttons.minimize("Create Clinic Ticket");
		}
	}
	if (chromeStorageVars.ClinicFeedbackButtonOn) {
		features.buttons.add('ui-dialog-buttonset', 'newClinicFeedback', 'return;', 'Submit Clinic Feedback', 'envelope');
	}
	if (chromeStorageVars.MiniTicketOn) {
		features.buttons.minimize("Create Ticket");
	}
	if (chromeStorageVars.MiniTakeTicketOn) {
		features.buttons.minimize("Take a Ticket");
	}
	if (chromeStorageVars.MiniSupportPhoneOn) {
		features.buttons.minimize("Support Phone Ticket");
	}
	if (chromeStorageVars.MiniClientIssueOn) {
		features.buttons.minimize("Report Client Issue");
	}
	if (chromeStorageVars.calmAlertsOn) {
		pageHelperService.customStylesheets.add("greyAlerts");
	}
	if (chromeStorageVars.newBarnaby) {
		$('.Masthead').css('background', '#73B9C1');
		$('.SiteLogo').attr('src','https://qglobalops.co1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9HWUQ2oSQWKWbvD');
		$('.SiteLogo').css('margin','0px');
		$('.SiteLogo').css('height','100%');
		$('.SiteLogo').css('opacity','1');
	}

	features.createScreenPopIssueButton();

}

var features = {
	toggleSquawkboxPosts: function() {
		var postArea = $('#DiscussionWrapper');
		if ($("#SquawkToggle").length < 1) {
			$("#BodyContent").prepend("<div id='SquawkToggle' style='transition: .2s; border: 2px solid green; padding: 5px 10px; text-align: center; margin: 20px auto; cursor: pointer; border-radius: .2em; color: green; font-size: 16px;'>Show Posts</div>");
		}
		if (postArea.is(":visible") === false) {
			postArea.show();
			$('#SquawkToggle').html("Hide Posts");
			$('#SquawkToggle').css('padding','5px 10px');
		} else {
			postArea.hide();
			$('#SquawkToggle').html("Show Posts");
			$('#SquawkToggle').css('padding', '60px 10px');
		}
	},
	tabs: {
		add: function(name, height, id, src, pageTitle, type) {
			if (type == "inPage" && document.getElementById(id)) {
				$('.SectionTabsList').append('<li class="SectionTab" id="' + id + '" style="cursor:pointer;">' + name + '</li>');
				document.getElementById(id).addEventListener("click", function() {
					$(".SectionTabsList > li").removeClass('ActiveTab');
					var tabID = "#" + id;
					$(tabID).addClass(' ActiveTab');
					$('.SectionButtonsContainer, .TimezonesTableContainer').fadeOut();
					document.getElementsByClassName('Page')[0].innerHTML = "<iframe style='border: 0; height: " + height + "px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='" + src + "'></iframe>";
					document.getElementsByClassName('PageTitle')[0].innerHTML = pageTitle;
					document.title = "Odo | " + pageTitle;
				});
			} else {
				$('.SectionTabsList').append('<li class="SectionTab" id="' + id + '" style="cursor:pointer;"><a href="' + src + '" target="_blank">' + name + '</a></li>');
			}
		},
		addHelpMessages: function() {
			var container = $('.SectionTabsList');
			var unreadCount = 1;
			var unreadCountDate;
			chrome.storage.sync.get({
				ucSetDate: new Date().toString(),
				uc: 0
			}, function(items) {
				var innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer;">Tips & Tricks</li>';
				unreadCountDate = new Date(items.ucSetDate);
				unreadCount = items.uc;
				var diff = Math.abs(unreadCountDate - new Date());
				if (diff > 432000000) {
					unreadCount += 1;
					innerTab = '<li class="SectionTab" id="MessagesTab" style="float:right; cursor:pointer; color: #04a365; border-top: #04a365 4px solid">Tips & Tricks</li>';
					chrome.storage.sync.set({
						uc: unreadCount
					});
				}
				container.append(innerTab);
			});
		}
	},
	buttons: {
		add: function(location, id, onclickTask, text, icon) {
			var container = document.getElementsByClassName(location)[0];
			var node = document.createElement("A");
			var textnode = document.createTextNode(text);
			node.appendChild(textnode);
			node.setAttribute("id", id);
			node.setAttribute("class", "btn btn-success");
			node.setAttribute('onclick', onclickTask);
			container.appendChild(node);
			document.getElementById(id).innerHTML = "<span class='icon icon-" + icon + "'></span><span>" + text + "</span>";
		},
		minimize: function(text) {
			var btnInner = $('span:contains("' + text + '")');
			btnInner.remove();
		}
	},
	likeAndCloseAllBLC: function() {
		if ($('.Discussion')) {
			$('.Discussion').each(function() {
				if (!$('#' + this.id + ' .DiscussionSummary').is(":visible")) {
					if ($('#' + this.id + ' .DiscussionName').html().indexOf('Billing Like Crazy') > -1) {
						$('#' + this.id + ' .DiscussionPlusOneButton').click();
						$('#' + this.id + ' .DiscussionToggle').click();
					}
				}
			});
		}
	},
	OdoSPFCheck: function() {
		var button = document.createElement("input");
		button.type = "button";
		button.value = "Check SPF";
		document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td.BrandSettingsFieldLabelLight").appendChild(button);
		button.addEventListener("click", function() {
			var DomainArray = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > textarea").value.split(',');
			var index = DomainArray.indexOf('*');
			if (index > -1) {
				DomainArray.splice(index, 1);
			}
			for (i = 0; i < DomainArray.length; i++) {
				DomainArray[i] = DomainArray[i].trim();
			}
			var spftable = document.createElement("TABLE");
			spftable.border = "1";
			var row = spftable.insertRow(-1);
			var Domain_t = row.insertCell(0);
			var SPF_t = row.insertCell(1);
			var MX_t = row.insertCell(2);
			Domain_t.innerHTML = '<b>Domain (<span style="color:blue; cursor:pointer;">?</span>)</b>';
			SPF_t.innerHTML = "<b>Has SPF?</b>";
			MX_t.innerHTML = "<b>Verify on MXToolbox</b>";
			document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2)").appendChild(spftable);
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
			var info = document.querySelector("#ControlPanelBrandSettings > form > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(1)");
			info.addEventListener("click", function() {
				alert("This SPF Checker uses the Qualtrics SPF Check, which looks for _spf.qualtrics.com on the SPF Record. Uncommon but functional setups such _spf.qemailserver.com or our IP range (162.247.216.0/22) will record as 'No', but can be checked on MXToolbox.");
			});
		});
		var data = null;
		function SPFCheck(domain, index, callback) {
			var xhr = new XMLHttpRequest();
			var URL = "https://global-ops-toolbox.corp.qualtrics.com/qualtrics/spf/?domain=" + domain;
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
	},
	addQuniDashboardView: function() {

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

			$.ajax({
				url: 'https://odo-tickets.corp.qualtrics.com/tickets?recommended=true&employeeID=' + tmpInfo.userData.employeeID,
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
						var queue = helpers.assignQueue(ticketCode, ticketTier);

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
		}
	},
	createScreenPopIssueButton: function() {
		$('body > div.SearchBar > div.SectionButtonsContainer > a:nth-child(2)').click(function() {
			window.setTimeout(function() {
				$('.ui-dialog-titlebar').css('position', 'relative');
				$('.ui-dialog-titlebar').append('<button class="btn" id="ScreenpopIssuesButton">Screenpop issues?</button>');
				$('#ScreenpopIssuesButton').click(function() {
					var phone = $('#ContactMainPhone').val() || $('#CurrentlyConnected').val() || $('#OtherPhone').val();
					var url = "https://qglobalops.co1.qualtrics.com/jfe/form/SV_bE2WapB9Au7oi3P?RSUser=" + $('#RSUserID').val() +
																							"&TicketID=" + $('#TicketID').val() +
																							"&ClientID=" + $('#ClientID').val() +
																							"&RSBrandID=" + $('#RSBrandID').val() +
																							"&EmployeeName=" + $('#EmployeeName').val() +
																							"&EmployeeID=" + tmpInfo.userData.employeeID +
																							"&Phone=" + phone;
					window.open(url);
				});
			},500);
		});
	},
	addSurveySnapshotLinks: function() {
		window.setTimeout(function() {
			$('#RSUserSurveys table tr td:first-child').each(function() {
				$(this).html("<a target='_blank' href='https://global-ops-toolbox.corp.qualtrics.com/surveyViewer/?surveyId=" + $(this).html() + "'>" + $(this).html() + "</a>");
			});
		}, 2500);
	},
	addPermissionSearch: function() {
		$('.RightsContainer').prepend('<div id="CustomSearchContainer"><input type="text" id="PermissionSearch" placeholder="Filter Permissions..."/></div>');
		$('#PermissionSearch').keyup(function() {
			helpers.searchPermissions($(this).val());
		});
		// random css fix
		$('#RightMenuColumn > table.Green button').addClass('btn');
		$('#RightMenuColumn > table.Green button').css('height','auto')
	}
};

var pageHelperService = {
	replaceCenterContent: function(id) {
		document.getElementById('BodyContent').innerHTML = "<div id='TipOuter'><div id='TipHeader'></div><div id='TipContent'></div><div id='NewTipContainer'><button id='AddToSnippets' class='btn'>Add tip to my Snippets</button><button class='btn' id='NewTip'>Give me a new tip</button><div id='TipList'></div></div><div style='margin-top: 50px; display:inline-block;' id='TipSurvey'></div></div>";
		document.getElementById('TipContent').innerHTML = messages[id];
		document.getElementById('TipHeader').innerHTML = "To be more productive this week...";
		document.getElementById('TipList').innerHTML = "To see the whole list, <a href='https://odo.corp.qualtrics.com/wiki/index.php/Quni#Quni_Culture' target='_blank'>click here</a>.";
		document.getElementById('TipSurvey').innerHTML = "<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>Was this Helpful?      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://qunipdidvds37ijn.co1.qualtrics.com/jfe3/form/SV_5BU8oo1d81MiNbD' style='color: #bbb' target='_blank'>     Suggest a New Tip</a>";
		tmpInfo.currentMessageID = id;
		chrome.storage.sync.set({
			ucSetDate: new Date().toString()
		});
	},
	addCustomLoginText: function(loginText) {
		var checkboxContainer = $('#EmergencyLoginCheckbox').parent();
		var newText = '<label for="EmergencyLoginCheckbox">I need to access an account where the customer has not granted permission through the product</label>';
		var newElement = checkboxContainer.html().replace('I need to access an account where the customer has not granted permission through the product', newText);
		checkboxContainer.html(newElement);
		$("#EmergencyLoginCheckbox").change( function() {
	       $("#EmergencyLogin").toggle();
	    });
		var textarea = document.querySelectorAll('#EmergencyLoginForm > textarea')[0];
		textarea.innerHTML = loginText;
	},
	customStylesheets: {
		list: ["squawkPosts", "greyAlerts"],
		add: function(name) {
			document.head.insertAdjacentHTML('beforeend',
				'<link rel="stylesheet" type="text/css" href="' +
				chrome.runtime.getURL("css/" + name + ".css") + '">'
			);
		}
	},
	changeFavicon: function(src) {
		var link = document.createElement('link'),
			oldLink = document.getElementById('dynamic-favicon');
		link.id = 'dynamic-favicon';
		link.rel = 'shortcut icon';
		link.href = src;
		if (oldLink) {
			document.head.removeChild(oldLink);
		}
		document.head.appendChild(link);
	},
	changeTitle: function(urlParams) {
		var $pageTitle = $('.PageTitle');
		if ($pageTitle) {
			var title = $pageTitle.text().trim();
			var pageTitle = document.head.getElementsByTagName('title')[0];
			if (urlParams.tid && !title.match(/Client Pulse/) && urlParams.a != 'Team' && !title.match(/User Move/)) {
				title = $('#BodyContent').find('div:nth-child(3) > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > span').text().trim();
			}
			if (title.match(/Client Pulse/)) {
				title = title.match(/Client Pulse: (.*)/)[1];
				pageHelperService.changeFavicon("https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5APFMnqaGHAp1UF&V=1436413173");
			}
			if (pageTitle) {
				pageTitle.innerHTML = 'Odo | ' + title;
			}
			if (urlParams.iid) {
				pageTitle.innerHTML = 'Odo | ' + urlParams.iid;
			}
		}
	},
	setFavicon: function(urlParams) {
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
};

var listeners = {
	create: function() {
		$('#BodyContent').on('click', '#SquawkToggle', function() {
			features.toggleSquawkboxPosts();
		});

		$(".SectionTabsList").on("click", "#MessagesTab", function() {
			helpers.toggleMessages(false);
		});


		$("#BodyContent").on("click", "#NewTip", function() {
			helpers.toggleMessages(true);
		});

		$("body").on("click", "#AddToSnippets", function() {
			helpers.addNewSnippet(messages[tmpInfo.currentMessageID]);
		});

		window.onpopstate = function() {
			tmpInfo.urlParams = helpers.getUrlParams();
		};
	}
};

var helpers = {
	searchPermissions: function(text) {
		$('td.Col_PermissionName').each(function() {
			$(this).closest('tr').show();
	 		if ($(this).html().toLowerCase().indexOf(text.toLowerCase()) == -1) {
				$(this).closest('tr').hide();
	        }
	    });
	},
	toggleMessages: function(refresh) {
		chrome.storage.sync.get({
			cm: 0
		}, function(items) {
			tmpInfo.currentMessage = items.cm;
			if ((tmpInfo.currentMessage === null) || (refresh)) {
				var max = messages.length;
				tmpInfo.currentMessage = Math.floor(Math.random() * max);
				chrome.storage.sync.set({
					cm: tmpInfo.currentMessage,
					lwm: tmpInfo.lastWeeksMessage,
					uc: 0,
					ucSetDate: new Date()
				});
			} else {}
			pageHelperService.replaceCenterContent(tmpInfo.currentMessage);
		});
	},
	addNewSnippet: function(snippet) {
		var data = new FormData();
		data.append('Description', snippet);

		jQuery.ajax({
			url: 'https://odo.corp.qualtrics.com/?a=Snippets&b=SnippetsEditor&addSnippet=true&week=ThisWeek&eid=' + tmpInfo.userData.employeeID + '&date=2016-03-14&Description=test',
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			type: 'POST',
			success: function(data) {
				alert("Added to Snippets");
			}
		});
	},
	assignQueue: function(ticketCode, ticketTier) {

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
	},
	getVars: function(cb) {
		var chromeStorageVars = {};
		chrome.storage.sync.get({
			emailButton: "",
			miniEmailBtn: "",
			clinicFeedbackBtn: "",
			clinicButton: "",
			miniTicketButton: "",
			miniTakeTicketBtn: "",
			miniSupportPhoneBtn: "",
			miniClientIssueBtn: "",
			designTab: false,
			playbookTab: "",
			gp: true,
			tg: 3700,
			td: "2016-12-12",
			tips: true,
			ename: "",
			panels: false,
			calmAlerts: true,
			minPosts: true,
			loginText: "",
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
			likeAndCloseBLC: true,
			newBarnaby: true
		}, function(items) {
			chromeStorageVars.EmailButtonOn = items.emailButton;
			chromeStorageVars.MiniEmailButtonOn = items.miniEmailBtn;
			chromeStorageVars.ClinicFeedbackButtonOn = items.clinicFeedbackBtn;
			chromeStorageVars.ClinicButtonOn = items.clinicButton;
			chromeStorageVars.MiniTicketOn = items.miniTicketButton;
			chromeStorageVars.MiniTakeTicketOn = items.miniTakeTicketBtn;
			chromeStorageVars.MiniSupportPhoneOn = items.miniSupportPhoneBtn;
			chromeStorageVars.MiniClientIssueOn = items.miniClientIssueBtn;
			chromeStorageVars.DesignTabOn = items.designTab;
			chromeStorageVars.PlaybookTabOn = items.playbookTab;
			chromeStorageVars.ShowGradProgressOn = items.gp;
			chromeStorageVars.TicketGoal = items.tg;
			chromeStorageVars.GoalDate = items.td;
			chromeStorageVars.TipsOn = items.tips;
			chromeStorageVars.PanelsTabOn = items.panels;
			chromeStorageVars.loginText = items.loginText;
			chromeStorageVars.calmAlertsOn = items.calmAlerts;
			chromeStorageVars.minimalPostsOn = items.minPosts;
			chromeStorageVars.hidePosts = items.hidePosts;
			chromeStorageVars.spamCount = items.spamCount;
			chromeStorageVars.blockSpam = items.blockSpam;
			chromeStorageVars.showQuniTickets = items.showQuniTickets;
			chromeStorageVars.showSIQueue = items.showSIQueue;
			chromeStorageVars.showTAQueue = items.showTAQueue;
			chromeStorageVars.show360Queue = items.show360Queue;
			chromeStorageVars.showEEQueue = items.showEEQueue;
			chromeStorageVars.showThemesQueue = items.showThemesQueue;
			chromeStorageVars.showVocQueue = items.showVocQueue;
			chromeStorageVars.showStatQueue = items.showStatQueue;
			chromeStorageVars.showIntQueue = items.showIntQueue;
			chromeStorageVars.likeAndCloseBLC = items.likeAndCloseBLC;
			chromeStorageVars.newBarnaby = items.newBarnaby;
			cb(chromeStorageVars);
		});
	},
	retrieveWindowVariables: function(variables) {
		var returnObject = {};
		var scriptContent = "";
		for (var i = 0; i < variables.length; i++) {
			var currVariable = variables[i];
			scriptContent += "if (typeof " + currVariable + " !== 'undefined') document.getElementsByTagName('body')[0].setAttribute('tmp_" + currVariable + "', JSON.stringify(window." + currVariable + "));\n";
		}
		var script = document.createElement('script');
		script.id = 'tmpScript';
		script.appendChild(document.createTextNode(scriptContent));
		(document.body || document.head || document.documentElement).appendChild(script);
		for (var i = 0; i < variables.length; i++) {
			var currVariable = variables[i];
			returnObject[currVariable] = document.getElementsByTagName('body')[0].getAttribute("tmp_" + currVariable);
			document.getElementsByTagName('body')[0].removeAttribute("tmp_" + currVariable);
		}
		document.getElementById("tmpScript").remove();
		return returnObject;
	},
	getUrlParams: function() {
		var search = location.search.substring(1);
		if (search.length > 0) {
			return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
		    function(key, value) { return key===""?value:decodeURIComponent(value) })
		} else {
			return {};
		}
	}
};

init();
