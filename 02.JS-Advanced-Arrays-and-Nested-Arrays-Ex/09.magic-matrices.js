function solve(matrix=[]) {
    let firstRowSum = matrix[0].reduce((accumulator, current) => accumulator + current, 0);
    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = matrix[i].reduce((accumulator, current) => accumulator + current, 0);
        
        if (firstRowSum !== currentRowSum) {
            return false;
        }
    }
    
    for (let k = 0; k < matrix[0].length; k++) {
        let currentColSum = 0;
        for (let l = 0; l < matrix.length; l++) {
            currentColSum += matrix[l][k]
        }
        
        if (currentColSum !== firstRowSum) {
            return false;
        }
    }
    return true;
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));