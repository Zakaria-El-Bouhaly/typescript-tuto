// modules
import { capitalize } from "./stringUtils";
console.log(capitalize("hello"));



// default exports
import greet from "./greeter";
console.log(greet("John"));

import { goodbye } from "./greeter";
console.log(goodbye("Arthur"));
