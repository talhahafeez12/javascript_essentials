let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let gr1;
let gr2;
let gr3;

function calculateTotal() {
    gr1 = parseFloat(document.getElementById('gr1').value);
    gr2 = parseFloat(document.getElementById('gr2').value);
    gr3 = parseFloat(document.getElementById('gr3').value);

    let total = gr1 + gr2 + gr3;
    document.getElementById('grresult').innerText = `The total amount is: ${total}`;
}