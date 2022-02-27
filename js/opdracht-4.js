
console.log('Opdracht-4a \n ')

const tvOne = [{
    brand: 'Philips',
    type: '43PUS6504/12',
    name: '4K TV'
}];

function tvOneFunction(tvOne) {
    const tvBrandTypeName = tvOne.map((tvName) => {
        return tvName.brand + " " + tvName.type + " - " + tvName.name;
    });
    return tvBrandTypeName;
}

const nameString = tvOneFunction(tvOne);
console.log("Merk, type en naam van een TV: ", nameString);
console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Opdracht-4b \n ')

function makePrice(price) {
    return "€" + price;
}

const result = makePrice(379);
console.log("En dat voor een spotprijs van:", result);
console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Opdracht-4c \n ')

const screenInInch = [43, 50, 55, 58];

function convertedInchToCm(screenInInch) {
    const screenSizes = screenInInch.map((screenSize) => {
        return screenSize + " inch " + "(" + screenSize * 2.54 + " cm) |";
    });
    return screenSizes;
}

const convertedToCm = convertedInchToCm(screenInInch);
console.log("Screen-size in inch omgerekend naar cm:", convertedToCm);
console.log("\n")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Opdracht-4d \n ')

const displayName = document.getElementById('merk');
displayName.textContent = nameString;

const displayPrice = document.getElementById('prijs');
displayPrice.textContent = result;

const displayInch = document.getElementById('grootte');
displayInch.textContent = convertedToCm ;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Opdracht-4e \n ')

function allTvArrayFunction(inventory) {
    // make name:
    const makeNameArray = inventory.map((tvName) =>{
        return tvName.brand + " " + tvName.type + " - " + tvName.name + '\n'
            + " €"+tvName.price +" " + '\n'
            + tvName.availableSizes + " inch " +"(" + (tvName.availableSizes * 2.54) + " cm)   |   "+ '\n'+ '\n'
    });
    return makeNameArray ;
}

const allTvNameString = allTvArrayFunction(inventory);
console.log("Alle TV's:", allTvNameString);

const allTvElement = document.createElement('p');
 allTvElement.innerText = allTvNameString;
 document.body.appendChild(allTvElement);

