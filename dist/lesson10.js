"use strict";
var getPercent = function () { return 2; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    if (salary === void 0) { salary = 80; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(undefined, 6);
getBonus(100);
getBonus(50, 5);
//# sourceMappingURL=lesson10.js.map