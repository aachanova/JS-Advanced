function solve(matrix) {
    let primeSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        primeSum += matrix[i][i];
        secondarySum += matrix[matrix.length - 1 - i][i];       
    }
    console.log(`${primeSum} ${secondarySum}`);    
}

solve([[20, 40],
[10, 60]]
);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);