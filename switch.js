// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code example");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "satruday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

const bill = 275;

let tip;
let tipPercentage;

switch (true) {
  case bill >= 50 && bill <= 300:
    tipPercentage = 0.15;
    break;
  default:
    tipPercentage = 0.2;
}

tip = bill * tipPercentage;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`
);
