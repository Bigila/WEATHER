
document.querySelector("input").addEventListener("keyup", (event) => {

  
    if(event.key === "Enter") {
        showData();
    }

});



document.querySelector("button").addEventListener("click", () => {
        showData(); 
});


function showData() {
    const keyID = "07f750dbcedbb82896d2b3db0da7ea08" ;
  
    let units = 'metric' ;
    let city = document.querySelector("input").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${keyID}` ;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error ("there is an error"); 
        }
        return response.json();
    })
    .then(data => {
        
        document.querySelector(".imge").style.opacity = 1;
        document.querySelector(".items").style.opacity = 1;
        
        document.querySelector("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png ` ;   
        document.querySelector(".items").innerHTML = `
        <p>Place Name: <span class="city">${data.name}</span></p>
        <p>weather: <span class="weath">${data.weather[0].description}</span></p>
        <p>Lat: <span class="maxtemp">${data.coord.lat}</span></p>
        <p>Log: <span class="mintemp">${data.coord.lon}</span></p>
        <p> Temp: <span class="maxtemp">${data.main.temp}&deg;C</span></p>
        <p class="end">Humidity: <span class="humid">${data.main.humidity}%</span></p>
        ` ;
    
    })
    .catch(err => {
        console.error(err);
    })
}




