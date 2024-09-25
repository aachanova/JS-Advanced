function solve(str1, str2) {
    let sum = 0;
    let num1 = Number(str1);
    let num2 = Number(str2);
    for (let i = num1; i <= num2; i++) {
        sum += i;        
    }

    return sum;
}

solve('1', '5');
solve('-8', '20');