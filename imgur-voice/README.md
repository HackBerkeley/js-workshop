# imgur-voice
Javascript workshop for Cal Hacks and Hackers @ Berkeley

[imgur-voice](https://carpetfizz.github.io/imgur-voice/) takes advantage of `webkitSpeechRecognition` in Google Chrome to search [imgur.com](http://imgur.com/)

## Obtaining an imgur Client ID
In this workshop we will be accessing imgur's API (Application Programming Interface) to fetch images based on a search parameter. To do this, we must obtain a Client ID from imgur.com. Popular APIs do this to combat spam and ensure the authenticity of its consumers.

1. Create an account on [imgur.com](http://imgur.com/)
2. Register your application by filling out this [form](https://api.imgur.com/oauth2/addclient). 
   * Application Name: `YourNameImgurVoice`
   * Authorization Type: `Anonymous usage without user authorization`
   * Authorization Callback URL: `https://localhost:8000` (This one doesn't really matter. Enter any valid URL)
3. Find your Client ID by going to [apps](https://imgur.com/account/settings/apps). Make sure you're logged in!
4. Now we just need to put our unique Client ID into our code. Change the line that says `	imgurRequest.setRequestHeader("Authorization", "Client-ID your_client_id");` by replacing `your_client_id` with the one you just generated.
