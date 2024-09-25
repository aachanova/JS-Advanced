function solve(arr) {
    let currentNumber = 0;
    let resultedArr = [];
    arr.forEach(e => {
        ++currentNumber;
        if (e === 'add') {
            resultedArr.push(currentNumber);
        } else (resultedArr.pop())
    });

    if (resultedArr.length == 0) {
        resultedArr = ['Empty'];
    }
    console.log(resultedArr.join('\n'));
}

// solve(['add',
//     'add',
//     'add',
//     'add']
// );

// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// );

solve(['remove',
    'remove',
    'remove']
);