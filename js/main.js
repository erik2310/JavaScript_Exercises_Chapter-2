console.log("Looping a triangle:");
console.log("");

let triangle = "#";

for (let i = 0; i < 7; i++) {
    console.log(triangle);
    triangle = triangle + "#";
}


console.log("");
console.log("FizzBuzz:");
console.log("");

// Udskriver tal fra 1 til 100
for (let i = 1; i <= 100; i++) {

    // Hvis tallet kan divideres med 3 og ikke 5
    if (i % 3 === 0 && i % 5 !== 0) {

        console.log("Fizz");

        // Hvis tallet kan divideres med 5 og ikke 3
    } else if (i % 5 === 0 && i % 3 !== 0) {

        console.log("Buzz");

        // Hvis tallet kan divideres med 3 og 5
    } else if (i % 3 === 0 && i % 5 === 0) {
        
        console.log("FizzBuzz");

    } else {

        console.log(i);

    }
}