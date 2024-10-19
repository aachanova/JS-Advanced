class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }

  addBikes(bikes) {
    let bikeBrands = new Set();
    for (const bike of bikes) {
      let [brand, quantity, price] = bike.split('-');

      price = parseInt(price);
      quantity = parseInt(quantity);

      let existingBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);

      if (existingBikeIndex == -1) {
        this.availableBikes.push({ brand, quantity, price });
        bikeBrands.add(brand);
      } else {
        let existingBike = this.availableBikes[existingBikeIndex];

        existingBike.quantity += quantity;

        if (existingBike.price < price) {
          existingBike.price = price;
        }
      }
    }

    return `Successfully added ${Array.from(bikeBrands).join(', ')}`;
  }

  rentBikes(selectedBikes) {
    let totalPrice = 0;
    let unavailableBikes = false;
    for (const bike of selectedBikes) {
      let [brand, quantity] = bike.split('-');
      quantity = parseInt(quantity);

      let foundBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);
      let foundBike = this.availableBikes[foundBikeIndex];

      if (foundBikeIndex !== -1 && (this.availableBikes[foundBikeIndex].quantity >= quantity)) { // ???
        totalPrice += this.availableBikes[foundBikeIndex].price * quantity;
        this.availableBikes[foundBikeIndex].quantity -= quantity;
      } else {
        unavailableBikes = true;
      }
    }
    if (unavailableBikes) {
      return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
    } else {
      return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
  }

  returnBikes(returnedBikes) {
    let notFound = false;
    for (const bike of returnedBikes) {
      let [brand, quantity] = bike.split('-');

      quantity = parseInt(quantity);

      let foundBikeIndex = this.availableBikes.findIndex(bike => bike.brand === brand);

      if (foundBikeIndex === -1) {
        notFound = true;
        
      } else {
        this.availableBikes[foundBikeIndex].quantity += quantity;

      }
    }
    
    if (notFound) {
      return 'Some of the returned bikes are not from our selection.';
    } else {
      return 'Thank you for returning!';
    }
  }

  revision() {
    let result = [];
    result.push('Available bikes:');

    let sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

    for (const bike of sortedBikes) {
      result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
    }
    result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

    return result.join('\n');
  }
}


//Input 1
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

// Output 1
//  Successfully added Mountain Bike, City Bike, Electric Bike


// Input 2
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));


// Output 2
//  Successfully added Mountain Bike, City Bike, Electric Bike
//  Enjoy your ride! You must pay the following amount $800.00.


// Input 3
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());

//  Output 3
//  Successfully added Mountain Bike, City Bike, Electric Bike
//  Some of the bikes are unavailable or low on quantity in the bike rental service.
//  Some of the returned bikes are not from our selection.
//  Available bikes:
//  City Bike quantity: 8 price: $100
//  Mountain Bike quantity: 4 price: $150
//  Electric Bike quantity: 11 price: $400
// The name of the bike rental service is MyBikes, and the location is CityCenter.

// Input 4
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
// console.log(rentalService.revision());


// Output 4
//  Successfully added Mountain Bike, City Bike, Electric Bike
//  Enjoy your ride! You must pay the following amount $1250.00.
//  Thank you for returning!
//  Available bikes:
//  City Bike quantity: 8 price: $100
//  Mountain Bike quantity: 1 price: $150
//  Electric Bike quantity: 11 price: $400
//  The name of the bike rental service is MyBikes, and the location is CityCenter.



