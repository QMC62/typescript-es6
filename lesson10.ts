let getPercent = ()=>2;

let getBonus = function(value = 10, tax = value * getPercent(), salary = 80){
    console.log(value + tax);
    console.log(arguments.length)
}
getBonus();
getBonus(undefined, 6);
getBonus(100)
getBonus(50, 5);