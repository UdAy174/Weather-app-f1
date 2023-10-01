const yourWeatherTab = document.querySelector("[data-yourWeather]");
const searchWeatherTab = document.querySelector("[data-SearchWeather");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector("grant-location-container");
const searchForm = document.querySelector("[data-seacthForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//iniatially varaibles needed
let currentTab = yourWeatherTab;
API_KEY=`dfcfc74b98ae483f8e5b7e777f336474`;
currentTab.classList.add("current-tab");

//switch tab function
function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains(active)){
            //if search form is not visible then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }

        else{
            //else case- we were at search page and now make weather tab visible
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //now I'm at weather tab, nowSearch Weather to display weather we will check local storage first
            // getfromSessionStorage(); 
        }
    }
};

yourWeatherTab.addEventListener("click",()=>{
    switchTab(yourWeatherTab);
});

searchWeatherTab.addEventListener("click",()=>{
    switchTab(searchWeatherTab);
})


//check if coordinates
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // if local coordinates are not there
        grantAccessContainer.classList.add("active");
    } 

    else{
        const coordinates = JSON.parse(localCoordinates);
        fecthUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        // renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

// function renderWeatherInfo(){
//     const cityName = 
// }












// function switchTab(clickedTab){
//     apiErrorContainer.classList.remove("active");

//     if(clickedTab !== currentTab){
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");
//     } 

//     if(!searchForm.classList.contains("active")){
//         userInfoContainer.classList.remove("active");
//         grantAccessContainer.classList.remove("active");
//         searchForm.classList.add("active");
//     }

//     else{
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remover("active");
//     }
// }

// function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } 
//     else {
//         console.log("No geolocation support");
//     }
// }

// function showPosition(position) {
//     let lat =  position.coords.latitude ;
//     let long = position.coords.longitude;

//     console.log(lat);
//     console.log(long);
// } 




