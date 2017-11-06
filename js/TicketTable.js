chrome.storage.sync.get({
	eid: "",
	ename: "",
	showQuniTickets: "" //Quni Ticket Breakdown
}, function(items) {
	var EmployeeID = items.eid;
	var EmployeeName = items.ename;
	var showQuniTickets = items.showQuniTickets;

	if (!EmployeeID && userData) {
		EmployeeID = userData.employeeID;
		chrome.storage.sync.set({
			eid: EmployeeID
		});
	}
	if (!EmployeeName && userData) {
		EmployeeName = userData.employeeName;
		chrome.storage.sync.set({
			ename: EmployeeName
		});
	}
	var tableIndex;
	if (showQuniTickets) {
		tableIndex = 2;
	} else {
		tableIndex = 1;
	}

	var href = window.location.href;
	if (href.indexOf('TicketViewer') == -1 && href.indexOf('SupportQualifications') == -1 &&
		((href.indexOf("a=Tickets") >= 0 && href.indexOf("tid") == -1) || href.indexOf("TopNav=Tickets") >= 0)) {

		function addColumn() {
			var $table = $('table');
			$table.eq(tableIndex).find("thead > tr").append('<th class="TicketDescription sorting" tabindex="0" aria-controls="9d48ef152aea2424d4a555b4c702e23e6" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Ticket Owner</th>');
			var tblength = $table.eq(tableIndex).find('tr').length;
		}

	}

});