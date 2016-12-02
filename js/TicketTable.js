chrome.storage.sync.get({
	eid: "",
	ename: "",
	showQuniTickets: ""//Quni Ticket Breakdown
}, function (items) {
	var EmployeeID = items.eid;
	var EmployeeName = items.ename;
	var showQuniTickets = items.showQuniTickets;

	if (!EmployeeID) {
		EmployeeID = userData.employeeID;
		chrome.storage.sync.set({
			eid: EmployeeID
		});
	}
	if (!EmployeeName) {
		EmployeeName = userData.employeeName;
		chrome.storage.sync.set({
			ename: EmployeeName
		});
	}
	var tableIndex;
	if (showQuniTickets) {
		tableIndex = 2;
	}
	else {
		tableIndex = 1;
	}

	var href = window.location.href;
	if (href.indexOf('TicketViewer') == -1 && href.indexOf('SupportQualifications') == -1
		&& ((href.indexOf("a=Tickets") >= 0 && href.indexOf("tid") == -1) || href.indexOf("TopNav=Tickets") >= 0)) {
		var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/tickets");

		function addColumn() {
			var $table = $('table');
			$table.eq(tableIndex).find("thead > tr").append('<th class="TicketDescription sorting" tabindex="0" aria-controls="9d48ef152aea2424d4a555b4c702e23e6" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Ticket Owner</th>');
			var tblength = $table.eq(tableIndex).find('tr').length;
			firebaseRef.once("value", function (snapshot) {
				var firebaseTickets = snapshot.val();
				for (i = 1; i <= tblength; i++) {
					var tid = $table.eq(tableIndex).find("tbody > tr:nth-child(" + i + ") > td:nth-child(7) > a").attr('ticketid');
					if (firebaseTickets[tid]) {
						var owner = firebaseTickets[tid]["owner"];
						if (firebaseTickets[tid]["eid"] == EmployeeID) {
							owner = 'You';
						}
					} else {
						owner = 'You';
					}
					$table.eq(tableIndex).find("tbody > tr:nth-child(" + i + ")").append("<td><strong>" + owner + "</strong></td>");
				}
			});

		}

		window.setTimeout(function () {
			addColumn();
		}, 200);

	}

});