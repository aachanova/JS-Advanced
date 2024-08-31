function solve(arr=[]) {
    let number = 0;
    arr
    .sort((a, b) => a.localeCompare(b))
    .forEach(n => {
        console.log(`${++number}.${n}`);        
    })
}

// function solve(names) {
//     console.log(names
//         .sort((a, b) => a.localeCompare(b))
//         .map((e, ix) => `${ix + 1}.${e}`)
//         .join('\n'));
// }

solve(["John", "Bob", "Christina", "Ema"]);
solve(["John", "Bob", "john", "Christina", "Ana", "Ema", "ana"]);
