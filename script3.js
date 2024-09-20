const temperatures = [72, 75, 68, 70, 78, 73, 69];

// Calculate the average temperature
const totalTemperature = temperatures.reduce((sum, temp) => sum + temp, 0);
const averageTemperature = totalTemperature / temperatures.length;

console.log("Average Temperature:", averageTemperature);

const itemPrices = [120, 350, 200, 450, 80];
const discountRate = 0.10;

// Calculate final prices after applying the discount
const discountedPrices = itemPrices.map(price => price - (price * discountRate));

console.log("Discounted Prices:", discountedPrices);

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// a. Remove the first fruit
fruits.shift();
console.log("After removing the first fruit:", fruits);

// b. Remove Cherry & Add Kiwi in its place
const cherryIndex = fruits.indexOf("Cherry");
if (cherryIndex !== -1) {
  fruits.splice(cherryIndex, 1, "Kiwi");
}
console.log("After replacing Cherry with Kiwi:", fruits);

// c. Add Mango at the end
fruits.push("Mango");
console.log("After adding Mango at the end:", fruits);

