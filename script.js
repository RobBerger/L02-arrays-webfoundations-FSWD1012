// var menuItem1 = "Hamburger";
// var menuItem2 = "Fries";
// var menuItem3 = "Milkshake";
// var menuItem4 = "Garden Salad";
// var menuItem5 = "Pizza Slice";

// let menu = [
//     "Hamburger",
//     "Fries",
//     "Milkshake",
//     "Garden Salad",
//     "Pizza Slice"
// ];
// console.log(menu);
// console.log(menu[1]);

// menu[5] = "Steak";
// console.log(menu);

// let menu = new Array(
//     "Hamburger",
//     "Fries",
//     "Milkshake",
//     "Garden Salad",
//     "Pizza Slice"
// );

// push()
// var pets = ["goldfish", "dog", "cat", "parrot"];
// pets.push("gerbil");
// console.log(pets);

// var pushLength = pets.push("lizard");
// console.log("New Length: " + pushLength);

// pop
// var bugs = ["grasshopper", "ant", "ladybug", "beetle"];
// console.log(bugs);
// bugs.pop();
// console.log(bugs);
// console.log(bugs.pop());
// console.log(bugs);
// console.log(bugs.pop());
// console.log(bugs);

// forEach()
// find the sum of all numbers in the array
// var sum = 0;
// var numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
//   console.log(sum);
// }

// reverse
// var fruits = ["Apple", "Banana", "Coconut", "Grape"];
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// join
// var wildAnimals = ["lions", "tigers", "bears"];
// console.log(wildAnimals);
// console.log(wildAnimals.join());

// find
let veggies = ["peas", "lettuce", "carrots", "brocolli"];
let result = veggies.find(function(veg) {
  return veg.startsWith("c");   // condition
});
console.log(result);