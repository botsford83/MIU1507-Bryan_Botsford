//jSon Object
var aboutMeJson = [
	{question: "What is your name?", answer: "My name is Bryan Botsford"},
	{question: "What is your chat user name, including the host?", answer: "I do not have a chat username or host."},
	{question: "In which time zone do your reside?", answer: "I reside in central time zone."},
	{question: "Why are you in the Mobile Development Program?", answer: "I enjoy coding and I believe where technology is going, everything will be mobile."},
	{question: "How comfortable are you with Javascript?", answer: "I know some, but I am a quick learner and pick things up fast."},
	{question: "How comfortable are you with Titanium?", answer: "I know enough to get by, but the more I mess around with it as time goes on, I will be more comfortable."},
	{question: "What is your favorite food?", answer: "I love sushi."},
	{question: "What is your favorite color?", answer: "My favorite color is blue."},
	{question: "What is your favortite sport?", answer: "My favorite sport is football."},
	{question: "Do your have any pets?", answer: "Yes, one dog named Kelvin."},
	{question: "What is your favorite movie?", answer: "Ace Venture When Nature Calls"},
];
//additional window for answers
var answerWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Answer"
});
//event listener for start button on main window
startButton.addEventListener("click", function(){
	navWindow.openWindow(questionWindow, {animated: true});
		//custome header
		var questionHeader = Ti.UI.createView({
			height: 30,
			backgroundColor: "#878787"
		});
		var questionText = Ti.UI.createLabel({
			text: "Questions",
			font: {fontSize: 22, fontWeight: "bold"},
			color: "#fff"
		});
		questionHeader.add(questionText);
		//Table Views
			var questionSection = Ti.UI.createTableViewSection({
				headerViewer: questionHeader
			});
			var questions = Ti.UI.createTableView({
				top: 0
			});
				//for loop to add rows using json
				for(var i = 0, j = aboutMeJson.length; i < j; i++){
					var questionRow = Ti.UI.createTableViewRow({
						title: aboutMeJson[i].question,
						desc: aboutMeJson[i].answer,
						hasChild: true
					});
					questionSection.add(questionRow);
							//Row Event Listener
							questionRow.addEventListener("click", function(){
								navWindow.openWindow(answerWindow, {animated: true});
								//console log to make sure answers are coming in correct
								console.log(this.desc);
									//Answer view and label
									var answerLabelView = Ti.UI.createView({
										backgroundColor: "#fff",
										top: 200
									});
									var answerText = Ti.UI.createLabel({
										text: this.desc,
										font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
										width: "100%",
										textAlign: "center",
										top: "center"
									});	
									answerLabelView.add(answerText);						
									//Adds items to answerWindow
									answerWindow.add(answerLabelView);
									//Opens navWindow
									navWindow.open();
							});
				};
		var aboutMeSection = [questionSection];
		questions.setData(aboutMeSection);
		questionWindow.add(questions);		
});