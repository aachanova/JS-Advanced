function solve(a, b) {
    let GCD = a % b;
    
    while (GCD !== 0) {
        a = b;
        b = GCD;
        GCD = a % b;
    }

    console.log(b);    
}

// function gcd(firstNum, secondNum) {
//     while (secondNum) {
//       const temp = secondNum;
//       secondNum = firstNum % secondNum;
//       firstNum = temp;
//     }
  
//     console.log(firstNum);
//   }

//solve(15, 5);
solve(15, 4);
solve(2154, 458);