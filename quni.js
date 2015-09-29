console.log("Success! Odo Enhanced Works!");
/* ------------- Built by Zach McDonnell ---------------- */
/* ------------- Return query string in var urlParams ---------------- */
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
changeFavicon(favicon);
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
};
addEmailTicket();
/* ---- Add Knowledge Base Button ------
var node = document.getElementsByClassName("SearchContainer")[0];
var kbnode = document.createElement('IMG')
kbnode.src = "https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0jN6AK9pss9dE2h&V=1439585513";
kbnode.setAttribute('class', 'CreateTicketButton');
kbnode.setAttribute('id', 'KB');
kbnode.setAttribute('style', "border-radius:5px;margin: 0px 5px;float: left;");
kbnode.setAttribute('onclick', 'Dialog("?b=KBPopUpViewer");');
kbnode.height = '51';
node.insertBefore(kbnode, node.childNodes[0]);
*/
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
function changeTitle(){
	if ($('.PageTitle')){
		var title = $('.PageTitle').text().trim();
		var pageTitle = document.head.getElementsByTagName('title')[0];
		if (urlParams['tid'] && !title.match(/Client Pulse/)) {
			title = $('#BodyContent > div:nth-child(3) > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > span').text().trim();
		}
		if (title.match(/Client Pulse/)) {
			title = title.match(/Client Pulse: (.*)/)[1];
			changeFavicon("https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5APFMnqaGHAp1UF&V=1436413173");
		}
		pageTitle.innerHTML = 'Odo | ' + title;
	} else if (urlParams['iid']) {
		pageTitle.innerHTML = 'Odo | ' + urlParams['iid'];
	}
};
changeTitle();

/* ------------- Integrate Jira into Odo Dialog (See Auto-fill section for trigger) ---------------- */
var feature;
var product;

function getNewJira() {
  product = document.getElementById('jiraProduct').value;
  feature = document.getElementById('jiraSearch').value;
  status = document.getElementById('jiraStatus').value;
	$('#BodyContent').html("<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>");
  getJira(product, feature, status);
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
  $('#jiraSearch').val(feature);
	$('#jiraProduct').val(product);
	$('#jiraStatus').val(status);
}
var bug;

