
let temperature: number = 54;
let welcomeMessage: string = "Hello, World!";
let isLogged: boolean = true;

let colors: string[] = ["red", "green", "blue"];
let userInfo: [string, number] = ["Ryan Gosling", 25];

enum Season { Spring, Summer, Autumn, Winter };
let currentSeason: Season = Season.Winter;
console.log(currentSeason);

function logValue(value: any) {
    console.log(value);
}

function noReturn(): void {
    console.log("no return");
}


function greet(name: string): string {
    return `Hello, ${name}`;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function createEmail(to: string, subject: string = "No Subject"): string {
    return `Email to ${to}, Subject: ${subject}`;
}

function add(x: number, y: number, z?: number): number {
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

function concatenateStrings(...args: string[]): string {
    return args.join(", ");
}
console.log(concatenateStrings("Hello", "everyone", "how", "are", "you"));

function maxNumber(...args: number[]): number {
    return Math.max(...args);
}
console.log(maxNumber(1, 2, 3, 4, 5));


interface Vehicle {
    make: string;
    model: string;
    year: number;
}

function createVehicule(vehicle: Vehicle): Vehicle {
    return vehicle;
}
console.log(createVehicule({ make: "Toyota", model: "Corolla", year: 2005 }));


interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
    email?: string; // Optional property
}

function updatePerson(person: Person, update: Person): Person {
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

// let person: Person = { firstName: "Walter", lastName: "White" };
// let updatedPerson: Person = { firstName: "Heisenberg", lastName: "White", age: 50 };
// console.log(updatePerson(person, updatedPerson));


interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle(circle: Circle): void {
    // circle.centerX = 10; // Error
    // circle.centerY = 10; // Error
}

// fixing the error
interface MovableCircle {
    centerX: number;
    centerY: number;
    radius: number;
}

function moveMovableCircle(circle: MovableCircle): void {
    circle.centerX = 10;
    circle.centerY = 10;
}



// Classes
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


class Dog extends Animal {

    move(distanceInMeters: number = 5) {
        console.log("Running...");
        super.move(distanceInMeters);
    }
}

let dog = new Dog("Dawg");
dog.move();



// access modifiers
class Person {
    private name: string;
    constructor(name: string) { this.name = name; }

    public getName(): string {
        return this.name;
    }
}

const thePerson: Person = new Person("Zakaria");
// console.log(person.name); // Error: 'name' is private;
console.log(thePerson.getName());



// generics
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello, World!");
console.log(result);
let result2 = identity<number>(42);
console.log(result2);


function identity2<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}


//generic interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = (arg: number) => {
    console.log(typeof arg);
    return arg;
}

myIdentity(23);

interface GenericArray<T> {
    arr: T[];
}

let myArr: GenericArray<number> = {
    arr: [1, 2, 3, 4, 5]
}

// ENUMS
enum Rsp {
    No = 0,
    Yes = 1,
}

function answer(to: string, message: Rsp): void {
    console.log(`${to} : ${message}`);
}
answer("Zakaria", Rsp.Yes);

// string enums
enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function showResult(message: Message): void {
    console.log(message);
}
showResult(Message.Success);

// Advanced Types
// union types
function padLeft(value: string, padding: string | number) {
    // function body
}

padLeft("Hello, World!", 2);
padLeft("Hello, World!", "test");

//intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

let customer: Customer = {
    name: "Zakaria",
    credit: 1000,
    email: "test@domain.com",
    phone: "123456789"
}

function printCustomer(customer: BusinessPartner & Contact): void {
    console.log(customer);
}
printCustomer(customer);



// partial and readonly
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

let todo: Todo = {
    title: "organize desk",
    description: "clear clutter"
};

let updatedTodo = updateTodo(todo, {
    description: "walo"
});

console.log(updatedTodo);

const user : Readonly<Todo> = {
    title: "Zakaria",
    description: "test"
}

// Typescript COnfiguration
