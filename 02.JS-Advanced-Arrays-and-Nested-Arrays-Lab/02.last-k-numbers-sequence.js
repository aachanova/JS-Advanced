function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {

        let currentNum = 0;

        for (let j = i - 1; j >= i - k; j--) {
            if (j < 0) {
                continue;
            }
            currentNum += arr[j];
        }

        arr.push(currentNum);
    }

    return arr;
}

solve(6, 3);
solve(8, 2);