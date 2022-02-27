console.log('Opdracht-2a-b \n ');

// nog te verkopen
function calculateTvToSell () {
    const tvSoldArray = inventory.map((television) => {
        return television.originalStock - television.sold;
    })

    let outcome = 0;
    for (let i =0; i < tvSoldArray.length; i ++){
        const tvsoldNumber = tvSoldArray[i];
        outcome = outcome + tvsoldNumber;
    }
    return outcome;
}

const totalCount = calculateTvToSell();
console.log("Totaal voorraad",totalCount)


const toSellDisplay = document.getElementById('tvs-to-sell');
toSellDisplay.textContent = totalCount + " Tv's" ;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// verkochte tv's

console.log('Opdracht-2c-d \n ');

function calculateTvSell () {
    const tvArray = inventory.map((television) => {
        return television.sold;
    })

    let outcome = 0;
    for (let i =0; i < tvArray.length; i ++){
        const tvNumber = tvArray[i];
        outcome = outcome + tvNumber;
    }
    return outcome;
}

const count  = calculateTvSell();
console.log("Totaal verkocht",count)


const sellDisplay = document.getElementById('total-sold-till-now');
sellDisplay.textContent = count + " Tv's" ;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ingekochte tv's

console.log('Opdracht-2e \n ');

function calculateTvTotal () {
    const tvSoldArray = inventory.map((television) => {
        return television.originalStock;
    })

    let outcome = 0;
    for (let i =0; i < tvSoldArray.length; i ++){
        const tvSoldNumber = tvSoldArray[i];
        outcome = outcome + tvSoldNumber;
    }
    return outcome;
}

const total = calculateTvTotal();
console.log("Totaal ingekocht",total)


const totalDisplay = document.getElementById('total-tvs');
totalDisplay.textContent = total + " Tv's" ;