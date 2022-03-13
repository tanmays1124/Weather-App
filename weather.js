let weather={
    "apikey":"cece4d563c86fc37e4759c6ace7c4047",
    fetchweather: function(city)
    {
        fetch('http://api.openweathermap.org/data/2.5/weather?q='
         +city+ '&unit=metric&appid='
         +this.apikey)
         .then((response) => response.json())
         .then((data)=>this.displayweather(data));
    },
    displayweather: function(data)
    {
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind; 
    document.querySelector('.city').innerHTML='Weather in '+name;

    document.querySelector('.icon').src='https://openweathermap.org/img/wn/'+icon+'@2x.png';
    document.querySelector('.description').innerText=description;
    document.querySelector('.temp').innerText=Number.parseFloat(temp-273.15).toFixed(2)+"°C";
    document.querySelector('.humidity').innerText="Humidity: "+humidity+"%";
    document.querySelector('.wind').innerText="Wind Speed: "+speed+"Kmph"; 
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')"    
},
    search: function()
    {
        this.fetchweather(document.querySelector('.search_bar').value);
    }
};
document.querySelector('.button')
.addEventListener("click",function()
{
    weather.search();
});
document.querySelector(".search_bar").addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        weather.search();
    }
})


weather.fetchweather("Kolkata");