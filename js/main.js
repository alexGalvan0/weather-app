const root = document.getElementById('root')
const body = document.body;

function createElements({ type = 'div', text = '', parent = '', classes = 'added', id = '', alt, src, setAttribute } = {}) {
    let element = document.createElement(type)
    element.innerHTML = text;
    element.id = id
    element.alt = alt
    element.src = src
    element.classList.add(classes)
    parent.appendChild(element)
    return element
}
root.classList.add('container', 'd-flex', 'flex-column', 'comp-container', 'text-center', 'opacity-75')

function createSpiner() { createElements({ classes: ('spinner-border', 'text-light', 'p-5', 'modal', 'position-absolute', 'text-center'), id: 'spinner', parent: body }) }

let formDivContainer = createElements({ classes: ('row', 'row-zip'), parent: root });
let formCol = createElements({ classes: ('col-xl-6', 'col-sm-12', 'd-flex', 'justify-content-center', 'opacity-100', 'flex-wrap'), parent: formDivContainer });
let formLabel = createElements({ type: 'label', text: 'Zip:', parent: root });
let inputField = createElements({ type: 'input', id: 'zipInput', setAttribute: ('maxlength', '5'), parent: formLabel })
let btn = createElements({ type: 'button', text: 'Get Weather', classes: ('btn', 'btn-primary', 'opacity-100', 'text-center'), id: 'getWeatherBtn', parent: formCol });

let cityDivRow = createElements({ classes: ('row', 'row-city'), parent: root });
let cityCol = createElements({ classes: ('col-xl-6', 'col-sm-12', 'd-flex', 'flex-row', 'justify-content-center', 'flex-column', 'text-center', 'opacity-100'), parent: cityDivRow });
let city = createElements({ type: 'h3', text: 'City', parent: cityCol });
let cityOutputs = createElements({ type: 'p', id: 'cityOutput', parent: cityCol })
let conditionRow = createElements({ classes: ('row', 'row-condition'), parent: root })
let conditionCol = createElements({ classes: ('col-xl-6', 'col-sm-12', 'd-flex', 'justify-content-center', 'flex-column', 'opacity-100'), parent: conditionRow })
let condi = createElements({ type: 'h3', text: 'Condition', parent: conditionCol })
let conOutput = createElements({ type: 'p', id: 'condition', parent: conditionCol })

let tempRow = createElements({ classes: ('row', 'row-temp'), parent: root })
let temCol = createElements({ classes: ('col-xl-6', 'col-sm-12', 'd-flex', 'flex-row', 'justify-content-center', 'flex-column', 'text-center', 'opacity-100'), parent: tempRow })
let temp = createElements({ type: 'h3', text: 'Temperature', parent: temCol })
let kel = createElements({ type: 'p', id: 'kelvin', parent: temCol })
let fer = createElements({ type: 'p', id: 'fere', parent: temCol })
let cels = createElements({ type: 'p', id: 'celsius', parent: temCol })

let infoRow = createElements({ classes: ('row', 'row-info'), parent: root })
let infoCol = createElements({ classes: ('col-xl-6', 'col-sm-12', 'opacity-100'), parent: infoRow })
let infoHeader = createElements({ type: 'h3', text: 'Other Info', parent: infoCol })
let infoIcon = createElements({ type: 'img', id: 'icon', src: "", alt: "Icon", parent: infoCol })

//get html elements
const spinner = document.getElementById('spinner');
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


}, () => {

    alert('add zip')
})



addEventListener('DOMContentLoaded', getUserInput)
getWeatherBtn.addEventListener('click', getUserInput)
