//sets background
Titanium.UI.setBackgroundColor('#86E8BC');
//creates main window
var rowList = [];
var noteWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	title: "Utility"
});
noteWindow.open;

var notesField = Ti.UI.createTextField({
	top:15,
	width:250,
	height:35,
 	hintText:'Enter List',
	clearOnEdit:"true",
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ONFOCUS
});
noteWindow.add(notesField);
	 
var submit = Ti.UI.createButton({
	top:60,
	left:210,
	width:75,
	height:30,
	title:'Submit',
	font:{fontFamily:'Trebuchet MS', fontWeight:'bold'},
	color:'#800000'
});
noteWindow.add(submit);

var save = Ti.UI.createButton({
	top: submit.height + submit.top,
	left:210,
	width:75,
	height:30,
	title:'Save',
	font:{fontFamily:'Trebuchet MS', fontWeight:'bold'},
	color:'#800000'
});
noteWindow.add(save);
		
var clear = Ti.UI.createButton({
	top: save.height + save.top,
	left:210,
	width:75,
	height:30,
	title:'Clear',
	font:{fontFamily:'Trebuchet MS', fontWeight:'bold'},
	color:'#800000'
});
noteWindow.add(clear);
	 //Functions
	submit.addEventListener('click', function(){
		rowList.push({title: notesField.value}); 
		var row = Ti.UI.createTableViewRow({height:'auto', width: "100%", selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE});
	    var label = Ti.UI.createLabel({text:notesField.value, color:'#111', width: row.width, height:'auto',left:7});
	    row.add(label); 
	    tableView.appendRow(row);
	    notesField.blur();
	    
	    console.log(label.text);

		console.log(rowList.title);
	        //Clear Function
	    	clear.addEventListener('click', function(){
		    	var rd = []; tableView.data = rd;
		    	rowList.length = 0;
		    });
		    
		    //Save Function
		    save.addEventListener("click", function(){
		    	var saveWindow = Ti.UI.createWindow({
					backgroundColor: "fff",
					title: "Saved Shopping List"
				});
				//Table Views
				var saveSection = Ti.UI.createTableViewSection({
					
				});
				var back = Ti.UI.createButton({
					top: 60,
					left:210,
					width:75,
					height:30,
					title:'Back',
					font:{fontFamily:'Trebuchet MS', fontWeight:'bold'},
					color:'#800000'
				});
				
				var saveTable = Ti.UI.createTableView({
					top: back.height + back.top + 30
				});
				
				
					//for loop to add rows using json
					for(g in rowList) {
						var saveRow = Ti.UI.createTableViewRow({
							title: rowList[g].title,
							color: "#CC9933"
						});
								//adds row to the section
						saveSection.add(saveRow);
						var saveTableSection = [saveSection];
					};
				//Function
				back.addEventListener("click", function(){	
					saveWindow.close();
				});
				
			saveTable.setData(saveTableSection);
			saveWindow.add(saveTable,back);
			saveWindow.open();	
		    });
		    
		
	});


	    
	    	 
var tableView = Ti.UI.createTableView({
	top: clear.height + clear.top + 10,
	width:295,
	height:305,
	backgroundColor:'white',
	borderRadius:5
});
noteWindow.add(tableView);

noteWindow.open();