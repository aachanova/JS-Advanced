function solve(arr) {
    let caloriesInfo = {};
    for (let i = 0; i < arr.length - 1; i += 2) {
        caloriesInfo[arr[i]] = Number(arr[i + 1]);
    }

    console.log(caloriesInfo);   
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);