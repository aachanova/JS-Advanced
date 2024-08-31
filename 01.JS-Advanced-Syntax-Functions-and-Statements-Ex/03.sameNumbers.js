function sameNumbers(number) {
    const arr = number.toString().split('').map(Number);
    let isSame = true;
    let sum = 0;
    const firstElement = arr[0];

    for (let element of arr) {
        if (element !== firstElement) {
            isSame = false;
        }

        sum += element;
    }

    console.log(isSame);
    console.log(sum);    
}

sameNumbers(2222222);
sameNumbers(1234);