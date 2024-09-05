function solve() {
    let text = document.getElementById('text').value.toLowerCase();
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let textArr = text.split(' ');
    let resultedString = [];

    if (convention === 'Camel Case') {
        resultedString = textArr[0];
        for (let i = 1; i < textArr.length; i++) {
            resultedString += textArr[i].charAt(0).toUpperCase() + textArr[i].substring(1);
        }
    } else if (convention === 'Pascal Case') {
        for (let i = 0; i < textArr.length; i++) {
            resultedString += textArr[i].charAt(0).toUpperCase() + textArr[i].substring(1);
        }
    } else {
        resultedString = 'Error!'
    }

    result.textContent = resultedString;
}