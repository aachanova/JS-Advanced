function solve(arr=[], firstStr, secondStr) {
    let startIndex = arr.indexOf(firstStr);
    let endIndex = arr.indexOf(secondStr);
    
    let resultedArr = arr.slice(startIndex, endIndex + 1);
    
    return resultedArr;    
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);