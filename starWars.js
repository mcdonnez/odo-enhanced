var Theme;
var EmailButtonOn;
var HelpDeskTabOn;
var DesignTabOn;
var SnippetsOn;
var PlaybookTabOn;
var urlParams;

function getVars() {
	chrome.storage.sync.get({
		tm: "",
		em: "",
		hd: true,
		de: "",
		pb: "",
		s: true
	}, function (items) {
		Theme = items.tm;
		EmailButtonOn = items.em;
		HelpDeskTabOn = items.hd;
		DesignTabOn = items.de;
		PlaybookTabOn = items.pb;
		SnippetsOn = items.s;
		changeTheme();
	});
}
getVars();
//SET URL PARAMS
(window.onpopstate = function () {
	var match,
		pl = /\+/g, // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) {
			return decodeURIComponent(s.replace(pl, " "));
		},
		query = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
		urlParams[decode(match[1])] = decode(match[2]);
})();

var background = {
	1: "https://blurppy.files.wordpress.com/2015/09/star-wars-the-force-awakens-hd-wallpaper.png",
	2: "http://www.hdwallpaperscool.com/wp-content/uploads/2014/03/gaint-space-station-in-star-war-movie-free-download-fbulous-hd-widescreen-wallpapers-of-star-wars-movie-series.jpg",
	3: "http://www.thestoryoftexas.com/upload/images/events/movies/millennium-falcom-star-wars.jpg",
	4: "http://cdn1-www.comingsoon.net/assets/uploads/gallery/star-wars-episode-vii-1398790440/starwarstrailer0014.jpg",
	5: "http://i1.wp.com/www.thehappiestblogonearth.net/wp-content/uploads/2015/04/Star-Wars-The-Force-Awakens-Teaser-2-23.png?resize=1920%2C1080",
	6: "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/09/star-wars-wallpaper-9.jpg"
};
var pageLogo = {
	1: "https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2n43aCvxR8EdRUF&V=1444520373", //Darth Vader
	2: "https://mypantsareonfire.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3Dw5zn24UferpIN&V=1444519104" //Bobba Fett
}
var starWars = {
	changeBackground: function (id) {
		if (!id)
			id = Math.floor((Math.random() * Object.keys(background).length) + 1);
		document.body.style.backgroundImage = "url('" + background[id] + "')";
	},
	changeText: function () {
		document.querySelectorAll("a[href$='/wiki/index.php/Main_Page']")[0].innerHTML = 'Jedi Temple Archives';
		document.querySelectorAll("a[href$='/?TopNav=Company']")[0].innerHTML = 'Dark Side Legends';
		document.querySelectorAll("a[href$='/?TopNav=Home']")[0].innerHTML = 'Coruscant';
		document.querySelectorAll("a[href$='/?TopNav=Reports']")[0].innerHTML = 'Mission Logs';
		document.querySelectorAll("a[href$='/?TopNav=Tickets']")[0].innerHTML = 'Orders';
		//TAB-LIST
		var tabList = document.querySelectorAll("body > div.SectionTabsBarContainer > div > ul > li > a");
		for (i = 0; i < tabList.length; i++) {
			var s = tabList[i].href;
			if (s.indexOf("&a=MyProfile") > -1) {
				tabList[i].innerHTML = 'Identicard';
			}
			if (s.indexOf("&a=Home") > -1) {
				tabList[i].innerHTML = 'Comlink';
			}

		}
		//RIGHT COLUMN
		var textArea = document.querySelectorAll('#RightMenuColumn > h2');
		for (i = 0; i < textArea.length; i++) {
			if (textArea[i].innerHTML === "My Tickets:") {
				textArea[i].innerHTML = "Orders:";
			}
			if (textArea[i].innerHTML === "Wifi Password:") {
				textArea[i].innerHTML = "Slice Central Computer:";
			}
			if (textArea[i].innerHTML === "Emergencies:") {
				textArea[i].innerHTML = "Emergency Power:";
			}
			if (textArea[i].innerHTML === "Popular Links:") {
				textArea[i].innerHTML = "Common Portals:";
			}

		}
		//LEFT COLUMN
		var textArea = document.querySelectorAll('#LeftMenuColumn > div.Title');
		for (i = 0; i < textArea.length; i++) {
			if (textArea[i].innerHTML === "Squawkbox") {
				textArea[i].innerHTML = "Comlink";
			}
			if (textArea[i].innerHTML === "Location Channels") {
				textArea[i].innerHTML = "Planet Arrays";
			}
			if (textArea[i].innerHTML === "Topic Channels") {
				textArea[i].innerHTML = "Frequencies";
			}
			if (textArea[i].innerHTML === "My Dashboard") {
				textArea[i].innerHTML = "Control Panel";
			}

		}
	},
	changeBarnaby: function () {
		var choice = Math.floor((Math.random() * Object.keys(pageLogo).length) + 1);
		document.querySelectorAll('body > div.Masthead > a > img')[0].src = pageLogo[choice];
	},
	updateHeader: function () {
		var currentHeader = document.getElementsByClassName('PageTitle')[0];
		if ((urlParams["a"] == "Home") || (urlParams["a"] == null && urlParams['TopNav'] != "Tickets" && urlParams['TopNav'] != "Company" && urlParams['TopNav'] != "Reports")) {
			currentHeader.innerHTML = "Comlink";
			if (usingKB) {
				currentHeader.innerHTML = "Jedi Temple Archives";
			}
			document.getElementById('optionsTab').innerHTML = "Configure Main Computer";
		} else if (urlParams['TopNav'] === "Tickets") {
			currentHeader.innerHTML = "orders";
		} else if (urlParams['TopNav'] === "Reports") {
			currentHeader.innerHTML = "Mission Logs";
		} else if (urlParams['TopNav'] === "Company") {
			currentHeader.innerHTML = "Dark Side Legends";
		}
	},
	updateKB: function () {

	}
};

var currentUrl = window.location.href;
var usingKB = currentUrl.indexOf("index.php") != -1;
console.log(usingKB);

function changeTheme() {
	if (Theme === "starwars") {
		console.log("Star Wars loading now");
		starWars.changeBackground();
		starWars.changeText();
		starWars.changeBarnaby();
		//USE VAR SET TO CHANGE CUSTOM TABS
		if (EmailButtonOn && usingKB != true) {
			document.getElementById('newEmail').innerHTML = "Ask Darth Sidious";
		}
		if (HelpDeskTabOn && usingKB != true) {
			document.getElementById('helpdeskTab').innerHTML = "Ask Sidious";
		}
		if (DesignTabOn && usingKB != true) {
			document.getElementById('designTab').innerHTML = "Droid Factory";
		}
		if (SnippetsOn && usingKB != true) {
			//document.getElementById('SnippetsHeader').innerHTML = "Emperor's Task List";
		}
		if (PlaybookTabOn && usingKB != true) {
			document.getElementById('playbookTab').innerHTML = "Access Force";
		}
		//LOAD ADDITIONAL STYLESHEET
		document.head.insertAdjacentHTML('beforeend',
			'<link rel="stylesheet" type="text/css" href="' +
			chrome.runtime.getURL("starWars.css") + '">'
		);
		starWars.updateHeader();
	}
}
