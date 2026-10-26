
"use strict";

var parseData = function(apiData) {
    const validNumbers = [];
    const invalidNumbers = [];
    const report = [];

    for (const value of apiData) {
        const numberValue = Number(value);
        const booleanValue = Boolean(value);
        const stringValue = String(value);
        const isBlank = typeof value === "string" && value.trim() === "";

        const isValid = !isBlank && Number.isFinite(numberValue);

        report.push({
            original: value,
            number: numberValue,
            boolean: booleanValue,
            string: stringValue,
            status: isValid ? "Valid" : "Invalid"
        });

        if (isValid) {
            validNumbers.push(numberValue);
        } else {
            invalidNumbers.push(value);
        }
    }

    return { report, validNumbers, invalidNumbers };
};
