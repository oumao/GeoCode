
let searchForm = document.getElementById('search-form');
let placeInput = document.querySelector('#thisPlace');



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


searchForm.addEventListener('submit', ($e) => {
	$e.preventDefault();

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+placeInput.value+'&appid=07f14227f66725d22cbd22efeb82150a')
	.then( response => response.json())
	.then( data => {
		var nameOutput = data['name'];
		var windOutput = data['wind']['speed'];
		var tempOutput = data['main']['temp'];
		var humidOutput = data['main']['humidity'];
		var weatherDesc = data['weather'][0]['description'];

		document.getElementById('count-name').innerHTML = nameOutput;
		document.getElementById('speed').innerHTML = 'Wind speed: '+ windOutput;
		document.getElementById('temp').innerHTML = 'Temperatures: ' + tempOutput;
		document.getElementById('humid').innerHTML = 'Humidity: ' + humidOutput;
		document.getElementById('desc').innerHTML = 'Weather: ' + weatherDesc;


	})
	.catch( error => alert("Wrong City name Try again!"));
});


// converting Celcius to Farenheit
// getElementById('celcius').addEventListener('click', () => {

// });

// // converting Farenheit to Celcius
// let farenConv = document.getElementById('farenH');

// farenConv.addEventListener('click', () => {
// 	console.log('Hello world');
// });