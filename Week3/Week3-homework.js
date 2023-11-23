let pizzaToppings = ["pepperoni", "green pepper", "mushroom", "sausage"];

function greetCustomer() {
  for (let item in pizzaToppings) {
    console.log("Welcome to Pizza Castle. Our pizzas feature delicious toppings such as " + pizzaToppings[0] + ", " + pizzaToppings[1] + ", " + pizzaToppings[2] + ", and " + pizzaToppings[3] + ".");
  }
}

let newPizza = ["large", "thick crust", pizzaToppings];
function getPizzaOrder(size, crust, toppings) {
  for (let item in newPizza) {
    console.log("One " + newPizza[0] + [newPizza[1] + "pizza with " + newPizza[2][0] + ", " + newPizza[2][1] + ", " + newPizza[2][2] + ", and " + newPizza[2][3] + ", coming up!");
  }
}

function preparePizza(arr) {
  console.log("...Pizza cooking...");
}

const servePizza = function(obj) {
  console.log("Order up! Here's your " + + newPizza[0] + [newPizza[1] + "pizza with " + newPizza[2][0] + ", " + newPizza[2][1] + ", " + newPizza[2][2] + ", and " + newPizza[2][3] + ". Enjoy!");
};

greetCustomer();
getPizzaOrder(newPizza);
preparePizza(getPizzaOrder());
servePizza(preparePizza());
