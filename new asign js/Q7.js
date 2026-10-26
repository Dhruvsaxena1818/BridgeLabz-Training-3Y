
"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

var calculate = function(operation, num1, num2 = 0) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;

        case "power":
            return num1 ** num2;

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot find real square root of a negative number");
            }
            return Math.sqrt(num1);

        case "subtract":
            return num1 - num2;

        default:
            throw new InvalidOperationError("Invalid operation");
    }
};
