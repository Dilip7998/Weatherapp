const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getweather=async(city)=>{
    weather.innerHTML = "<h3>loading...</h3>";

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(url);
    const data=await response.json();
    console.log(data);
    return showweather(data);
    
}
const showweather=(data)=>{


    
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main} </h4>
                <hr>
                <div class="extra">
                    <h5>Visibilty: ${data.visibility/1000}km </h5>
                    <h5>Humidity: ${data.main.humidity}%</h5>
                    <h5>Air Pressure: ${data.main.pressure}hPa</h5>
                 
                    
                </div>
            </div>
            
    

    
`;

}
    form.addEventListener(
        "submit",
        function(event){
            getweather(search.value);
            event.preventDefault();
        }
    )