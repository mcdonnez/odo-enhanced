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
			var EmployeeID = userData.employeeID;
			chrome.storage.sync.set({
				eid: EmployeeID
			});
		}
		if (!EmployeeName) {
			var EmployeeName = userData.employeeName;
			chrome.storage.sync.set({
				ename: EmployeeName
			});
		}

	if ((window.location.href.indexOf('TicketViewer') == -1) && (((window.location.href.indexOf("a=Tickets") >= 0) && (window.location.href.indexOf("tid")==-1))|| (window.location.href.indexOf("TopNav=Tickets")>=0))){
		console.log("In the table");
		var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/tickets");
		function addColumn () {
			$('table').eq(1).find("thead > tr").append('<th class="TicketDescription sorting" tabindex="0" aria-controls="9d48ef152aea2424d4a555b4c702e23e6" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Ticket Owner</th>');
			var tblength = $('table').eq(1).find('tr').length;
			firebaseRef.once("value", function(snapshot) {
			    firebaseTickets = snapshot.val();
				for (i=1; i<=tblength; i++){
					var tid =$('table').eq(1).find("tbody > tr:nth-child("+i+") > td:nth-child(7) > a").attr('ticketid');
					if (firebaseTickets[tid]) {
						var owner = firebaseTickets[tid]["owner"];
						if (firebaseTickets[tid]["eid"] == EmployeeID){
							owner = 'You';
						}
					} else {
						owner = 'You';
					}
					$('table').eq(1).find("tbody > tr:nth-child("+i+")").append("<td><strong>"+ owner +"</strong></td>");
				}
			});

		}

		window.setTimeout(function() {
			addColumn();
		}, 200);

	}

});