console.log("Ticket Table loaded");
var EmployeeID;
var EmployeeName;
chrome.storage.sync.get({
	eid: "",
	ename: ""
}, function(items) {
	EmployeeID = items.eid;
	EmployeeName = items.ename;
	console.log(EmployeeID);
	console.log(EmployeeName);

	if (!EmployeeID) {
		var EmployeeID = window.prompt("Please enter your employee ID","MLLOYD");
		chrome.storage.sync.set({
			eid: EmployeeID
		});
	}
	if (!EmployeeName) {
		var EmployeeName = window.prompt("Please enter your name","Max Lloyd");
		chrome.storage.sync.set({
			ename: EmployeeName
		});
	}

	if ((window.location.href.indexOf('TicketViewer') == -1) && (window.location.href.indexOf("TopNav=Tickets") >= 0)){
		console.log("In the table");
		var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/tickets");
		function addColumn () {
			var tbsel = "#9d48ef152aea2424d4a555b4c702e23e6"
			var tbselhead = tbsel + " > thead > tr"
			$(tbselhead).append('<td class="TicketDescription sorting" tabindex="0" aria-controls="9d48ef152aea2424d4a555b4c702e23e6" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Ticket Owner</td>');

			var tblength = $(tbsel).find('tr').length;
			firebaseRef.once("value", function(snapshot) {
			    firebaseTickets = snapshot.val();
				for (i=1; i<=tblength; i++){
					var tid = $(tbsel + " > tbody > tr:nth-child("+i+") > td:nth-child(7) > a").attr('ticketid');
					if (firebaseTickets[tid]) {
						var owner = firebaseTickets[tid]["owner"];
						if (firebaseTickets[tid]["eid"] == EmployeeID){
							owner = 'You';
						}
					} else {
						owner = 'You';
					}
					$(tbsel + " > tbody > tr:nth-child("+i+")").append("<td><strong>"+ owner +"</strong></td>");
				}
			});

		}

		window.setTimeout(function() {
			addColumn();
		}, 200);

	}

});