
"use strict";

var auditJSON = function(rawData) {
    const cleanData = [];
    const errors = [];
    const under18Users = [];

    for (let i = 0; i < rawData.length; i++) {
        try {
            const data = JSON.parse(rawData[i]);

            if (data.user === undefined || data.age === undefined) {
                throw new Error("Missing user or age");
            }

            const age = Number(data.age);

            if (!Number.isFinite(age) || age < 0) {
                throw new Error("Invalid age");
            }

            const user = {
                user: data.user,
                age
            };

            cleanData.push(user);

            if (age < 18) {
                under18Users.push(user);
            }
        } catch (error) {
            errors.push({
                line: i + 1,
                message: error.message
            });
        }
    }

    return { cleanData, errors, under18Users };
};
