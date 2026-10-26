
"use strict";

var runHoistingLab = function() {
    const output = [];

    function announce() {
        output.push("Game started");
    }

    function startGame(status) {
        output.push(status);
    }

    const score = 50;
    const status = "ready";

    output.push(score);
    announce();
    startGame(status);

    const announceArrow = () => "Game started using arrow function";
    output.push(announceArrow());

    return output;
};
