var recognition; /* webkitSpeechRecognition */
var isListening = false; /* button switch */

/**
	Getting the DOM objects we want to eventually change
*/
var listenButton = document.getElementById("listen-button");
var statusText = document.getElementById("status-text");
var imageContainer = document.getElementById("image-container");

/**
	init()
	- Sets up webkitSpeechRecognition
	- Gets words that webkitSpeechRecognition picks up
	- Creates XHR (AJAX) request to Imgur
	- Queries Imgur with words
	- Sends results to successHandler()
*/
function init() {
	// Check if webkitSpeechRecognition exists. It's currently only available on Google Chrome
	if(!window.webkitSpeechRecognition){
		alert("Webkit Speech Recognition not supported! Are you using the latest version of Chrome?");
	}else{
		recognition = new webkitSpeechRecognition();
		/* Continuously listen for speech until the recognition stops */
		recognition.continuous = true;
		/* Once recognition starts, recognition.onstart is called back. We change the status text */
		recognition.onstart = function(event){
			statusText.innerHTML = "Listening..."
		}
		/* Once recognition gets a result, recognition.onresult is called back. We get the words */
		recognition.onresult = function(event){
			if(event.results.length > 0){			
				/**
					Results refer to the words that webkitSpeechRecognition thought we said.
					Even though we expect only one result, we use the loop so that the code can be reused.
				*/
				for(var i=event.resultIndex; i<event.results.length; i++){
					
					/* Within the first result, we fetch the phrase with the highest confidence, which is always the first */
					var phrase = event.results[i][0].transcript;
					
					/* Now that we have the phrase, we can search imgur.com with it*/
					searchImgur(phrase);

					statusText.innerHTML = "Searching "+"\""+phrase+"\""+" ...";

				}
			}else{
				statusText.innerHTML = "Didn't quite catch that, try again!";
			}
		}
	}
}