const pizzaToppings = ["pepperoni", "green pepper", "mushroom", "sausage"];

function greetCustomer() {
  let greeting = "Welcome to Pizza Castle! Our toppings include ";
  for (let item of pizzaToppings) {
    greeting += `${item}, `;
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...toppings) {
  let newOrder = `One ${size} pizza on ${crust} with `;
  for (let item of toppings) {
    newOrder += `${item}`;
  }
  console.log(`${newOrder}, coming up!`);
  return [size, crust, toppings];
}

let newPizzaObj = {
  size: "large",
  crust: "cauliflower",
  toppings: pizzaToppings
};

function preparePizza([size, crust, toppings]) {
  console.log("...Pizza is cooking...");
  newPizzaObj = {
    size: size,
    crust: crust,
    toppings: [toppings]
  };
  return newPizzaObj;
}

function servePizza(newPizzaObj) {
  let completedOrder = `Order up! Here's your ${newPizzaObj.size} pizza on ${newPizzaObj.crust} with `;
  for (let item of newPizzaObj.toppings) {
    completedOrder += `${item}`;
  }
  console.log(`${completedOrder}. Enjoy!`);
  return newPizzaObj;
}

greetCustomer();
let newCustomerOrder = getPizzaOrder("large", "cauliflower", "green pepper", "mushroom", "sausage");
servePizza(preparePizza(newCustomerOrder));
