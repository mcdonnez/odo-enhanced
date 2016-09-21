console.log("Ticket Page loaded");
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


	if (window.location.href.indexOf('TicketViewer') >= 0) {

		if (!EmployeeID) {
			var EmployeeID = userData.employeeID;
			chrome.storage.sync.set({
				eid: EmployeeID
			});
		}
		if (!EmployeeName) {
			var EmployeeName = null;
			// chrome.storage.sync.set({
			// 	ename: EmployeeName
			// });
		}

		console.log("In the Ticket Page");
		var firebaseRef = new Firebase("https://odo-enhanced.firebaseio.com/tickets");
		var tid = window.location.href.split('tid=')[1];
		function setCookie(cname, cvalue, exdays) {
		    if (exdays=="") {
		    	expires = "";
		    }
		    else {
		    	var d = new Date();
		    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    	var expires = "expires="+ d.toUTCString();
		    }
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length,c.length);
		        }
		    }
		    return "";
		}

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
				//var tbnum = i;
				var rowsel = tbsel + " > tbody > tr:nth-child(" + i + ") > td:nth-child(1)";
				var fulname = $(rowsel).text();
				var empname = fulname.slice(6,fulname.length - 5);
				var eid = $(rowsel).find("a").attr("href").split("eid=")[1];
				owners.push(eid);
				//var funcpair = "'" + i + "','" + empname + "'";
				$(rowsel).prepend('<input id="owner-' + eid + '" type="radio" name="owner">&nbsp;');
				//taken out: onclick="MCclick('+funcpair+')"
				createEventListener(eid,empname);
				//console.log("$('"+rowsel+" > input').bind('click',function(){MCclick('"+tbnum.toString()+"','"+empname+"')});")
			}
			//$("#owner-1").bind('click',function(){MCclick("1","ML")});
			//$("#owner-2").bind('click',function(){MCclick("2","TS")});
			return 'MCscreated'
		}

		function MCclick(eid,empname){
			// var oldcookie = getTicketOwner(tid);
			// if (oldcookie != ""){
				// var oldrownum = oldcookie.split('-')[1];
				// console.log("old row " + oldrownum);
				// console.log("new row " + tbrow);
				// var oldrow = '#RightMenuColumn > table.Orange > tbody > tr:nth-child(' + oldrownum + ') > td:nth-child(1)';
				// removeOwnerTag(oldrow);
			// }


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
			// var fontsel = rowsel + ' > span';
			// $(fontsel).remove();
			$(".owner-specification").remove();
		}

		function editTicketOwner(eid,empname){
			// var newcookie = empname+"-"+tbrow;
			// console.log('newcookie');
			// setCookie(tid,newcookie,7);
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
