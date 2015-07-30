console.log("Success! Odo Enhanced Works!");
/* ------------- Built by Zach McDonnell ---------------- */
/* ------------- Return query string in var urlParams ---------------- */
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
/* --------- Sets the appropriate favicon to use (works with the new css sheet made by Matthew Bloomfield) -------- */
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
    var node = document.getElementsByClassName("SearchContainer")[0];
    node.setAttribute('style', 'width:"790px !important;'); 
    var emailnode = document.createElement('IMG');
    emailnode.setAttribute('src','https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0Go4xikYP9Ald3L&V=1436994244');
    emailnode.setAttribute('class','CreateTicketButton');
    emailnode.setAttribute('style','border-radius:5px;margin: 0px 5px;');
    emailnode.setAttribute('onclick','Dialog("?b=NewEmailEditor&CreateTicketType=SE&account=Support");');
    emailnode.setAttribute('height','51');
    node.appendChild(emailnode);
};
addEmailTicket();
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
/* ------------- Autofill dialog box depending on fields present ---------------- */
var changeDialog = document.getElementById('Dialog');
changeDialog.onmouseenter = function() {
    /* ------------- This adds CPR to the choices of products for Jira ---------- */
    if (document.getElementById('JiraProduct') && !document.getElementById('addCPR')) {
    var cpr = document.createElement('option');
    cpr.value = 'CPR';
    cpr.id = 'addCPR';
    cpr.innerHTML = 'Control Panel Reporting(CPR)';
    document.getElementById('JiraProduct').appendChild(cpr);
    }
    /* ------------- List of IDs to autofill ---------- */
    var user = document.getElementsByClassName('BodyContent')[0].innerHTML;
    if (document.getElementById('to') !== null && document.getElementById('to').value == "") {
    document.getElementById('to').value = user.match(/Email: ([\w\d\.\-\_]+@[\w\d\.\-\_]+)/)[1];
    }
    if (document.getElementById('LoginID') !== null && document.getElementById('LoginID').value == "") {
    document.getElementById('LoginID').value = user.match(/UN: (.*)</)[1];
    }
    if (document.getElementById('UserName') !== null && document.getElementById('UserName').value == "") {
    document.getElementById('UserName').value = user.match(/UN: (.*)</)[1];
    }
    if (document.getElementById('DataCenterID') !== null && document.getElementById('DataCenterID').value == "") {
    document.getElementById('DataCenterID').value = user.match(/([UCAE][TOZU][1S]?[A]?)/)[1];
    }
    if (document.getElementById('UserID') !== null && document.getElementById('UserID').value == "") {
    document.getElementById('UserID').value = user.match(/(UR.?_\w{15})/)[1];
    }
    if (document.getElementById('RSUserID') !== null && document.getElementById('RSUserID').value == "") {
    document.getElementById('RSUserID').value = user.match(/(UR.?_\w{15})/)[1];
    }
    if (document.getElementById('BrandID') !== null && document.getElementById('BrandID').value == "") {
    document.getElementById('BrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
    }
    if (document.getElementById('RSBrandID') !== null && document.getElementById('RSBrandID').value == "") {
    document.getElementById('RSBrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
    }
    if (document.getElementById('ClientName') !== null && document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0] !== undefined && document.getElementById('ClientName').value == "") {
    console.log(document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0]);
    document.getElementById('ClientName').value = document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0].innerHTML;
    }
    if (document.getElementById('ClientID') !== null && document.getElementById('ClientID').value == "") {
    document.getElementById('ClientID').value = document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0].href.match(/cid=(.*)/)[1];
    }
};