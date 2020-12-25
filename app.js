

const Key = "09023dd1629b6de6ccb1315257f53645"  ; 
// const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=09023dd1629b6de6ccb1315257f53645" ; 

// // fetch(baseUrl)
// // .then((data)=>{console.log('response', data.json() )})
// // .catch((error)=> { 
// // console.log(error);

// // })
// DATA APPEL :!
const requestCity = async (city)=> { 
    const apiurl="http://api.openweathermap.org/data/2.5/weather"
    const query = `?q=${city}&appid=${Key}` 
//make fetch call (promise call )
const response = await fetch(apiurl+query) ; 
//promise data 

const data = await response.json() ; 
return data ; 


}


