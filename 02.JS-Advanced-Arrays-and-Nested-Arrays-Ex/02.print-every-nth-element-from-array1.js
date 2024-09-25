function solve(arr, number) {
    let resultedArray = [];
    for (let i = 0; i < arr.length; i +=number) {
        resultedArray.push(arr[i]);
    }

    return resultedArray;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);

solve(['dsa',
    'asd',
    'test',
    'tset'],
    2
);

solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);