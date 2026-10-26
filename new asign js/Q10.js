
"use strict";

var runNestedHoisting = function() {
    function outer() {
        var count = 5;

        function inner() {
            var count = 10;
            return count;
        }

        const outerCount = count;
        const innerCount = inner();

        const innerArrow = () => count;
        const arrowCount = innerArrow();

        return {
            outerCount,
            innerCount,
            arrowCount
        };
    }

    return outer();
};
