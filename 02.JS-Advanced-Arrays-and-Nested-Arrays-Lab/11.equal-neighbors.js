function solve(matrix = []) {
    let pairCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (j + 1 < matrix[i].length && matrix[i][j] === matrix[i][j + 1]) {
                pairCount++;
            }

            if (i + 1 < matrix.length && matrix[i][j] === matrix[i + 1][j]) {
                pairCount++;
            }
        }
    }

    return pairCount;
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['9', '9', '5', '4', '2'],
['9', '9', '7', '5', '4']]
);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);