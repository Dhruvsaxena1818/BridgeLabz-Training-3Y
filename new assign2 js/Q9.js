let numbers = [];
let results = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push("FizzBuzz");
    } else if (number % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
}

console.log(results);