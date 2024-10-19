class ShadyCarDealership {

    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model === '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!");
        }
        this.availableCars.push({ model, year, mileage, price });

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`
    };

    sellCar(model, desiredYear) {
        let foundCar = this.availableCars.find(c => c.model === model);

        if (!foundCar) {
            return `${model} was not found!`;
        }
        let difference = desiredYear - foundCar.year // 1990 - 1950

        if (difference <= 5 && difference > 0) {
            foundCar.price -= foundCar.price * 0.10;
        } else if (difference > 5) {
            foundCar.price -= foundCar.price * 0.20;
        }

        let indexOfFoundCar = this.availableCars.findIndex(car => car.model === model);
        this.availableCars.splice(indexOfFoundCar, 1);
        this.soldCars.push({ model: foundCar.model, year: foundCar.year, mileage: foundCar.mileage, price: foundCar.price });
        this.revenue += foundCar.price;

        return `${model} (${foundCar.year}) was sold for ${foundCar.price.toFixed(2)}$`;

    };

    prepareCarForSale(model) {
        let foundCar = this.availableCars.find(c => c.model === model);

        if (!foundCar) {
            return `${model} was not found for preparation!`;
        }

        foundCar.mileage -= foundCar.mileage * 0.50;
        foundCar.price += foundCar.price * 0.30;

        return `${model} (${foundCar.year}) is prepared for sale with ${foundCar.mileage} km. - ${foundCar.price.toFixed(2)}$`
    };

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!')
        }

        if (criteria === 'year') {
            this.soldCars.sort((a, b) => b.year - a.year);
        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`];

        result.push(`${this.soldCars.length} cars sold:`)

        this.soldCars.forEach(c => result.push(`${c.model} (${c.year}) / ${c.mileage} km. / ${c.price.toFixed(2)}$`));

        return result.join('\n');
    };
}

// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', "2010", 120000, 15000));
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.addCar('Toyota Yaris', 1400, 80000, 18000));

// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('Honda Jazz'));



// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.salesJournal('model'));





