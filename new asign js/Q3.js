
"use strict";

var validateTransactions = function(transactions) {
    const valid = [];
    const invalid = [];

    for (const transaction of transactions) {
        try {
            if (transaction === null) {
                throw new Error("NULL_ENTRY");
            }

            if (transaction.id === undefined ||
                transaction.amount === undefined) {
                throw new Error("MISSING_FIELD");
            }

            if (typeof transaction.amount !== "number" ||
                !Number.isFinite(transaction.amount)) {
                throw new Error("INVALID_AMOUNT");
            }

            if (transaction.amount < 0) {
                throw new Error("NEGATIVE_AMOUNT");
            }

            valid.push(transaction);
        } catch (error) {
            invalid.push({
                transaction,
                error: error.message
            });
        }
    }

    return {
        valid,
        invalid,
        validCount: valid.length,
        invalidCount: invalid.length
    };
};
