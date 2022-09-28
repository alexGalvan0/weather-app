const zipInput = document.getElementById('zipInput');
const getWeatherBtn =document.getElementById('getWeatherBtn');
const cityOutput = document.getElementById('cityOutput');
const kelvin = document.getElementById('kelvin');
const fere = document.getElementById('fere')
const celsius = document.getElementById('celsius');
let condition = document.getElementById('condition');
let icon = document.getElementById('icon') 

function createHtmlElement(element='div',nameClass){
    return document.createElement(element).classList.add(nameClass)
}

createHtmlElement('input')

 async function getUserInput(){
    let zip = zipInput.value.toString();
    const key = '933f7703450958683b430c05ee91f80b';
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${key}`
 
    let resp = await axios.get(url);
    let data = resp;
    console.log(data)
    



    let cityName = data.data.name;
    let fereTemp = data.data.main.temp;

    let celsiTemp = (parseInt(fereTemp) - 32 ) * 5/9
    let kelvinTemp = (parseInt(fereTemp) - 32) * 5/9 + 273.15

    let conditionTemp = data.data.weather[0].description
    
    let iconId = data.data.weather[0].icon


    cityOutput.innerHTML = cityName

    fere.innerText = `Fahrenheit: ${Math.ceil(fereTemp)}`
    celsius.textContent = `Celsius: ${Math.ceil(celsiTemp)}`
    kelvin.textContent = `Kelvin: ${Math.ceil(kelvinTemp)}`
    
    condition.textContent = conditionTemp;

    icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`

}

getWeatherBtn.addEventListener('click',getUserInput)