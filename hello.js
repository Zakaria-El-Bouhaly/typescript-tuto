var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
/// <reference path="./Calculator.ts" />
var temperature = 54;
var welcomeMessage = "Hello, World!";
var isLogged = true;
var colors = ["red", "green", "blue"];
var userInfo = ["Ryan Gosling", 25];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var currentSeason = Season.Winter;
console.log(currentSeason);
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("no return");
}
function greet(name) {
    return "Hello, ".concat(name);
}
function multiply(a, b) {
    return a * b;
}
function createEmail(to, subject) {
    if (subject === void 0) { subject = "No Subject"; }
    return "Email to ".concat(to, ", Subject: ").concat(subject);
}
function add(x, y, z) {
    if (z) {
        return x + y + z;
    }
    return x + y;
}
logValue(temperature);
console.log(greet("Ryan"));
console.log(multiply(3, 4));
console.log(createEmail("Ryan"));
console.log(add(3, 4));
console.log(add(3, 4, 5));
function concatenateStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.join(", ");
}
console.log(concatenateStrings("Hello", "everyone", "how", "are", "you"));
function maxNumber() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, args);
}
console.log(maxNumber(1, 2, 3, 4, 5));
function createVehicule(vehicle) {
    return vehicle;
}
console.log(createVehicule({ make: "Toyota", model: "Corolla", year: 2005 }));
function updatePerson(person, update) {
    person.firstName = update.firstName;
    person.lastName = update.lastName;
    if (update.age) {
        person.age = update.age;
    }
    if (update.email) {
        person.email = update.email;
    }
    return person;
}
function moveCircle(circle) {
    // circle.centerX = 10; // Error
    // circle.centerY = 10; // Error
}
function moveMovableCircle(circle) {
    circle.centerX = 10;
    circle.centerY = 10;
}
// Classes
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Running...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog("Dawg");
dog.move();
// access modifiers
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var thePerson = new Person("Zakaria");
// console.log(person.name); // Error: 'name' is private;
console.log(thePerson.getName());
// generics
function identity(arg) {
    return arg;
}
var result = identity("Hello, World!");
console.log(result);
var result2 = identity(42);
console.log(result2);
function identity2(arg) {
    console.log(typeof arg);
    return arg;
}
var myIdentity = function (arg) {
    console.log(typeof arg);
    return arg;
};
myIdentity(23);
var myArr = {
    arr: [1, 2, 3, 4, 5]
};
// ENUMS
var Rsp;
(function (Rsp) {
    Rsp[Rsp["No"] = 0] = "No";
    Rsp[Rsp["Yes"] = 1] = "Yes";
})(Rsp || (Rsp = {}));
function answer(to, message) {
    console.log("".concat(to, " : ").concat(message));
}
answer("Zakaria", Rsp.Yes);
// string enums
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function showResult(message) {
    console.log(message);
}
showResult(Message.Success);
// Advanced Types
// union types
function padLeft(value, padding) {
    // function body
}
padLeft("Hello, World!", 2);
padLeft("Hello, World!", "test");
var customer = {
    name: "Zakaria",
    credit: 1000,
    email: "test@domain.com",
    phone: "123456789"
};
function printCustomer(customer) {
    console.log(customer);
}
printCustomer(customer);
// namespaces
// let calculator: Calculator.BasicCalculator = new Calculator.BasicCalculator();
// //decorators
function logged(constructor) {
    console.log(constructor);
}
var Employee = function () {
    var _classDecorators = [logged];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Employee = _classThis = /** @class */ (function () {
        function Employee_1() {
            console.log("Employee constructor");
        }
        return Employee_1;
    }());
    __setFunctionName(_classThis, "Employee");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Employee = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Employee = _classThis;
}();
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo = {
    title: "organize desk",
    description: "clear clutter"
};
var updatedTodo = updateTodo(todo, {
    description: "walo"
});
console.log(updatedTodo);
var user = {
    title: "Zakaria",
    description: "test"
};
// Typescript COnfiguration
