let cuaca = {
    "kunciapi": "d93d80d07ba26d404e7dcc070e7bf1e7",
    fetchcuaca: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.kunciapi
        )
    .then((response) => response.json())
    .then((data) => this.displaycuaca(data));
    },
    displaycuaca: function (data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".namatempat").innerText = name;
        document.querySelector(".awan").innerText = description;
        document.querySelector(".suhu").innerText = temp + "°C";
        document.querySelector(".kelembapan").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".angin").innerText = "Wind speed: " + speed + "%";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function(){
        this.fetchcuaca(document.querySelector(".searchbar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    cuaca.search();

});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        cuaca.search();
    }
});
alert("Selamat datang di web👋, ini adalah weather web☁, ini adalah salah satu projectku👨‍💻, click ok for continue😀👍created by Jason susanto")
// <!-- CREATED BY JASON SUSANTO -->
// <!-- SHOUT OUT TO Jonah Lawrence on Youtube -->
