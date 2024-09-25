function stringLength(first, second, third) {
    let lengthSum = first.length + second.length + third.length;
    let avgSum = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(avgSum);    
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
