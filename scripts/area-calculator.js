function calculateTriangleArea(){
    // get triangel base value
    const baseFiled = document.getElementById('triangle-base');
    const baseValueText = baseFiled.value;
    const base = parseFloat(baseValueText)
    console.log(base);
    baseFiled.value = '';

    // get triangle height value

    const heightFeld = document.getElementById('triangle-height');
    const heightValueText = heightFeld.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    heightFeld.value = '';

    // validate input
    if(isNaN(base) || isNaN(height)){
        alert('Pleasse insert a number');
        return;
    }

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const totalTriangleArea = document.getElementById('triangle-area');
    totalTriangleArea.innerText = area;
    addToCalculationEntry('Triangle', area)
}


function calculateRectangleArea(){
    const widthFeld = document.getElementById('rectangle-width');
    const widthValueText = widthFeld.value;
    const width = parseFloat(widthValueText);
    console.log(width);
    widthFeld.value = '';

    const lengthFeld = document.getElementById('rectangle-length');
    const lengthValueText = lengthFeld.value;
    const length = parseFloat(lengthValueText);
    console.log(length);
    lengthFeld.value = '';

    // validate input
    if(isNaN(width) || isNaN(length)){
        alert('Pleasse insert a number');
        return;
    }

    const area = width * length; 
    console.log(area);

    const totalRactangelArea = document.getElementById('rectangle');
    totalRactangelArea.innerText = area;
    addToCalculationEntry('Ractangel', area)
}



// reuseable function ----> reduce duplicate code

function getInputValue(filedId){
    const inputFiled = document.getElementById(filedId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText);
    inputFiled.value = '';
    return value;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    // validate input
    if(isNaN(base) || isNaN(height)){
        alert('Pleasse insert a number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
}

function setElementInnerText(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


function calculateEllipseArea(){
    const large = getInputValue('ellipse-major-radius');
    const short = getInputValue('ellipse-minor-radius');

    // validate input
    if(isNaN(large) || isNaN(short)){
        alert('Pleasse insert a number');
        return;
    }
    const area = Math.PI * large * short;
    const areaTowDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTowDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse', areaTowDecimal)
}


function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    // validate input
    if(isNaN(perimeter) || isNaN(apothem)){
        alert('Pleasse insert a number');
        return;
    }
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area', area);

    // add to calculation entry
    addToCalculationEntry('Pentagon', area)
}

function calculateRhombusArea(){
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');

    if(isNaN(base) || isNaN(height)){
        alert('Pleasse insert a number');
        return;
    }
    const area = 0.5 * base * height;
    setElementInnerText('rhombus-area', area);

    // add to calculation entry
    addToCalculationEntry('Rhombus', area)
}



// add to calculation entry
/**
     * 1. get the element wher you want to add the dynamic HTML
     * 2. create an element you want to add
     * 3. if needed some class
     * 4. set inner HTML. it could be dynamic templet string
     * 5. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const pera = document.createElement('p');
    const count = calculationEntry.childElementCount;
    pera.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup>`;
    calculationEntry.appendChild(pera);
}



// Data validation
/**
 * 1. set the proper type of the input filed. ( number, data, email)
 * 2. chek type using typeof
 * 3. NaN means: Not a Number. isNaN is cheeking whether the input is a number or not
 */