

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
