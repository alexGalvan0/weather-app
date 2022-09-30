const root = document.getElementById('root')
const body = document.body;

root.classList.add('container', 'd-flex', 'flex-column', 'comp-container', 'text-center', 'opacity-75')

let spinner;
function createTitle() {
    return
}
function createSpinner() {
    spinner = creatElment();
    spinner.classList.add('spinner-border', 'text-light', 'p-5', 'modal', 'position-absolute', 'text-center')
    body.appendChild(spinner)
}
function creatElment(elment = 'div') {
    return document.createElement(elment)
}
function createFormDiv() {

    //formContainer
    let formDivContainer = creatElment('div')
    formDivContainer.classList.add('row', 'row-zip')
    root.appendChild(formDivContainer)

    //form column
    let formCol = creatElment()
    formCol.classList.add('col-xl-6', 'col-sm-12', 'd-flex', 'justify-content-center', 'opacity-100', 'flex-wrap')
    formDivContainer.appendChild(formCol)

    //form label
    let formLabel = creatElment('label');
    formLabel.innerHTML = 'Zip: '

    //form input
    let inputField = creatElment('input')
    inputField.type = 'text'

    inputField.setAttribute('maxlength', '5');

    //inputField.value = '40517'
    inputField.id = 'zipInput'
    formLabel.append(inputField)
    formCol.appendChild(formLabel)

    //button
    let btn = creatElment('button')
    btn.innerHTML = 'Get Weather'
    btn.classList.add('btn', 'btn-primary', 'opacity-100', 'text-center')
    btn.id = 'getWeatherBtn';
    formCol.appendChild(btn)
}
function createCityDiv() {
    //city row
    let cityDivRow = creatElment()
    cityDivRow.classList.add('row', 'row-city')
    root.appendChild(cityDivRow)

    //city col
    let cityCol = creatElment()
    cityCol.classList.add('col-xl-6', 'col-sm-12', 'd-flex', 'flex-row', 'justify-content-center', 'flex-column', 'text-center', 'opacity-100')
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
function createTempDiv() {
    //temp row
    let tempRow = creatElment();
    tempRow.classList.add('row', 'row-temp');
    root.appendChild(tempRow)

    //temp col
    let tempCol = creatElment()
    tempCol.classList.add('col-xl-6', 'col-sm-12', 'd-flex', 'flex-row', 'justify-content-center', 'flex-column', 'text-center', 'opacity-100')
    tempRow.appendChild(tempCol);

    //temps
    let temp = creatElment('h3');
    temp.innerText = 'Temperature:';
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
function createConditionDiv() {

    //condition row
    let conditionRow = creatElment();
    conditionRow.classList.add('row', 'row-condition');
    root.appendChild(conditionRow);

    //condition col
    let conditionCol = creatElment();
    conditionCol.classList.add('col-xl-6', 'col-sm-12', 'd-flex', 'justify-content-center', 'flex-column', 'opacity-100')
    conditionRow.appendChild(conditionCol)

    //condition 
    let condi = creatElment('h3');
    condi.innerText = 'Condition'
    conditionCol.appendChild(condi)

    //condition output
    let conOutput = creatElment('p');
    conOutput.id = 'condition';
    conditionCol.appendChild(conOutput)
}
function createInfo() {

    //info row
    let infoRow = creatElment();
    infoRow.classList.add('row', 'row-info')
    root.appendChild(infoRow)

    //info col
    let infoCol = creatElment();
    infoCol.classList.add('col-xl-6', 'col-sm-12', 'opacity-100')
    infoRow.appendChild(infoCol);

    //info header
    let infoHeader = creatElment('h3');
    infoHeader.innerText = 'Other Info:'
    infoCol.appendChild(infoHeader);

    //img
    let infoIcon = creatElment('img');
    infoIcon.id = 'icon';
    infoIcon.src = "";
    infoIcon.alt = 'Icon'
    infoCol.appendChild(infoIcon);
}
createFormDiv()
createCityDiv()
createTempDiv()
createConditionDiv()
createInfo()

//get html elements
const zipInput = document.getElementById('zipInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityOutput = document.getElementById('cityOutput');
const kelvin = document.getElementById('kelvin');
const fere = document.getElementById('fere')
const celsius = document.getElementById('celsius');
let condition = document.getElementById('condition');
let icon = document.getElementById('icon')

const key = '933f7703450958683b430c05ee91f80b';

async function getUserInput() {
    createSpinner();
    let zip = zipInput.value.toString();

    //dont run unless zip input 
    if (zip == '') {
        return
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${key}`
    let data;
    try {
        let resp = await axios.get(url);
        data = resp;
    } catch {
        alert('Invalid Zip')
        spinner.classList.add('hidden');
    }

    let cityName = data.data.name;
    let fereTemp = data.data.main.temp;

    let celsiTemp = (parseInt(fereTemp) - 32) * 5 / 9
    let kelvinTemp = (parseInt(fereTemp) - 32) * 5 / 9 + 273.15

    let conditionTemp = data.data.weather[0].description

    let iconId = data.data.weather[0].icon


    cityOutput.innerHTML = cityName

    fere.innerText = ` Fahrenheit: ${Math.ceil(fereTemp)}`
    celsius.textContent = ` Celsius: ${Math.ceil(celsiTemp)}`
    kelvin.textContent = ` Kelvin: ${Math.ceil(kelvinTemp)}`

    condition.textContent = conditionTemp;

    icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    spinner.classList.add('hidden');

}
//get User Location

navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude
    lon = position.coords.longitude

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    let resp = await axios.get(url)
    let data = resp
    let cityName = data.data.name;
    let fereTemp = data.data.main.temp;

    let celsiTemp = (parseInt(fereTemp) - 32) * 5 / 9
    let kelvinTemp = (parseInt(fereTemp) - 32) * 5 / 9 + 273.15

    let conditionTemp = data.data.weather[0].description

    let iconId = data.data.weather[0].icon


    cityOutput.innerHTML = cityName

    fere.innerText = `Fahrenheit: ${Math.ceil(fereTemp)}`
    celsius.textContent = ` Celsius: ${Math.ceil(celsiTemp)}`
    kelvin.textContent = ` Kelvin: ${Math.ceil(kelvinTemp)}`

    condition.textContent = conditionTemp;

    icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    spinner.classList.add('hidden')

}, () => {
    spinner.classList.add('hidden');
    alert('add zip')
})



addEventListener('DOMContentLoaded', getUserInput)
getWeatherBtn.addEventListener('click', getUserInput)
