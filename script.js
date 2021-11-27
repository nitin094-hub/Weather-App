weatherApi={
    apikey:"fa2187900d379d8c427f8e216883da52",
    fetchWeather:function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`)
        .then((response)=>response.json())
        .then(data=>this.displayWeather(data,city));
    },
    displayWeather:function(data,city){
        let temprature=data.main["temp"];
        let humidity=data.main["humidity"];
        let windSpeed=data.wind["speed"];
        // console.log(tempratureMax,tempratureMin,humidity,windSpeed);
        document.getElementById("city").textContent=city;
        document.getElementById("temp").textContent=temprature;
        document.getElementById("Humidity").textContent=humidity;
        document.getElementById("wind").textContent=windSpeed;
    }
}
// {"coord":{"lon":-104.9847,"lat":39.7392},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":11.03,"feels_like":8.97,"temp_min":5.55,"temp_max":15.66,"pressure":1015,"humidity":30,"sea_level":1015,"grnd_level":839},"visibility":10000,"wind":{"speed":1.76,"deg":218,"gust":1.78},"clouds":{"all":80},"dt":1637988056,"sys":{"type":1,"id":3449,"country":"US","sunrise":1637935035,"sunset":1637969872},"timezone":-25200,"id":5419384,"name":"Denver","cod":200}

document.getElementById("search").addEventListener("click",()=>{
    weatherApi.fetchWeather(document.getElementById("searchInput").value);
})