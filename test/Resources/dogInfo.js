
var dogInfo = {"breed" : [	
							{"name": "Weimaraner",
							 "titles": [	{"infoTitle": "Description",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Temperament",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Height & Weight",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Health Problems",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Exercise",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Origin",
											 "infoDesc": "blah"
											},
										  ],
							},										  
							{"name": "Siberian Husky",
							 "titles": [	{"infoTitle": "Description",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Temperament",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Height & Weight",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Health Problems",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Exercise",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Origin",
											 "infoDesc": "blah"
											},
										  ],
							},
							{"name": "Labrador Retriever",
							 "titles": [	{"infoTitle": "Description",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Temperament",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Height & Weight",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Health Problems",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Exercise",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Origin",
											 "infoDesc": "blah"
											},
										  ],
							},
							{"name": "Boxer",
							 "titles": [	{"infoTitle": "Description",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Temperament",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Height & Weight",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Health Problems",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Exercise",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Origin",
											 "infoDesc": "blah"
											},
										  ],
							},
							{"name": "Rottweiler",
							 "titles": [	{"infoTitle": "Description",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Temperament",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Height & Weight",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Health Problems",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Exercise",
											 "infoDesc": "blah"
											},
											{"infoTitle": "Origin",
											 "infoDesc": "blah"
											},
										  ],
							},
						 ]
}; //ends dogInfo

fetchButton.addEventListener("click", function(){
	navWindow.openWindow(breedWindow, {animated: true});
	//custom header
	var breedHeader = Ti.UI.createView({
		height: 30,
		backgroundColor: "#878787"
	});
	var breedText = Ti.UI.createLabel({
		text: "Dog Breeds",
		font: {fontSize: 22, fontWeight: "bold"},
		color: "#fff"
	});
		//adds text to header
		breedHeader.add(breedText);
	//Table Views
	var breedSection = Ti.UI.createTableViewSection({
		headerViewer: breedHeader
	});
	var breedTable = Ti.UI.createTableView({
		top: 0
	});
		//for loop to add rows using json
		for(g in dogInfo.breed) {
			//console.log(dogInfo.breed[g].name);
		    console.log(dogInfo.breed[g].titles[g].infoTitle);
		   
		}


});