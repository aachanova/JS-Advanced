function sumTable() {
    let prices = document.querySelectorAll('table td:nth-child(2):not(#sum)');

    let sum = 0;

    for (let price of prices) {
        sum += Number(price.textContent);
    }

    document.getElementById('sum').textContent = sum;
}