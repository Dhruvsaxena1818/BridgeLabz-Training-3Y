
"use strict";

var generatePyramid = function(rows = 5) {
    if (!Number.isInteger(rows) || rows < 1) {
        return [];
    }

    const pattern = [];

    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += "* ";
        }

        pattern.push(line.trim());
    }

    return pattern;
};
