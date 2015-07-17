//sets background
Titanium.UI.setBackgroundColor('#000');
//creates main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Dog Furmation"
});

//navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
//additional windows
var breedWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "Dog Breeds"
});
var infoWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "Infurmation"
});
var resultWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "Infurmation"
});
//buttons
var fetchButton = Ti.UI.createButton({
	title: "Fetch",
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	color: "#6a0000",
	height: 70,
	top: 290,
	//borderColor: "#fff",
	//backgroundColor: '#fff',
	width: "70%"
});
var breedRow;
//loads additional .js files
var load = require("dogInfo");
mainWindow.add(fetchButton);
navWindow.open();