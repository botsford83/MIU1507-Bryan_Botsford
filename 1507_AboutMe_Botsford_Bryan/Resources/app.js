//sets background
Titanium.UI.setBackgroundColor('#000');
//creates main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "About Me"
});
//navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
//additional windows
var questionWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "Questions"
});

var startButton = Ti.UI.createButton({
	title: "Get Started",
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	color: "#6a0000",
	height: 100,
	backgroundColor: "#fff",
	borderColor: "#fff",
	width: "100%"
});

var load = require("question");
var load1 = require("jSon");

mainWindow.add(startButton);
navWindow.open();