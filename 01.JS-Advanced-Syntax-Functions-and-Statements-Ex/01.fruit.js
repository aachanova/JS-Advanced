function fruit(fruit, weightInGram, pricePerKg) {
    const money = pricePerKg * (weightInGram / 1000);

    console.log(`I need $${money.toFixed(2)} to buy ${(weightInGram / 1000).toFixed(2)} kilograms ${fruit}.`);    
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);