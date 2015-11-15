var Theme;
function getVars() {
  chrome.storage.sync.get({
    tm: "",
  }, function(items) {
    Theme = items.tm;
    changeTheme();
  });
}
getVars();
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
	changeBackground: function(id) {
		if (!id)
		id = Math.floor((Math.random() * Object.keys(background).length) + 1);
		document.body.style.backgroundImage = "url('" + background[id] + "')";
	},
	changeText: function () {
		document.querySelectorAll("a[href$='/wiki/index.php/Main_Page']")[0].innerHTML = 'Jedi Temple Archives';
		document.querySelectorAll("a[href$='/?TopNav=Company']")[0].innerHTML = 'Rebel Contacts';
		document.querySelectorAll("a[href$='/?TopNav=Home']")[0].innerHTML = 'Coruscant';
		document.querySelectorAll("a[href$='/?TopNav=Reports']")[0].innerHTML = 'Mission Logs';
		document.querySelectorAll("a[href$='/?TopNav=Tickets']")[0].innerHTML = 'Orders';
		//TAB-LIST
		var tabList = document.querySelectorAll("body > div.SectionTabsBarContainer > div > ul > li > a");
		for (i=0; i<tabList.length; i++) {
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
		for (i=0; i < textArea.length; i++ ) {
			if (textArea[i].innerHTML === "My Tickets:" ) {
				textArea[i].innerHTML = "Orders:";
			}
			if (textArea[i].innerHTML === "Wifi Password:" ) {
				textArea[i].innerHTML = "Slice Central Computer:";
			}
			if (textArea[i].innerHTML === "Emergencies:" ) {
				textArea[i].innerHTML = "Emergency Power:";
			}
			if (textArea[i].innerHTML === "Popular Links:" ) {
				textArea[i].innerHTML = "Common Portals:";
			}
			
		}
		//LEFT COLUMN
		var textArea = document.querySelectorAll('#LeftMenuColumn > div.Title');
		for (i=0; i < textArea.length; i++ ) {
			if (textArea[i].innerHTML === "Squawkbox" ) {
				textArea[i].innerHTML = "Comlink";
			}
			if (textArea[i].innerHTML === "Location Channels" ) {
				textArea[i].innerHTML = "Planet Arrays";
			}
			if (textArea[i].innerHTML === "Topic Channels" ) {
				textArea[i].innerHTML = "Frequencies";
			}
			if (textArea[i].innerHTML === "My Dashboard" ) {
				textArea[i].innerHTML = "Control Panel";
			}
			
		}
	},
	changeBarnaby: function() {
		var choice = Math.floor((Math.random() * Object.keys(pageLogo).length) + 1);
		document.querySelectorAll('body > div.Masthead > a > img')[0].src = pageLogo[choice];
	}
};



function changeTheme() {
	if (Theme === "starwars") {
		console.log("Star Wars loading now");
		starWars.changeBackground();
		starWars.changeText();
		starWars.changeBarnaby();
		document.head.insertAdjacentHTML('beforeend',
		    '<link rel="stylesheet" type="text/css" href="' + 
		           chrome.runtime.getURL("starWars.css") + '">'
		);
	}
}

