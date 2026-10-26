
"use strict";

var calculateBonus = function(employees) {
    const results = [];

    try {
        for (const employee of employees) {
            if (!employee || employee.name === undefined ||
                employee.salary === undefined ||
                employee.years === undefined) {
                throw new Error("Missing employee property");
            }

            const salary = Number(employee.salary);
            const years = Number(employee.years);

            if (!Number.isFinite(salary) || !Number.isFinite(years)) {
                throw new Error("Invalid employee data");
            }

            const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

            results.push({
                name: employee.name,
                salary,
                years,
                bonus,
                totalSalary: salary + bonus
            });
        }
    } catch (error) {
        return { error: error.message, results };
    }

    return results;
};
