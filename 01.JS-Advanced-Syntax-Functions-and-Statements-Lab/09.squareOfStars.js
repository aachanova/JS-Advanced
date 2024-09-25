function solve(size = 5) {
    for (let i = 0; i < size; i++) {
        let row = '* '.repeat(size);
        console.log(row.trim());                
    }
}

solve(3);
solve(1);
solve();