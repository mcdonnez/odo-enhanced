var background = {
	1: "https://blurppy.files.wordpress.com/2015/09/star-wars-the-force-awakens-hd-wallpaper.png",
	2: "http://www.hdwallpaperscool.com/wp-content/uploads/2014/03/gaint-space-station-in-star-war-movie-free-download-fbulous-hd-widescreen-wallpapers-of-star-wars-movie-series.jpg",
	3: "http://www.thestoryoftexas.com/upload/images/events/movies/millennium-falcom-star-wars.jpg",
	4: "http://cdn1-www.comingsoon.net/assets/uploads/gallery/star-wars-episode-vii-1398790440/starwarstrailer0014.jpg",
	5: "http://i1.wp.com/www.thehappiestblogonearth.net/wp-content/uploads/2015/04/Star-Wars-The-Force-Awakens-Teaser-2-23.png?resize=1920%2C1080",
	6: "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/09/star-wars-wallpaper-9.jpg"
};

var starWars = {
	changeBackground: function(id) {
		if (!id)
		id = Math.floor((Math.random() * Object.keys(background).length) + 1);
		document.body.style.backgroundImage = "url('" + background[id] + "')";
	},
	changeText: function () {
		document.querySelectorAll("a[href$='/wiki/index.php/Main_Page']")[0].innerHTML = 'Jedi Temple Archives';
		document.querySelectorAll("a[href$='/?TopNav=Company']")[0].innerHTML = 'Rebel Contacts';
	}
};

starWars.changeBackground();
starWars.changeText();
