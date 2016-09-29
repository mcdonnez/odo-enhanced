console.log("Ticket Page loaded");
var EmployeeID;
var EmployeeName;
chrome.storage.sync.get({
	eid: "",
	ename: ""
}, function(items) {
	EmployeeID = items.eid;
	EmployeeName = items.ename;


	if (window.location.href.indexOf('TicketViewer') >= 0) {

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

		console.log("In the Ticket Page");
		var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/tickets");
		var tid = window.location.href.split('tid=')[1];

		function createEventListener(eid,empname) {
			$("#owner-"+eid).bind('click',function(){MCclick(eid,empname)});
		}

		//Checkbox funcitons

		function createMCs () {
			console.log("Creating MCs for " + tid);
			getTicketOwner();
			var tbsel = "#RightMenuColumn > table.Orange"
			$(tbsel).prepend('<form action="">');
			$(tbsel).append('</form>');
			var tblength = $(tbsel + ' > tbody').find('tr').length;
			var owners = [];
			for (i = 1; i <= tblength; i++) {
					var rowsel = tbsel + " > tbody > tr:nth-child(" + i + ") > td:nth-child(1)";
				var fulname = $(rowsel).text();
				var empname = fulname.slice(6,fulname.length - 5);
				var eid = $(rowsel).find("a").attr("href").split("eid=")[1];
				owners.push(eid);
				$(rowsel).prepend('<input id="owner-' + eid + '" type="radio" name="owner">&nbsp;');
				createEventListener(eid,empname);
			}
			return 'MCscreated'
		}

		function MCclick(eid,empname){
			//HTML
			removeOwnerTag();
			addOwnerTag(eid);
			editTicketOwner(eid,empname)
		}

		function addOwnerTag(eid){
			var tbody = '#RightMenuColumn > table.Orange > tbody';
			$("#owner-" + eid).attr("checked", true);
			$(tbody).find("#owner-" + eid).parent().append('<div style="color: #04b26e; font-size: .7em; margin-top: .2em;" class="owner-specification">Ticket Owner</div>');
		}

		function removeOwnerTag(){
			$(".owner-specification").remove();
		}

		function editTicketOwner(eid,empname){
			var obj = {
				id: tid,
				owner: empname,
				eid: eid
			}
			firebaseRef.child(tid).update(obj);
		}

		function getTicketOwner() {
			console.log("Getting Ticket Owner of " + tid);
			firebaseRef.once("value", function(snapshot) {
			    firebaseTickets = snapshot.val();
			    console.log(firebaseTickets[tid]);
			    if (firebaseTickets[tid]) {
			    	addOwnerTag(firebaseTickets[tid]["eid"]);
			    } else {
			    	editTicketOwner(EmployeeID, EmployeeName);
			    	addOwnerTag(EmployeeID);
			    }
			});
		}

		//Script
		createMCs();

	}

});
