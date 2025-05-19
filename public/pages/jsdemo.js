/* Colour changing squares - Constants*/
const square = document.querySelector(".square");

const pink = document.querySelector(".pink");
const purple = document.querySelector(".purple");
const blue = document.querySelector(".blue");
const reset1 = document.querySelector(".reset1");

/* Change box colour */
pink.addEventListener('click', () => {
    square.style.backgroundColor = 'pink'
})
purple.addEventListener('click', () => {
    square.style.backgroundColor = 'purple'
})
blue.addEventListener('click', () => {
    square.style.backgroundColor = 'blue'
})
reset1.addEventListener('click', () => {
    square.style.backgroundColor = '#000000'
})

/* HTML Form
const colour = document.getElementById("colour");
const cansofpaint = document.getElementById("cansofpaint");
const name = document.getElementById("name");
const paintprice = 2.00;*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("paintForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const colour = document.getElementById("colour").value;
        const cans = parseInt(document.getElementById("cansofpaint").value);
        const name = document.getElementById("name").value;
        const pricePerCan = 2.00;
        const totalCost = (cans * pricePerCan).toFixed(2);

        const message = `${name} ordered ${cans} can(s) of ${colour} paint. Total cost: £${totalCost}`;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>${message}</p>`;
    });
});

