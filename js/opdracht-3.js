console.log('Opdracht-3 \n \n ');

// Deze opdracht wegens tijdgebrek door de uitwerkingen verkregen!

function brand(tvArray) {
    const brandsList = document.getElementById('merken');

    const listItems = tvArray.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    brandsList.innerHTML = `${listItems.join('')}`;
}

brand(inventory);