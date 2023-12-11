// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b){
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   // console.log(millenial);
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "chano";
// let job = "software developer";
// const year = 1994;
"use strict";
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// function baseball(a, b) {
//   console.log(this);
//   return a + b;
// }
// baseball(1, 2);

// const me = (a, b) => {
//   console.log(this);
//   return a + b;
// };
// me(1, 2);

// const jonas = {
//   year: 1994,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);

// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage:", marriedJessica);

"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};
add(2, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
