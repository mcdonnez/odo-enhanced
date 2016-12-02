// Saves options to chrome.storage
function save_options() {
	var url = document.getElementById('url').value;
	var key = "prefSite";
	var obj = {};
	obj[key] = url;
	chrome.storage.sync.set(obj, function () {
	});
}

document.getElementById('url').addEventListener('change', save_options);

function openOptions() {
	chrome.tabs.create({'url': 'chrome://extensions/?options=' + chrome.runtime.id});
}

document.getElementById("openOptions").addEventListener("click", openOptions);