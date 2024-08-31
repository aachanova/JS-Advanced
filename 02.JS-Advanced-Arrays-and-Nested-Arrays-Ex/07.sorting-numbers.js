function solve(arr=[]) {
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i += 2) {
        arr.splice(i, 0, arr.pop());
    }

    return arr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);