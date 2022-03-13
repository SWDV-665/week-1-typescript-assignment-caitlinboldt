// Groceries

interface GroceryProps {
    id: number;
    name: string;
    cost: number;
    quantity: number;
}

class Grocery implements GroceryProps {
    id: number;
    name: string;
    cost: number;
    quantity: number;

    constructor(id: number, name: string, cost: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.quantity = quantity;
    }
}

function calculateGroceryItemCost(cost: number, quantity: number) {
    const totalCost = cost * quantity;
    return `$${totalCost.toFixed(2)}`
}

const groceries: GroceryProps[] = [
    new Grocery(1, "Eggs", 4, 2), 
    new Grocery(2, "Chicken thighs", 12, 3), 
    new Grocery(3, "Bacon", 5, 4), 
    new Grocery(4, "Bread", 3, 1),
    new Grocery(5, "Cabbage", 1, 1),
    new Grocery(6, "Yogurt", 1, 12)
];

// Display the groceries array content as a list.
document.getElementById("groceries").innerHTML = "<ul>" + groceries.map((grocery) => {
	return `<li>Name: ${grocery.name} <br>
    Cost: $${grocery.cost.toFixed(2)} <br>
    Quantity: ${grocery.quantity} <br>
    Total Cost: ${calculateGroceryItemCost(grocery.cost, grocery.quantity)}</li>`; 
}).join('') + "</ul>";

// Get the total grocery expense and display below the grocery list.
const groceriesTotalCost = groceries.reduce((acc, grocery) => {
    return acc + (grocery.cost * grocery.quantity);
}, 0);

document.getElementById("groceries-total").innerHTML = `Total Grocery Expense: $${groceriesTotalCost.toFixed(2)}`;
