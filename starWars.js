var starWars = {
	changeBackground: function () {
		var background = {
			1: "https://blurppy.files.wordpress.com/2015/09/star-wars-the-force-awakens-hd-wallpaper.png",
			2: "http://www.hdwallpaperscool.com/wp-content/uploads/2014/03/gaint-space-station-in-star-war-movie-free-download-fbulous-hd-widescreen-wallpapers-of-star-wars-movie-series.jpg",
			3: "http://i.imgur.com/Po8iPwD.jpg"
		}
		var random = Math.floor((Math.random() * 3) + 1);
		document.body.style.backgroundImage = "url('" + background[random] + "')";
	},
	changeText: function() {
		document.querySelectorAll("a[href$='/wiki/index.php/Main_Page']")[0].innerHTML = 'Jedi Temple Archives';
		document.querySelectorAll("a[href$='/?TopNav=Company']")[0].innerHTML = 'Rebel Contacts';
	}
};

starWars.changeBackground();
starWars.changeText();
