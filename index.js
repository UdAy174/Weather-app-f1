console.log("hello");

API_KEY=`dfcfc74b98ae483f8e5b7e777f336474`



async function fetchWeatherDetails(){
    
    try{let city ="delhi";

    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data = await response.json();
    console.log("Weather data:-> " , data);
    
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`

    document.body.appendChild(newPara);}

    catch(err){
        //handle
    }
}




