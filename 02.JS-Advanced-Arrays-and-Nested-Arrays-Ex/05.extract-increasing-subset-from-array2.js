function solve(arr = []) {
    return increasingSequence = arr.reduce((prev, curr) => {
        if (prev.length === 0 || prev[prev.length - 1] <= curr) {
            prev.push(curr);
        }
        return prev;
    }, []);
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

solve([1,
    2,
    3,
    4]
);

solve([20,
    3,
    2,
    15,
    6,
    1]
);