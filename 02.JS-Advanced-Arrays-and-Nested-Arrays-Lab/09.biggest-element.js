function solve(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    
    for (const row of matrix) {
        let currentMax = Math.max(...row);
        if (currentMax > biggest) {
            biggest = currentMax;
        }
    };

    return biggest;
}


solve([[20, 50, 10],
[8, 33, 145]]
);

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);