// =======================
// QA Automation Task
// =======================
//
// Task 1:
//  - If the entered number is greater than 7, then print "Hello".
//  - If the entered name matches "John", then output "Hello, John",
//    otherwise output "There is no such name".
//  - There is a numeric array at the input; it is necessary to output 
//    array elements that are multiples of 3



const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function main() {
  rl.question("Enter a number: ", (numInput) => {
    const number = parseInt(numInput);

    if (number > 7) {
      console.log("Hello");
    }

    rl.question("Enter a name: ", (name) => {
      if (name === "John") {
        console.log("Hello, John");
      } else {
        console.log("There is no such name");
      }

      rl.question("Enter a comma-separated array of numbers (e.g., 3,5,9,12): ", (arrayInput) => {
        const arr = arrayInput.split(",").map(x => parseInt(x.trim()));
        console.log("Elements divisible by 3:");
        arr.forEach(el => {
          if (el % 3 === 0) {
            console.log(el);
          }
        });

        rl.close();
      });
    });
  });
}


main();









