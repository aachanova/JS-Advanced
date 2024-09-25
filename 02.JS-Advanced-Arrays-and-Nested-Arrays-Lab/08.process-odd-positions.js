function solve(arr = []) {
    let resultedArr = arr
        .filter((_, index) => index % 2 !== 0)
        .map(e => e * 2)
        .reverse();

    console.log(resultedArr.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);