const searchForm = document.querySelector('.search') ; 
const cityVlue = document.querySelector('.search input');
const cityName =document.querySelector('.ville p ') ; 
const body = document.querySelector('.current') ;

//pour recupere la date 
function dateBuilder(d){ 
    let monthss =["january" , "february" , "March" , "april" , "Mai" , "june" , "july" , "august" , "September" , "october" , "november" , "december"] ; 
    let days = [ "sunday" , "Monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday", "sunday"]; 
    let day = days[d.getDay()]; 
    let date = d.getDate() ;
    let monthh = monthss[d.getMonth()] ; 
    let  year = d.getFullYear(); 
    return `${day} ${date} ${monthh} ${year}` ;  //incrementer 

}
// inistialiser..
let now = new Date() ; 
let dates = document.querySelector('.date') ; 
dates.innerHTML = dateBuilder(now); 

const convertion = (kelvin) => { 

celcius = Math.round(kelvin-273.15) ; 
return celcius ;


}
//add an event 
updateWeatherApp = (ville)=> {
    console.log(ville); 
   

    cityName.innerHTML=` <div class="ville"> <p>${ville.name}, ${ville.sys.country}</p>`


    body.innerHTML=` <div class="temp"> ${convertion(ville.main.temp)}<span > &deg;C </span></div>

    <div class="weather">${ville.weather[0].description} <span class ="logoweather"></span</div>
    <div class="hi"><span> Maximum:</span>  ${convertion(ville.main.temp_max)}&deg;C </div>
    <div class="low"><span> Minimum:</span>  ${convertion(ville.main.temp_min)}&deg;C </div>
    <div class="ressenti">  <span>Feels like : </span> ${convertion(ville.main.feels_like)}&deg;C</div>
    <div class="hum"> <span>     Humidity:</span>  ${ville.main.humidity}%
     </div>`


}

//
// function init (resultFromSerever) {
//  if (resultFromServer.weather[0].description) {                                               //pour changer le background image still don't know how to fix it 
//         case 'scattered clouds':
// document.body.style.backgroundImage = 'url("bg1.jpg")';    
//             break;
//             case 'Sunny':
//                 document.body.style.backgroundImage = 'url("animate.gif")';    
//         default:
//             break;
//     }


// }
//

// add event 

 searchForm.addEventListener('submit',function(e){

e.preventDefault();  
const citySearched = cityVlue.value.trim(); 
console.log(citySearched)  
searchForm.reset(); 

requestCity(citySearched)
.then((data)=>{ updateWeatherApp(data); })
.catch((error)=> {console.log(error) })

})