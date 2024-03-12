/**
 *  VARIABLES
 * - Arithmetic Operators
 * - Boolean Operators
 * - Arrays
 * - Functions
 * - Comments
 * - Contants
 *
 * DATA TYPES
 * - String
 * - Boolean
 *  - Number
 * - Array
 * - Objects
 */

// VARIABLES
let numberOfTurns = 10; // number
const numberOfLines = 1000; // const key word implies immutability
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
// array of tasks (ours tasks are of object type)
let todoList = [task1];
// adding an element to our arrays
todoList.push(task2);
// loop to access entites in our array
console.log(todoList);
console.log("\n ****** MY ITINERY ****** \n");
// for(intializer;condition; incrementor or decremento)
/* for (let i = 0; i <todoList.length; i++) {
  console.log(`
  ************************************************
    - TASK: ${todoList[i].title}\n
    - APPROACH: ${todoList[i].description}\n
    - DEADLINE: ${todoList[i].deadline}\n
    - STATUS: ${todoList[i].isComplete == true ? "Complete" : "Not Complete"}\n
    ************************************************
    `);
} */
/**
 *
 * CONDITONAL STATEMENTS
 * - allow you to takes actions based on certain conditions
 */
// if..else
// if(task1.isComplete === true && task1.title === "Washing dishes"){
//   console.log("Complete")
// }else{
//   console.log(" Not Complete")
// }

/**
 * TRUTH TABLE
 * targeting 'and'
 *
 *  && | T | F
 * -----------
 * T | T | F
 * -----------
 * F | F | F
 *
 *
 */

/**
 * TRUTH TABLE
 * targeting 'or'
 *
 *  || | T | F
 * -----------
 * T | T | T
 * -----------
 * F | T | F
 *
 *
 */

/**
 * Ternary operator
 * - composed of three parts
 * 1st => condition
 * 2nd => result when condition is true or met
 * 3rd => result when ciondition is not met or is False
 */

// Scenario 1:
/**
 * When user toggles between Dark mode and light *
 */
let appTheme = {
  dark: "Dark",
  light: "Blue",
  font: "Sans-Serif",
  fontSizeTitle: "32px",
};

// toggle button such that when its dark we change the theme to dark mode
// and when day time change to light moded
// let currentTheme = appTheme.dark; // set our them of app to dark theme
// appTheme.font = "Poppins";
// let currentFont = appTheme.font;
// console.log(currentFont);

// Scenario 1:
/**
 *  Easter is coming, when Easter hits we
 * tend to change thre layout of our shopping application or introduce designs
 * for "black Firday"
 *
 */

let appTheme2 = {
  // default theme of app
  default: {
    dark: "Dark",
    light: "Blue",
    font: "Sans-Serif",
    fontSizeTitle: "32px",
  },
  // theme during X-mas
  christmasEve: {
    light: "White",
    font: "Sans-Serif",
    fontSizeTitle: "32px",
  },
  // theme during Easter
  easter: {
    light: "orange",
    font: "Poppins",
    fontSizeTitle: "40px",
  },
};

/***
 * - Check Current appTheme
 * - Check Current Season
 * - Set approproate Theme
 * 
 */

// let currentTheme = "default";
// let currentSeason = "normal";

// let seasons = ['easter','Xmas', 'Ramdhan']

// if(currentSeason === "easter"){
//   currentTheme = appTheme2.easter
// }else if(currentSeason === "christmas"){
//   currentTheme = appTheme2.christmasEve
// }else{
//   currentTheme = appTheme2.default;
// }


// functions
/// parameterized ( takes in parameters or values)

function changeAppTheme(appTheme){
// block of statements
  console.log(`Current Theme is ${JSON.stringify(appTheme.default)}`)
  console.log("Current Theme is ", appTheme.default)
}

// call the function
changeAppTheme(appTheme2)

// non-parameterized functions
function setDefaultTheme(){
  // set current them
  currrentTheme = appTheme.default;
}

setDefaultTheme();

/// basics of OOP - Classses, Methods, Contructors, inheritance and


































// * - Arithmetic Operators
// * - Boolean Operators
// * - Arrays
// * - Functions
// * - Constants

/**
 * JS Resource
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript
 *  */
