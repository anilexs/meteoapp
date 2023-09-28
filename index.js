getWeather("bordeaux");
// requete http vers l'api pour recuperer la meteo d'une ville
function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e624eef1f6febd017baa635a70bd5dc3`)
    .then(response => {
        response.json()
        .then(data => {
            document.getElementById("city").textContent = data.name;
            document.getElementById("icon").setAttribute("src", "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
            document.getElementById("min").textContent = "Températur min: "+Math.round(data.main.temp_min - 273,15)+ " °c";
            document.getElementById("real").textContent = "Températur real: "+Math.round(data.main.temp - 273,15)+ " °c";
            document.getElementById("max").textContent = "Températur max: "+Math.round(data.main.temp_max - 273,15)+ " °c";
        })
        .catch(error => { console.log(error);});
    })
    .catch(error => {
        console.log(error);
    });
}