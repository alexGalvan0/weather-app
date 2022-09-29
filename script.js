const root = document.getElementById('root')
const body = document.body
root.classList.add('container','d-flex','flex-column','justify-content-center','comp-container')

function creatElment(elment='div'){
    return document.createElement(elment)
}
function loading() {

    //load container
    let loadContainer = creatElment()
    loadContainer.classList.add('spinner-border', 'text-primary')
    body.appendChild(loadContainer)

    //spinner
    let spinner = creatElment('span')
    spinner.classList.add('visually-hidden')
    spinner.innerHTML = 'Loading...'
    loadContainer.appendChild(spinner)
}
function createFormDiv(){

    //formContainer
    let formDivContainer = creatElment('div')
    formDivContainer.classList.add('row','row-zip')
    root.appendChild(formDivContainer)

    //form column
    let formCol = creatElment()
    formCol.classList.add('col', 'd-flex', 'justify-content-center')
    formDivContainer.appendChild(formCol)

    //form label
    let formLabel = creatElment('label');
    formLabel.innerHTML='ZIP: '

    //form input
    let inputField = creatElment('input')
    inputField.type = 'text'
    //inputField.value = '40517'
    inputField.id = 'zipInput'
    formLabel.append(inputField)
    formCol.appendChild(formLabel)

    //button
    let btn = creatElment('button')
    btn.innerHTML = 'Get Weather'
    btn.classList.add('btn', 'btn-primary')
    btn.id = 'getWeatherBtn';
    formCol.appendChild(btn)
}
function createCityDiv(){
    //city row
    let cityDivRow = creatElment()
    cityDivRow.classList.add('row','row-city')
    root.appendChild(cityDivRow)

    //city col
    let cityCol = creatElment()
    cityCol.classList.add('col', 'd-flex', 'justify-content-center', 'flex-column')
    cityDivRow.appendChild(cityCol)

    //cityText
    let city = creatElment('h3');
    city.innerHTML = 'City';
    cityCol.appendChild(city)

    //city output
    let cityOutput = creatElment('p');
    cityOutput.id = 'cityOutput'
    cityCol.appendChild(cityOutput)

}
function createTempDiv(){
    //temp row
    let tempRow = creatElment();
    tempRow.classList.add('row', 'row-temp');
    root.appendChild(tempRow)

    //temp col
    let tempCol = creatElment()
    tempCol.classList.add('col','d-flex', 'flex-row', 'justify-content-center', 'flex-column')
    tempRow.appendChild(tempCol);

    //temps
    let temp = creatElment('h3');
    temp.innerText = 'TEMPERATURE';
    tempCol.appendChild(temp)

    //tempOutputs
    let kel = creatElment('p');
    kel.id = 'kelvin'
    
    let fer = creatElment('p');
    fer.id = 'fere'

    let cels = creatElment('p');
    cels.id = 'celsius';

    tempCol.appendChild(kel)
    tempCol.appendChild(fer)
    tempCol.appendChild(cels)
}
function createConditionDiv(){

    //condition row
    let conditionRow = creatElment();
    conditionRow.classList.add('row' ,'row-condition');
    root.appendChild(conditionRow);

    //condition col
    let conditionCol = creatElment();
    conditionCol.classList.add('col', 'd-flex' ,'justify-content-center','flex-column')
    conditionRow.appendChild(conditionCol)

    //condition 
    let condi = creatElment('h3');
    condi.innerText= 'CONDITION'
    conditionCol.appendChild(condi)

    //condition output
    let conOutput = creatElment('p');
    conOutput.id = 'condition';
    conditionCol.appendChild(conOutput)
}
function createInfo(){

    //info row
    let infoRow = creatElment();
    infoRow.classList.add('row', 'row-info')
    root.appendChild(infoRow)

    //info col
    let infoCol = creatElment();
    infoCol.classList.add('col', 'd-flex', 'justify-content-center', 'flex-column')
    infoRow.appendChild(infoCol);

    //info header
    let infoHeader = creatElment('h3');
    infoHeader.innerText = 'OTHER INFO'
    infoCol.appendChild(infoHeader);

    //img
    let infoIcon = creatElment('img');
    infoIcon.id = 'icon';
    infoIcon.src = "";
    infoIcon.alt = 'Icon'
    infoCol.appendChild(infoIcon);
}
setTimeout(createFormDiv, 5000)
setTimeout(createCityDiv,5000)
setTimeout(createTempDiv,5000)
setTimeout(createConditionDiv,5000)
setTimeout(createInfo,5000)
loading()

//get html elements
const zipInput = document.getElementById('zipInput');
const getWeatherBtn =document.getElementById('getWeatherBtn');
const cityOutput = document.getElementById('cityOutput');
const kelvin = document.getElementById('kelvin');
const fere = document.getElementById('fere')
const celsius = document.getElementById('celsius');
let condition = document.getElementById('condition');
let icon = document.getElementById('icon') 

const key = '933f7703450958683b430c05ee91f80b';
 async function getUserInput(){
    let zip = zipInput.value.toString();
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${key}`
 
    let resp = await axios.get(url);
    let data = resp;
    

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
//get User Location

navigator.geolocation.getCurrentPosition(async (position) =>{
    lat = position.coords.latitude
    lon =  position.coords.longitude

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    let resp = await axios.get(url)
    let data = resp
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
    
})






//addEventListener('DOMContentLoaded',getUserInput)
getWeatherBtn.addEventListener('click',getUserInput)