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


function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    } 

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }

    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remover("active");
    }
}

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
        console.log("No geolocation support");
    }
}

function showPosition(position) {
    let lat =  position.coords.latitude ;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
} 




