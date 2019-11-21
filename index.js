
let searchButton = document.getElementById('search');
let placeInput = document.querySelector('input');

const urlString = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBEXI57STEvdC3BZhM7JEDdh5gFmClbGJM";


	function initMap(){

		var mapy = new google.maps.Map(document.getElementById('maparea'), 
			{
				zoom: 4, 
				center: {lat: 42.3601, lng: -71.0589}
			});

		var marker = new google.maps.Marker({
			position: {lat: 42.3601, lng: -71.0589}, 
			map: mapy
		});
	}

searchButton.addEventListener('click', () => {

	fetch('https://samples.openweathermap.org/data/2.5/weather?q=' + placeInput + '&appid=b6907d289e10d714a6e88b30761fae22')
	.then( response => response.json())
	.then( data => console.log(data))
	.catch( error => console.log(error));
});


converting Celcius to Farenheit
getElementById('celcius').addEventListener('click', () => {

});

converting Farenheit to Celcius
let farenConv = document.getElementById('farenH');

farenConv.addEventListener('click', () => {
	console.log('Hello world');
});