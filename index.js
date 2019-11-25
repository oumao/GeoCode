
let searchForm = document.getElementById('search-form');
let placeInput = document.querySelector('#thisPlace');





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
		var lonOut = data['coord']['lon'];
		var latOut = data['coord']['lat'];

		document.getElementById('farenH').style.display = "inline";

		document.getElementById('count-name').innerHTML = nameOutput;
		document.getElementById('speed').innerHTML = 'Wind speed: '+ windOutput;
		document.getElementById('temp').innerHTML = 'Temperatures: ' + tempOutput + ' &deg;K';
		document.getElementById('humid').innerHTML = 'Humidity: ' + humidOutput;
		document.getElementById('desc').innerHTML = 'Weather: ' + weatherDesc;
		document.getElementById('long').innerHTML = lonOut;
		document.getElementById('lati').innerHTML = latOut;

		let farenHeit = (tempOutput-273.15)*(9/5) + 32;

		let celCius = (farenHeit-32)*(5/9);

		// Converting to FarenHeit
		document.getElementById('farenH').addEventListener('click', () => {
			document.getElementById('temp').innerHTML = 'Temperatures: ' + farenHeit.toFixed(2) + ' &deg;F';
			document.getElementById('farenH').style.display = 'none';
			document.getElementById('celC').style.display = 'inline';
		});

		// Converting to Degrees Celcius
		document.getElementById('celC').addEventListener('click', () => {
			document.getElementById('temp').innerHTML = 'Temperatures: ' + celCius.toFixed(2) + ' &deg;C';
			document.getElementById('celC').style.display = 'none';
			document.getElementById('farenH').style.display = 'inline';
		});

		

	})
	.catch( error => alert("Wrong City name Try again!"));
});