function getJira(product, feature, status) {
  bug = feature.match(/[A-Z,a-z]{2,3}-\d{3,5}/);
  if (bug) {
	var url = "http://odo.corp.qualtrics.com/index.php?a=QUni&b=EB_Viewer&iid=" + feature;
	window.open(url);
  } else {
	var query = "";
	if (feature) {
	  query += "text ~ " + "'" + feature + "'";
	}
	if (status) {
	  query += "AND status in (" + status + ")";
	}
	if (product != "") {
	  query += "AND project in (" + product + ")";
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

/* ------------- Integrate QWiki into Odo Dialog (See Auto-fill section for trigger) ----------------
var page;

function updatelinks(p) {
  if (p) {
	var q = p.getElementsByTagName('A'); //updates hyperlinks to qwiki
	for (i = 0; i < q.length; i++) {
	  var m = q[i].href;
	  q[i].setAttribute('href', m); //fix the base url for href
	  q[i].setAttribute('target', '_blank');
	}
	return p;
  }
}

function insertArticle(QWiki, qPage) {
  if (qPage == "onlyresults" && QWiki.getElementsByClassName('searchresults')[0]) {
	var QWikiArticle = QWiki.getElementsByClassName('searchresults')[0];
  } else {
	var QWikiArticle = QWiki.getElementById('content');
  }
  QWikiArticle = updatelinks(QWikiArticle);
  var odoArticle = document.getElementById('Articles');
  var searchBar = document.createElement('div');
  odoArticle.innerHTML = '';
  searchBar.id = 'qWikiSearchBar';
  searchBar.innerHTML = 'Search:' + '<input type="text" id="qWikiSearch" name="qWikiSearch"> <button type="button" id="qWikiSearchSubmit">Search</button>' + QWikiArticle.innerHTML;
  odoArticle.appendChild(searchBar);
  document.getElementById('qWikiSearch').value = page;
  document.getElementById('qWikiSearch').onkeypress = function (event) {
	if (event.keyCode == 13) {
	  page = document.getElementById('qWikiSearch').value;
	  console.log(page);
	  getQWiki(page);
	}
  };
  document.getElementById('qWikiSearchSubmit').onclick = function () {
	page = document.getElementById('qWikiSearch').value;
	console.log(page);
	getQWiki(page);
  };
  odoArticle.removeAttribute('style'); //removes height limit of content
  /* ---------- Rich Text Editor but the world isn't ready for this yet... ------------*/
  /*if (document.getElementById('firstHeading')) { //If page is found it makes the page editable
	  var button = document.createElement('button');
	  button.id = 'qWikiSubmit';
	  button.innerHTML = 'Edit';
	  button.onclick = function() {
		  var url = 'http://qwiki.dev.qualtrics.com/index.php?action=edit&title=' + page;
		  var qPage = document.getElementById('mw-content-text');
		  editQWiki(url,qPage);
	  };
	  document.getElementById('firstHeading').appendChild(button);
  };
  var pageSet = document.createElement('div');
  pageSet.id = 'addedArticle';
  odoArticle.appendChild(pageSet);
}

function getQWiki(page) {
  page = page.replace(/\s/g, "_");
  var url = "http://qwiki.dev.qualtrics.com/index.php/" + page;
  console.log(url);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.responseType = "document";
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  insertArticle(xmlhttp.response);
	}
	if (xmlhttp.readyState == 4 && xmlhttp.status == 404) { //On failure run a search
	  page = page.replace(/_/g, " ");
	  url = "http://qwiki.dev.qualtrics.com/index.php?title=Special%3ASearch&go=Go&search=" + page;
	  var xmlhttp1 = new XMLHttpRequest();
	  xmlhttp1.open("GET", url, true);
	  xmlhttp1.responseType = "document";
	  xmlhttp1.send();
	  xmlhttp1.onreadystatechange = function () {
		if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
		  console.log("looking for other page");
		  insertArticle(xmlhttp1.response, "onlyresults");
		}
	  }
	}
  }
};
*/
/* DEV------------- Edit QWiki page -----------
function insertEditor(page, qPage) {
  var link = document.createElement('link');
  link.setAttribute('href', 'http://mcdonnellteach.com/tinyeditor.css');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  document.head.appendChild(link);
  document.getElementById('bodyContent').innerHTML = '';
  var div = document.createElement('div');
  div.id = 'qWikiEdit';
  var button = document.getElementById('qWikiSubmit');
  button.setAttribute('style', 'color:red !important;');
  button.innerHTML = 'Save & Overwrite QWiki Page Formatting';
  page.getElementById('editpage-copywarn').remove();
  page.getElementById('wpPreview').remove();
  page.getElementById('wpDiff').remove();
  page.getElementById('editform').removeAttribute('method');
  page.getElementById('editform').removeAttribute('action');
  page.getElementById('editform').removeAttribute('enctype');
  page.getElementsByClassName('editOptions')[0].setAttribute('style', 'display:none;');
  var pageSet = document.createElement('div');
  pageSet.id = 'addedArticle';
  div.appendChild(pageSet);
  page.getElementById('wpTextbox1').innerHTML = qPage.innerHTML;
  div.appendChild(page.getElementById('editform'));
  document.getElementById('bodyContent').appendChild(div);
  new TINY.editor.edit('editor', {
	id: 'wpTextbox1',
	width: '100%',
	height: '400px',
	cssclass: 'te',
	controlclass: 'tecontrol',
	rowclass: 'teheader',
	dividerclass: 'tedivider',
	controls: ['bold', 'italic', 'underline', 'strikethrough', '|', 'subscript', 'superscript', '|',
			  'orderedlist', 'unorderedlist', '|', 'outdent', 'indent', '|', 'leftalign',
			  'centeralign', 'rightalign', 'blockjustify', '|', 'unformat', '|', 'undo', 'redo', 'n',
			  'font', 'size', 'style', '|', 'image', 'hr', 'link', 'unlink', '|', 'cut', 'copy', 'paste'],
	footer: true,
	fonts: ['Verdana', 'Arial', 'Georgia', 'Trebuchet MS'],
	xhtml: true,
	cssfile: 'http://mcdonnellteach.com/tinyeditor.css',
	bodyid: 'editor',
	footerclass: 'tefooter',
	toggle: {
	  text: 'show source',
	  activetext: 'show wysiwyg',
	  cssclass: 'toggle'
	},
	resize: {
	  cssclass: 'resize'
	}
  });
};

function updateQWiki() {
  document.getElementById('qWikiSubmit').onclick = function () {
	var wpSection = document.querySelector('[name=wpSection]').value;
	var wpStarttime = document.querySelector('[name=wpStarttime]').value;
	var wpEdittime = document.querySelector('[name=wpEdittime]').value;
	var wpScrolltop = document.querySelector('[name=wpScrolltop]').value;
	var wpAutoSummary = document.querySelector('[name=wpSummary]').value;
	var wpTextbox1 = document.getElementsByTagName('iframe')[0].contentDocument.getElementById('editor').innerHTML;
	var wpSave = document.querySelector('[name=wpSave]').value;
	var wpEditToken = 'f89e4b1877055e8a11a66d63a5b79b37%2B\\';
	var dataString = 'wpSection' + wpSection + '&wpStarttime' + wpStarttime + '&wpEdittime=' + wpEdittime + '&wpScrolltop=' + wpScrolltop + '&wpAutoSummary=' + wpAutoSummary + '&wpTextbox1=' + wpTextbox1 + '&wpSave=' + wpSave + '&wpEditToken=' + wpEditToken;
	console.log(dataString);
	document.getElementById('bodyContent').innerHTML = "<img style='position: absolute;left: 47%;top: 50%;' src='https://s.qualtrics.com/ControlPanel/File.php?F=F_d5B1fUz1R32UoWF'>";
	var url = "http://qwiki.dev.qualtrics.com/index.php?action=submit&title=" + page;
	console.log(url);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', url, true);
	xmlhttp.responseType = 'document';
	xmlhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
	xmlhttp.send(dataString);
	xmlhttp.onreadystatechange = function () {
	  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		insertArticle(xmlhttp.response);
	  }
	}
  };
};

function editQWiki(url, qPage) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, true);
  xmlhttp.responseType = 'document';
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  insertEditor(xmlhttp.response, qPage);
	  updateQWiki();
	}
  }
};
*/
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
  //RETRIEVE CONTENT FROM SNIPPETS PAGE
function setSnippetsContainer () {
var url = "http://odo.corp.qualtrics.com/?a=Snippets&b=SnippetsEditor";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.responseType = "document";
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	var response = xmlhttp.response;
	//Create Container
	$('#LeftMenuColumn').prepend("<div class='Title' style='cursor:pointer;' id='SnippetsHeader'>My Snippets</div><table id='snippetsContainer'><tbody></tbody></table>");
	// PLACE SNIPPETS IN CONTAINER
	if (response.querySelectorAll('#ThisWeekSnippetTable > table > tbody')[0]) {
	  var finalOutput = response.querySelectorAll('#ThisWeekSnippetTable > table > tbody')[0].innerHTML;
	  var snippetSideBar = document.getElementById('snippetsContainer');
	  snippetSideBar.innerHTML = finalOutput;
	  var table = document.getElementById('snippetsContainer');
	  //CLEAN EACH SNIPPET ONE BY ONE
	  for (i = 0; i < table.rows.length; i++) {
		var row = table.rows[i];
		//COLOR SNIPPETS WHEN COMPLETED
		var checkBox = row.getElementsByTagName('input')[0];
		//GET DATE TO TURN SNIPPETS RED AFTER WEDNESDAY
		var d = new Date();
		var n = d.getDay();
		if (checkBox.checked) {
		  row.style.opacity = ".3";
		} else if (n >= 4) {
		  row.style.outline = "#04b26e 1px solid";
		}
		//ELIMINATE X
		row.deleteCell(0);
		row.deleteCell(1);
		//TRUNCATE LABELS ON SNIPPETS
		var length = 40; //LENGTH OF SNIPPET POST TRUNCATION
		var rowContents = row.getElementsByTagName('td')[0];
		//VERIFY THAT TRUNCATION IS NECESSARY
		if ( rowContents.innerHTML.length > length ) {
		  var replaceMe = row.getElementsByTagName('td')[0].innerHTML;
		  rowContents.innerHTML = replaceMe.substring(0, length) + "...";
		}

	  }
	} else {
	  //ALERT THAT NO SNIPPETS ARE PRESENT
	  var snippetSideBar = document.getElementById('snippetsContainer');
	  snippetSideBar.innerHTML = "<div style='padding:5px;text-align:center;font-size:10pt;'>You don't have any snippets! Click here to add snippets.</div>";
	  snippetSideBar.style.cursor = "pointer";
	  snippetSideBar.style.outline = "1px solid #04a365";
	}
	//ALLOW FOR EDITING OF SNIPPETS
	snippetSideBar.setAttribute('onclick', "Dialog('?a=Snippets&b=SnippetsEditor&date=&reload=false');");
  };
};
};
//CLOSE SNIPPETS ON CLICK

/*--- Konami Code for Mario Face to Appear ---*/
// check to make sure that the browser can handle window.addEventListener
function konami() {
if (window.addEventListener) {
   // create the keys and konami variables
   var keys = [],
	   konami = "38,38,40,40,37,39,37,39,66,65";

   // bind the keydown event to the Konami function
   window.addEventListener("keydown", function(e){
	   // push the keycode to the 'keys' array
	   keys.push(e.keyCode);

	   // and check to see if the user has entered the Konami code
	   if (keys.toString().indexOf(konami) >= 0) {
		   var pageLogo = document.querySelector('body > div.SearchBar > div > a > img');
pageLogo.src = "http://s29.postimg.org/8v50sgzon/Mario_head.png";

		   // and finally clean up the keys array
		   keys = [];
	   };
   }, true);
};
};

/*--- Add Playbook as a tab ---*/

//CHANGE TAB NAME
function addPlaybook() {
  var tabList = document.getElementsByClassName('SectionTabsList')[0];
  $(tabList).append('<li class="SectionTab" id="playbookTab" style="cursor:pointer;">Playbook</li>');


	//SET WINDOW HEIGHT
  document.getElementById("playbookTab").addEventListener("click", function(){
	$(".SectionTabsList > li").removeClass('ActiveTab');
	$('#playbookTab').addClass(' ActiveTab');
	$('.SectionButtonsContainer').fadeOut();
	$('.TimezonesTableContainer').fadeOut();
	var playbookArea = document.getElementsByClassName('Page')[0];
	//ADD IFRAME
	playbookArea.innerHTML = "<iframe style='border: 0; height: 900px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://googledrive.com/host/0Bywaj8lsBBrWSmk0SW0tN0FrSkU#noHeader'></iframe>";
  });
};

//BE SURE THAT SNIPPETS ONLY SHOW ON HOME PAGE BASED OFF URLPARAMS FOR FAVICON PLACEMENT

//COMMENTD OUT BUILDING OF SNIPPETS BECAUSE FUNCTION TAKES CARE OF THAT NOW
  if (urlParams["a"] == "Home") {
	//$("#LeftMenuColumn").prepend(" <table id='SnippetsContainer' style='border: 1px solid rgb(4, 163, 101) !important;border-radius: 10px !important;color: rgb(4, 163, 101);cursor:pointer;  '></table>");
	//$("#LeftMenuColumn").prepend(" <div class='Title'>My Snippets</div> ");
  setSnippetsContainer();
  addPlaybook();
	konami();
  } else if (urlParams["a"] == null) {
	//$("#LeftMenuColumn").prepend(" <table id='SnippetsContainer' style='border: 1px solid rgb(4, 163, 101) !important;border-radius: 10px !important;color: rgb(4, 163, 101);cursor:pointer;'></table>");
	//$("#LeftMenuColumn").prepend(" <div class='Title'>My Snippets</div> ");
  setSnippetsContainer();
	konami();
	addPlaybook();
  } else if (urlParams["TopNav"] == "Tickets") {
	addPlaybook();
}

/*DEV-- Google Calendar APIs experiment --*/
function getCal() {
  $.get("https://www.googleapis.com/calendar/v3/calendars/zachm%40qualtrics.com")
	.done(function (data) {
	  alert("Data Loaded: " + data);
	})
	.fail(function (error) {
	  alert("error" + error.responseJSON);
	  console.log(error);
	});
};
/*--- Easter Eggs ---*/

/*Add Help Desk Tab to every page */
function addHelpDesk() {
  var tabList = document.getElementsByClassName('SectionTabsList')[0];
  $(tabList).append('<li class="SectionTab" id="helpdeskTab" style="cursor:pointer;">Help Desk Ticket</li>');
  document.getElementById("helpdeskTab").addEventListener("click", function(){
	$(".SectionTabsList > li").removeClass('ActiveTab');
	$('#helpdeskTab').addClass(' ActiveTab');
	$('.SectionButtonsContainer').fadeOut();
	$('.TimezonesTableContainer').fadeOut();
	var helpdeskArea = document.getElementsByClassName('Page')[0];
	//ADD IFRAME
	helpdeskArea.innerHTML = "<iframe style='border: 0; height: 1300px; width: 100%; left: 0; right: 0; top: 0; bottom: 0;' src='http://survey.qualtrics.com/WRQualtricsSurveyEngine/?SID=SV_3lo6hZODeRSbXsF&RID=MLRP_6i2XORBVUvB6cm1&_=1'></iframe>";
  });
};
addHelpDesk();
