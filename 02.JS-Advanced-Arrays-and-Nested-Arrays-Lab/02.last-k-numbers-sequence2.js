function solve(n, k) {
    let arr = [1];
    
    for (let i = 1; i < n; i++) {
        let currentElement = 0;
        let lastKElements = arr.slice(-k);
        lastKElements.forEach(e => currentElement += e);
        arr.push(currentElement);
    }

    return arr;
}

let result = solve(8, 2);
console.log(result);
