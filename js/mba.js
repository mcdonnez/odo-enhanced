//this makes our script only run on this page
function CheckWebpage() {
    var webpage = window.location.href;
    var partsArray = webpage.split('=');
    var i;
    for (i = 0; i < partsArray.length; i++) {
        var webpage = partsArray[i];
        if (webpage == "TicketViewer&tid") {
            return true;
        }
    }
    return false;
}

//better way to try and get data center
function createbuttons() {
    var rows = jQuery("tr.Access");//this gets the row with the users. In the end we will need to put this in a loop for when there are multiple accounts
    var i = 0;
    while (i < rows.length) {
        var row = rows[i];
        var rowchildren = row.childNodes;;//gets all the td in the row
        var cell = rowchildren[3];//gets the td with the data center
        var datacenter = cell.textContent;//gets the data center
        console.log(datacenter);
        if (datacenter === "EU"){datacenter = "EU1"};
        if (datacenter === "AU"){datacenter = "AU1"};
        var x = rows[i].insertCell(-1);
        x.innerHTML = '<input type="button", id="myaccount_' + datacenter + '", value="My ' + datacenter + ' account"></input><br /><br /><input type="button", id="promote_' + datacenter + '", value="Promote on ' + datacenter +'"></input>'
        i++;
    }
};


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var Webpage = CheckWebpage();
if (Webpage) {
    console.log("It worked");
    createbuttons();
}
var ticketID = '';
jQuery("#myaccount_AU1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    ticketID = getParameterByName("tid");
    chrome.runtime.sendMessage({ msg: "myaccount_clicked", data: {"datacenter": 'AU1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#myaccount_CO1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    ticketID = getParameterByName("tid");
    chrome.runtime.sendMessage({ msg: "myaccount_clicked", data: {"datacenter": 'CO1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#myaccount_AZ1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    ticketID = getParameterByName("tid");
    chrome.runtime.sendMessage({ msg: "myaccount_clicked", data: {"datacenter": 'AZ1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#myaccount_EU1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    ticketID = getParameterByName("tid");
    chrome.runtime.sendMessage({ msg: "myaccount_clicked", data: {"datacenter": 'EU1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#myaccount_CA1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    ticketID = getParameterByName("tid");
    chrome.runtime.sendMessage({ msg: "myaccount_clicked", data: {"datacenter": 'CA1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});
jQuery("#promote_AU1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    chrome.runtime.sendMessage({ msg: "promote_clicked", data: {"datacenter": 'AU1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#promote_CO1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    chrome.runtime.sendMessage({ msg: "promote_clicked", data: {"datacenter": 'CO1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#promote_AZ1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    chrome.runtime.sendMessage({ msg: "promote_clicked", data: {"datacenter": 'AZ1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#promote_EU1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    chrome.runtime.sendMessage({ msg: "promote_clicked", data: {"datacenter": 'EU1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

jQuery("#promote_CA1").click(function () {//listener for clicking on new button
    console.log("Button clicked");
    chrome.runtime.sendMessage({ msg: "promote_clicked", data: {"datacenter": 'CA1', "ticketID": ticketID} });//sends message to background script-content scripts can't open new tabs 
});

