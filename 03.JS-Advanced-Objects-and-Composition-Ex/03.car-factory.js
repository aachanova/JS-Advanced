// { model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 }

// { model: 'VW Golf II',
//     engine: { power: 90,
//               volume: 1800 },
//     carriage: { type: 'hatchback',
//                 color: 'blue' },
//     wheels: [13, 13, 13, 13] }

function carFactory(car) {
    let resultedCar = {};
    let engine = {}
    let carriage = {};

    resultedCar.model = car.model;

    if (car.power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else if (car.power <= 200) {
        engine = { power: 200, volume: 3500 };
    }

    resultedCar.engine = engine;

    resultedCar.carriage = {
        type: car.carriage,
        color: car.color
    };
    let wheelsize = car.wheelsize;
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    wheelsize = Math.floor(wheelsize);
    resultedCar.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return resultedCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);

