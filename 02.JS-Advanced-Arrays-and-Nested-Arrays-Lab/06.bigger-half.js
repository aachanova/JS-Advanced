function solve(arr=[]) {
    const halfIndex = arr.length / 2;
    
    let result = arr
    .sort((a, b) => a - b)
    .slice(halfIndex);

    return result;  
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);