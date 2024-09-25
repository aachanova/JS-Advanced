function solve(array) {
    let sum = 0;
    let recSum = 0;
    let sequence = '';
    
    for (const element of array) {
        sum += element;
        recSum += 1 / element;
        sequence += element;
    }

    console.log(sum);
    console.log(recSum);
    console.log(sequence);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
