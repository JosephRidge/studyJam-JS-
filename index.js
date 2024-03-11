/**
 *  VARIABLES
 * - Arithmetic Operators
 * - Boolean Operators
 * - Arrays
 * - Functions
 * - Comments
 * - Conatnts
 *
 * DATA TYPES
 * -String
 * - Boolean
 *  - Number
 * - Array
 * - Objects
 */

// VARIABLES
let numberOfTurns = 10; // number
let userName = "Sudoku"; // String
let shoppingBasket = ["eggs", "water", "socks", "bottles", "serviettes"]; // array
let ingredientDetails = {
  dish: "Chapati",
  flourBrand: "Exe(light blue)",
  oil: 0.25, //in litres
  time: 4, // in hours
  flourQuantity: 1, // in kgs
  waterQuantity: 0.5, // in litres
  optimalHeat: 24, //in degree centigrade
  salt: 4, // in grams
}; // object
/**
 * Making Chapati
 *
 */
// procedures
let stepOne = `Boil ${ingredientDetails.waterQuantity} litres`;
let stepTwo = `Pour ${ingredientDetails.flourQuantity} Kg(s) of ${ingredientDetails.flourBrand} Unga`;
let stepThree = `Mix with ${ingredientDetails.salt} mini tablespoons of salt.`;
let stepFour = `Gradually mix with your hot water and ${ingredientDetails.oil} litres of oil, untill a non sticky dough is formed.`;
let finalStep = `Cover your dough and let it settle for ${ingredientDetails.time} HRS`;

// print steps to make my chapati
// console.log(`
// 1. ${stepOne} \n
// 2. ${stepTwo} \n
// 3. ${stepThree} \n
// 4. ${stepFour} \n
// 5. ${finalStep} \n
// 6. Enjoy!!!\n
// `);

/**
 * TODO LIST
 * Task:
 * - Title
 * - description
 * - deadline
 * - completionStatus
 *  */

let task1 = {
  title: "Washing dishes",
  description: "Use Ushindi liquid soap and not bar soap",
  deadline: "11/03/2024",
  isComplete: false,
};

let task2 = {
  title: "Washing car",
  description: "Use warm water and liquid soap and not powder soap",
  deadline: "11/03/2024",
  isComplete: false,
};

let todoList = [task1];
// adding an element to our arrays
todoList.push(task2);
// loop to access entites in our array
console.log(todoList);
console.log("\n ****** MY ITINERY ****** \n");

for (let i = 0; i <todoList.length; i++) {
  console.log(`
  ************************************************
    - TASK: ${todoList[i].title}\n
    - APPROACH: ${todoList[i].description}\n
    - DEADLINE: ${todoList[i].deadline}\n
    - STATUS: ${todoList[i].isComplete == true ? "Complete" : "Not Complete"}\n
    ************************************************
    `);
}

/**
 * Ternary operator
 * - composed of three parts
 * 1st => condition
 * 2nd => result when condition is true or met
 * 3rd => result when ciondition is not met or is False
 */

// * - Arithmetic Operators
// * - Boolean Operators
// * - Arrays
// * - Functions
// * - Conatnts
