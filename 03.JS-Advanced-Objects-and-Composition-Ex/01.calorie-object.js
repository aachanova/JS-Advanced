function calorieInfo(foodInfo) {
    let foods = {};

    for (let i = 0; i < foodInfo.length; i += 2) {
           let food = foodInfo[i];        
            let caloriesIn100gr = Number(foodInfo[i + 1]);

        foods[food] = caloriesIn100gr;
    }

    console.log(foods);    
}

calorieInfo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieInfo(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
