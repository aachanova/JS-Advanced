class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Map();
        this.outOfStock = new Set();
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new RangeError("Quantity must be greater than zero.");
        }

        if (this.items.size >= this.capacity) {
            // if ((this.items.size == this.capacity && !this.items.has(itemName)) || (this.items.size > this.capacity)) {
            throw new RangeError("The inventory is already full.");
        }

        if (this.items.has(itemName) == false) {
            this.items.set(itemName, 0);
        }

        this.items.set(itemName, this.items.get(itemName) + quantity);
        return `Added ${quantity} ${itemName}(s) to the inventory.`;

    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new RangeError("Quantity must be greater than zero.");
        }

        if (this.items.has(itemName)) {
            if (quantity > this.items.get(itemName)) {
                throw new RangeError(`Not enough ${itemName}(s) in stock.`)
            }
            this.items.set(itemName, this.items.get(itemName) - quantity);

            if (this.items.get(itemName) === 0) {
                this.items.delete(itemName);
                this.outOfStock.add(itemName);
            }

            return `Sold ${quantity} ${itemName}(s) from the inventory.`;

        } else {
            throw new RangeError(`The item ${itemName} is not available in the inventory.`);
        }
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new RangeError("Quantity must be greater than zero.");
        }

        if (this.items.has(itemName) === false) {
            this.items.set(itemName, 0)
        }

        this.items.set(itemName, this.items.get(itemName) + quantity);

        if (this.outOfStock.has(itemName)) {
            this.outOfStock.delete(itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = [`Current Inventory:`];
        for (const [itemName, quantity] of this.items) {
            result.push(`${itemName}: ${quantity}`);        
       }      

        if (this.outOfStock.size > 0) {
            result.push(`Out of Stock: ${Array.from(this.outOfStock).join(", ")}`);
        }

        return result.join('\n');
    }
    
}

// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10)); 
// console.log(manager.addItem("Hammer", 5)); 
// console.log(manager.addItem("Level", 3)); 

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10)); 
// console.log(manager.addItem("Hammer", 5)); 
// console.log(manager.addItem("Chisel", 3)); 
// console.log(manager.sellItem("Drill", 3));  
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3); 
// console.log(manager.addItem("Drill", 10)); 
// console.log(manager.addItem("Hammer", 5)); 
// console.log(manager.addItem("Chisel", 3)); 
// console.log(manager.sellItem("Drill", 3));  
// console.log(manager.restockItem("Drill", 5)); 
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.sellItem("Paintbrush", 1));
console.log(manager.sellItem("Drill", 12));
console.log(manager.getInventorySummary());

