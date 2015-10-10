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

/**
	searchImgur(phrase)
	- Create XHR request
	- When the request is ready, check if it's successful
	- Retrieve the data from the response
	- Send the data to the success handler
*/
function searchImgur(phrase){

	var imgurRequest = new XMLHttpRequest();
	
	/* Whenever the imgurRequest changes its ready state, we call imgurRequest.onreadystatechange */
	imgurRequest.onreadystatechange = function(){
		/* Make sure the HTTP request has ended (4) and is successful (200) */
		if(imgurRequest.readyState == 4 && imgurRequest.status == 200){
			var imgurResponse = imgurRequest.response.data;
			if(imgurResponse.length > 0){
				statusText.innerHTML = "Showing results for: "+phrase
				/* Send the data to the success handler for render */
				successHandler(imgurResponse);
			}else{
				statusText.innerHTML = "No results found for: "+phrase
			}
		}
	}

	/* Generate the GET request with our query string, the phrase */
	imgurRequest.open("GET","https://api.imgur.com/3/gallery/search?q="+phrase);
	/* Add our client id in the header for authentication purposes */
	imgurRequest.setRequestHeader("Authorization", "Client-ID a672a0e950c3b87");
	/* We are expecting the result to be a JSON object */
	imgurRequest.responseType = 'json';
	/* Send the request to imgur.com ! */
	imgurRequest.send();
} 

/**
	successHandler(data)
	- Gets the image links from each image
	- Create HTML <img> element and render them on the page
*/
function successHandler(data){
	/* Clear the container every time, in case there are old images still there */
	imageContainer.innerHTML = "";
	for(var i=0; i<data.length; i++){

		/* Make sure that each data has a type property (so we know it's an image) and that it's safe for work ;) */
		if(data[i].type && !data[i].nsfw){

			/* Create an HTML image element and add the image link as the source */
			var image = new Image()
			image.setAttribute("class","imgur-image col-md-3");
			image.src= data[i].link;
			imageContainer.appendChild(image);
		}
	}
}

/**
	toggleListen()
	- Starts and stops webkitSpeechRecognition
*/
function toggleListen(){
	if(isListening){
		recognition.stop();
		isListening = false;
		listenButton.innerHTML = "Start Listening";
	}else{
		recognition.start();
		isListening = true;
		listenButton.innerHTML = "Stop Listening";
	}
}


/* Run the init() function to set everything up */
init();