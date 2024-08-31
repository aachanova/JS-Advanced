function solve(param) {
    let paramType = typeof(param);
    if (paramType == 'number') {
        let circleArea = (param ** 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    } else {        
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`)
    }
}

solve(5);
solve('name');