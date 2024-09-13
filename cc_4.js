//Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: "Guitar", price: 250, quantity: 90, lowStockLevel: 10 },
    { name: "Piano", price: 2400, quantity: 20, lowStockLevel: 5 },
    { name: "Drum Set", price: 800, quantity: 15, lowStockLevel: 3 },
    { name: "Violin", price: 1000, quantity: 9, lowStockLevel: 10 },
    { name: "Saxophone", price: 750, quantity: 40, lowStockLevel: 8 }
];



//Task 2: Create a Function to Display Product Details

function displayProductDetails(i) {
    console.log(`Instrument's name: ${i.name}`);
    console.log(`Price: $${i.price}`);
    console.log(`Quantity in stock: ${i.quantity}`);
    // checking the status of the product's stock. If true then Low Stock, if false then In Stock
    console.log(`Stock status: ${i.quantity <= i.lowStockLevel ? "Low Stock, Order More!" : "In Stock"}`);
};

// displaying the function results for each product in the inventory array
console.log("Product Information List:");

inventory.forEach(displayProductDetails);



//Task 3: Create a Function to Update Product Stock After Sales

let unitsSold = 15

function updateStock(i,unitsSold) {
    i.quantity =- unitsSold

    // check if the current stock is out of stock or low stock
    if (i.quantity <= 0) {
        return(`${i.name} is out of stock!!!`);
    } else if (i.quantity <= i.lowStockLevel) {
        return(`${i.name} is running low on stock!!!`);
    }
}

// displaying the updateStock function results for each product in the inventory array
console.log("Update of product stock after sales:")

inventory.forEach((updateStock) =>
    console.log(updateStock));

//Task 4: Create a Function to Check Low Stock Products

function checkLowStock(i) {
    if (i.quantity < i.lowStockLevel) {
        return (`${i.name} is low on stock`);
    }
}

// displaying the checkLowStock function
console.log("Instrument that are low on stock:")

    inventory.forEach((checkLowStock) =>
        console.log(checkLowStock));
    