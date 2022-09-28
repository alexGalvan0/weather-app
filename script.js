

const root = document.getElementById('root')
root.classList.add('container-flow','d-flex','flex-column','justify-content-center','comp-container')


function creatElment(elment='div'){
    return document.createElement(elment)
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
inputField.value = '40517'
inputField.id = 'zipInput'
formLabel.append(inputField)
formDivContainer.appendChild(formLabel)

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
    cityOutput.innerHTML = 'Lexington';
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
    kel.innerText = 'Kelvin'
    
    let fer = creatElment('p');
    fer.id = 'fere'
    fer.innerText = 'Fahrenheit'

    let cels = creatElment('p');
    cels.id = 'celsius';
    cels.innerText = 'Celsius'

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
    conOutput.innerHTML = 'Rain'
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


createFormDiv()
createCityDiv()
createTempDiv()
createConditionDiv()
createInfo()