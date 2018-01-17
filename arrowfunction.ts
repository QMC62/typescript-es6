let calculateSalary = function() {
    return 100;
}

let calculateSalaryArrow = (bonus: number, tax: number) => 200 + bonus - tax;
console.log(calculateSalary());
console.log(calculateSalaryArrow(10, 5));
