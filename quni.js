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
    var emailnode = document.createElement('IMG');
    emailnode.src = 'https://s.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0Go4xikYP9Ald3L&V=1436994244';
    emailnode.setAttribute('class','CreateTicketButton');
    emailnode.setAttribute('style',"border-radius:5px;margin: 0px 5px;");
    emailnode.setAttribute('onclick','Dialog("?b=NewEmailEditor&CreateTicketType=SE&account=Support");');
    emailnode.height = '51';
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
/* ------------- Integrate Jira into Odo Dialog (See Auto-fill section for trigger) ---------------- */
var feature;
var product;
function getNewJira(){
    product = document.getElementById('jiraProduct').value;
    feature =document.getElementById('jiraSearchTerm').value;
    getJira(product,feature);
};
function insertBugs(jiraBugs) {
            var odoBugs = document.getElementById('Bugs');
            odoBugs.innerHTML = jiraBugs.getElementsByTagName('body')[0].innerHTML;
            odoBugs.removeAttribute('style'); //removes height limit of content
            document.getElementById('newSearch').addEventListener('click', getNewJira);
            var pageSet = document.createElement('div');
                pageSet.id = 'addedBugs';
                odoBugs.appendChild(pageSet); 
            $('#bugResults').DataTable();
}
function getJira(product,feature) {
    var query = "project = '" + product + "' AND issuetype = Bug AND status in (Open,'In Progress', Reopened) AND text ~ " + "'" + feature + "'";
    query = query.replace(/ /g,'%20');
    query = query.replace(/'/g,'%27');
    var url = "https://zachs-webservices.herokuapp.com/jiraIssue.php?startAt=0&maxResults=50&query=" + query;
    console.log(url);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",url,true);
    xmlhttp.responseType = "document";
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            insertBugs(xmlhttp.response);
        }
    }
};
/* ------------- Integrate QWiki into Odo Dialog (See Auto-fill section for trigger) ---------------- */
var page;
function updatelinks(p) {
   var q = p.getElementsByTagName('A'); //updates hyperlinks to qwiki
            for (i=0;i<q.length;i++) {
                var m = q[i].href;
                q[i].setAttribute('href',m); //fix the base url for href
                q[i].setAttribute('target','_blank');
            }
    return p;
}
function insertArticle(QWiki,nopage) {
    if (nopage) {
        var QWikiArticle = QWiki.getElementsByClassName('searchresults')[0];
    } else {
        var QWikiArticle = QWiki.getElementById('content');
    }
            QWikiArticle = updatelinks(QWikiArticle);
            var odoArticle = document.getElementById('Articles');
            odoArticle.innerHTML = QWikiArticle.innerHTML;
            odoArticle.removeAttribute('style'); //removes height limit of content
            var pageSet = document.createElement('div');
                pageSet.id = 'addedArticle';
                odoArticle.appendChild(pageSet);    
}
function getQWiki(page) {
    var url = "http://qwiki.dev.qualtrics.com/index.php/" + page;
    console.log(url);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",url,true);
    xmlhttp.responseType = "document";
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            insertArticle(xmlhttp.response);
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) { //On failure run a search
            page = page.replace(/_/g, " ");
            url = "http://qwiki.dev.qualtrics.com/index.php?title=Special%3ASearch&go=Go&search=" + page;
            var xmlhttp1 = new XMLHttpRequest();
            xmlhttp1.open("GET",url,true);
            xmlhttp1.responseType = "document";
            xmlhttp1.send();
            xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
                insertArticle(xmlhttp1.response,"onlyresults");
            }
            }
        }
    }
};
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
    /* ------------- Get JIRA Search -------------------- */
    if (document.getElementById('Bugs') && !document.getElementById('addedBugs')) {
    product = document.getElementById('TopicList').querySelectorAll('td')[0].innerHTML.match(/(.*) \| (.*)/)[1];
    feature = document.getElementById('TopicList').querySelectorAll('td')[0].innerHTML.match(/(.*) \| (.*)/)[2];
    getJira(product,feature);
    }
    /* ------------- Get dynamic QWiki article ---------- */
    if (document.getElementById('Articles') && !document.getElementById('addedArticle')) {
    page = document.getElementById('TopicList').innerHTML.match(/\| ([\w\s]+)/)[1];
    page = page.replace(/\s/, "_");
    getQWiki(page);
    }
    /* ------------- List of IDs to autofill ---------- */
    var user
    if (document.getElementById('to') !== null && document.getElementById('to').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('to').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/mailto:(.*)" target/)[1];
        } else {
         user = document.getElementsByClassName('Box')[0].innerHTML;
    document.getElementById('to').value = user.match(/Email: ([\w\d\.\-\_]+@[\w\d\.\-\_]+)/)[1];
        }
    }
    if (document.getElementById('LoginID') !== null && document.getElementById('LoginID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('LoginID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
        } else {
        user = document.getElementsByClassName('Box')[0].innerHTML;
    document.getElementById('LoginID').value = user.match(/UN: (.*)</)[1];
        }
    }
    if (document.getElementById('UserName') !== null && document.getElementById('UserName').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('UserName').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[1].innerHTML.match(/<br>(.*)/)[1];
        } else {
        user = document.getElementsByClassName('Box')[0].innerHTML;
    document.getElementById('UserName').value = user.match(/UN: (.*)</)[1];
        }
    }
    if (document.getElementById('DataCenterID') !== null && document.getElementById('DataCenterID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('DataCenterID').value = document.getElementById('BodyContent').getElementsByClassName('Selected')[0].querySelectorAll("td")[3].innerHTML;
        } else {
        user = document.getElementsByClassName('Box')[2].innerHTML;
    document.getElementById('DataCenterID').value = user.match(/([UCAE][TOZU][1S]?[A]?)/)[1];
        }
    }
    if (document.getElementById('UserID') !== null && document.getElementById('UserID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('UserID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
        } else {
        user = document.getElementsByClassName('Box')[0].innerHTML;
    document.getElementById('UserID').value = user.match(/(UR.?_\w{15})/)[1];
        }
    }
    if (document.getElementById('RSUserID') !== null && document.getElementById('RSUserID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('RSUserID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[0].href.match(/uid=(.*)&/)[1];
        } else {
        user = document.getElementsByClassName('Box')[0].innerHTML;
    document.getElementById('RSUserID').value = user.match(/(UR.?_\w{15})/)[1];
        }
    }
    if (document.getElementById('BrandID') !== null && document.getElementById('BrandID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('BrandID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[1].href.match(/bid=(.*)/)[1];
        } else {
    document.getElementById('BrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
        }
    }
    if (document.getElementById('RSBrandID') !== null && document.getElementById('RSBrandID').value == "") {
        if(urlParams["b"]=="TicketViewer"){
        document.getElementById('RSBrandID').value = document.getElementById('BodyContent').getElementsByClassName('overLib')[1].href.match(/bid=(.*)/)[1];
        } else {
    document.getElementById('RSBrandID').value = document.querySelectorAll("div.Box a")[0].innerHTML;
        }
    }
    if (document.getElementById('ClientName') !== null && document.getElementById('RightMenuColumn').getElementsByClassName('overLib')[0] !== undefined && document.getElementById('ClientName').value == "") {
    document.getElementById('ClientName').value = document.getElementById('RightMenuColumn').getElementsByClassName('Yellow')[0].getElementsByClassName('overLib')[0].innerHTML;
    }
    if (document.getElementById('ClientID') !== null && document.getElementById('ClientID').value == "") {
    document.getElementById('ClientID').value = document.getElementById('RightMenuColumn').getElementsByClassName('Yellow')[0].getElementsByClassName('overLib')[0].href.match(/cid=(.*)/)[1];
    }
};