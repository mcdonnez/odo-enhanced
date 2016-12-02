var s = document;
var masthead = s.getElementsByClassName("PageMenuBar");

function addMegaBar() {
	var megaSearch = document.createElement("DIV");
	megaSearch.setAttribute("id", "megaSearch");
	masthead[0].appendChild(megaSearch);
}

/*TERMS:
 target: the URL we're directing people to
 name: the query string we're passing for our search term
 id: the ID of the search field we're creating
 searchType: the query string we pass to Odo to tell it which search page to load
 placeholder: the placeholder text we pass into the search bar
 */

function addSearch(target, name, id, searchType, placeholder) {
	var form = document.createElement("FORM");
	form.setAttribute("action", target);
	var search = document.createElement("INPUT");
	search.setAttribute("type", "text");
	search.setAttribute("name", name);
	search.setAttribute("id", id);
	search.setAttribute("placeholder", placeholder);
	var query = document.createElement("INPUT");
	query.setAttribute("type", "hidden");
	query.setAttribute("name", "b");
	query.setAttribute("value", searchType);
	var submit = document.createElement("BUTTON");
	submit.setAttribute("type", "")
	var submitText = document.createTextNode("Go");
	submit.appendChild(submitText);
	form.appendChild(search);
	form.appendChild(submit);
	form.appendChild(query);
	megaSearch.appendChild(form);
	search.addEventListener("blur", function (event) {
		var searchTerm = this.innerHTML;
		this.innerHTML = encodeURIComponent(searchTerm);
	});
}

//if omnisearch = true (in options page of odo-enhanced), enable omnisearch:
chrome.storage.sync.get('omniSearch', function (data) {
	if (data.omniSearch) {
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("css/search.css") + '">'
		);

		addMegaBar();
		addSearch("http://odo.corp.qualtrics.com/?", "autoUser", "UserSearch", "ProductToolsUserSearch", "User ID");
		addSearch("http://odo.corp.qualtrics.com/?", "autoEmail", "EmailSearch", "ProductToolsUserSearch", "Email");
		addSearch("http://odo.corp.qualtrics.com/?", "autoSurvey", "SurveySearch", "ProductToolsSurveySearch", "Survey ID");
		addSearch("http://odo.corp.qualtrics.com/wiki/index.php?", "", "KBSearch", "", "Knowledgebase Query");
	}
});