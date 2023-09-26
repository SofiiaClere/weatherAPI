const api = {
   endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"3e1cafb82be95388a9ce34ef9b3ea648"
}

const input = document.querySelector("#input");
input.addEventListener('keypress', enter);

function enter(e){
    if (e.keyCode === 13) {
    getInfo(input.value);
    }
}

async function getInfo (data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();
  displayResult(result);
}
  
function displayResult(result){
  const city = document.querySelector("#city");
  city.textContent = `${result.name}, ${result.sys.country}`;

  getDate();

 let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;


  let conditions = document.querySelector("#conditions");
  conditions.innerHTML = `${result.weather[0].description}`;

  let variation = document.querySelector("#variation");
  variation.innerHTML = `Min:${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span>`;
}

  function getDate(){
    const myDate = new Date;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayWeek = days[d.getDay()];
    let dayToday = d.getDate();
    let year = d.getFullYear();
    let showDate = `${dayWeek}  ${dayToday}  ${month} ${year}`;
    let date = document.querySelector("#date");
    date.innerHTML = showDate;
}
