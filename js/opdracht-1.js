

console.log('Opdracht-1a \n ');

const tvType = inventory.map((tvType) => {
    return tvType.type;
})

const tvTypeArray = tvType;
console.log("Dit zijn alle TV typen:", tvTypeArray);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('Opdracht-1b \n ')

const soldOut = inventory.filter((soldOut) => {
    const solded = soldOut.originalStock - soldOut.sold;
    if (solded === 0) {
        return soldOut;
    }
})

const soldOutArray = soldOut;
console.log("Helaas deze TV's zijn uitverkocht:", soldOutArray);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('Opdracht-1c \n ')

const ambilightTvs = inventory.filter((inventor) => {
    return inventor.options.ambiLight;
})

const ambiArray = ambilightTvs;
console.log("Dit zijn de TV's met het mooie AmbiLight:", ambiArray);
console.log('\n');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('Opdracht-1d \n ')

const sortPrices = inventory.sort((a, b) => {
    return a.price - b.price;
})
const totalsortPrice = sortPrices;
console.log("TV prijzen gesorteerd van laag naar hoog:", totalsortPrice);
console.log('\n')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



