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

// method decorator

function format() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            let result = originalMethod.apply(this);
            return result.toUpperCase();
        }
        
    }
}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}