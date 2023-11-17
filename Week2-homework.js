let pizzaPlace = "Pizza Castle";
console.log(typeof pizzaPlace);

let numberOfToppings = 20;
console.log(typeof numberOfToppings);

console.log(
  `Choose from over ${numberOfToppings} toppings and other fix-ins at any ${pizzaPlace} location!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
