//sets background
Titanium.UI.setBackgroundColor('#CC9933');
//creates main window
var mainWindow = Ti.UI.createWindow({
	backgroundImage: "/images/editHouse.jpg",
	title: "Dog Furmation"
});

//navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
	color: "CC9933"
});
//additional windows
var breedWindow = Ti.UI.createWindow({
	backgroundColor: '#CC9933',
	title: "Dog Furmation"
});
var infoWindow = Ti.UI.createWindow({
	backgroundColor: '#CC9933',
	title: "Dog Furmation"
});
var resultWindow = Ti.UI.createWindow({
	backgroundColor: '#336699',
	title: "Dog Furmation"
});
//buttons
var fetchButton = Ti.UI.createButton({
	title: "Enter",
	font: {fontSize: 30, fontFamily: "Stencil", fontWeight: "bold"},
	color: "#336699",
	height: 70,
	top: 140,
	left: 60,
	//borderColor: "#fff",
	//backgroundColor: '#fff',
	//width: "40%"
});
var breedRow;
//loads additional .js files
var load = require("dogInfo");
var load1 = require("breedWindow");
var load2 = require("infoWindow");
var load3 = require("resultWindow");
mainWindow.add(fetchButton);
navWindow.open();