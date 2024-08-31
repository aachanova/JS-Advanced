function roadRunner(speed, area) {
    let limit;
    let output;
    let difference;
    let status;

    switch (area) {
        case 'residential':
            limit = 20;
            break;
        case 'city':
            limit = 50;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    } else if (speed <= (limit + 20)) {
        status = 'speeding';
    } else if (speed <= (limit + 40)) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    difference = speed - limit;
    output = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    console.log(output);
}

roadRunner(40, 'city');
roadRunner(21, 'residential');
roadRunner(120, 'interstate');
roadRunner(200, 'motorway');