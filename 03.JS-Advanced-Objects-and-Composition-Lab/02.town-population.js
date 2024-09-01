function solve(arr) {
    let registry = {};
    for (const element of arr) {
        let [name, population] = element.split(' <-> ');
        population = Number(population);
        
        
        if (!registry[name]) {
            registry[name] = 0;
        }
        registry[name] += population;
    }
    
    for (const [key, value] of Object.entries(registry)) {
        console.log(`${key} : ${value}`);        
    }    
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);