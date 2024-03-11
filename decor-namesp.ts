/// <reference path="./Calculator.ts" />

// namespaces

// let calculator: Calculator.BasicCalculator = new Calculator.BasicCalculator();


// //decorators
function logged(constructor: Function) {
    console.log(constructor);
}


@logged
class Employee {
    public constructor() {
        console.log("Employee constructor");
    }
}