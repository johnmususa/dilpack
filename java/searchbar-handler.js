"use strict";

window.onload = function main(argument) {
	
	const searchBoxContainer = document.querySelector('#search-box');
	const searchBoxInput = searchBoxContainer.querySelector('input');
	const displayContainer = searchBoxContainer.querySelector('#search-sg-container');
	
	const listItems = ["cat","dog","elephant","fish","gorilla","monkey","turtle","whale","aligator","donkey","horse",]

	let SEARCHING = false; 

	const onSearchEnter = (t)=>{
		const inputText = t;
		SEARCHING = true;
		searchBoxInput.disabled = true;

		if(success) {
			SEARCHING = false; 
		}

		searchBoxInput.disabled = false;
	};

	const quickSuggestions = (v) => {
		const inputValue = v.toLowerCase();
		//displayContainer

		console.log(listItems.includes(inputValue));

		
		/*for (i = 0; i < x.length; i++) {
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display="none";
			}
			else {
				x[i].style.display="list-item";				
			}
		}*/
	};

	searchBoxInput.onkeyup = (ev)=>{
		const inputValue = searchBoxInput.value;

		//detect enter key //keycode 13
		if(ev.keyCode == 13 && !SEARCHING){	
			onSearchEnter(inputValue);
		}
		else {
			quickSuggestions(inputValue);
		};
	};

	console.log(searchBoxInput);
};