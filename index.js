"use strict";
/**
 * The Pre-Reqs of runnning the TypeScript, first do all the steps mentioned below
 *
 * 1. Install TypeScript with "npm install -g typescript"
 *
 * -------- Now move onto the running the current TypeScript File --------
 *
 * 2. make an index.ts file and open a terminal in VSCode and write "tsc index.ts"
 * ................ this will show the errors in the terminal if you have any in your typeScript file
 *
 * 3. To keep watching for errors and changes in your file while working along in it and saving changes
 * ................ type in terminal "tsc --watch index.ts"
 *
 * 4. Now to make changes to TypeScript configuration, first do "tsc --init" in the terminal
 *
 * 5. Change the "target" to -> : "ES6" in the tsconfig.json file , this will enable ES6 support
 * ................ for JavaScript writing with "let" and "const" rather than "var"
 *
 * 6. Once the changes are done in the "tsconfig.json" file, now run -> "tsc --watch"
 * ................ which will run all the ".ts" extensions files in the direcotry to watch for changes
 * ................ and store it inside the index.js file
 * ................ ................ ............... you will see a  "use strict" on Top of the index.js file
 *
 * To see the output of the code , split the terminal and in the new terminal write "node index.js"
 *
 * ------------------------------------------------ Thats All ------------------------------------------------
 *                                    ~~ I am running Ubuntu LTS 22.04 for TypeScript ~~
 */
// Basic Data Types
let numberDataType = 5;
const stringDataType = "Muzammil Ali";
let booleanDataType = true;
const anyDataType1 = "My Intrests";
const anyDataType2 = 25;
const anyDataTyp3 = false;
let age;
age = 18;
// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings = ["Muzammil", "Ali"];
const anys = [1, "Muzammil", true];
//Tuples
const my_info = ["Muzammil Ali", 25, true];
let tupleAttay;
tupleAttay = [
    ["Muzammil Ali 1", 15, false],
    ["Muzammil Ali 2", 20, false],
    ["Muzammil Ali 3", 25, true]
];
// Unions
let personID;
personID = 123456789;
personID = "123456789";
// personID = true        // This will give an error as the personID can only be numbe or string
/**
 * Enums (Default values are always 0,1,2,3 .... and so on)
 * What I have understood is they are "constant" values grouped up togeather in a single object notation like
 * they will print the numberic value values if called unless they are assigned string or fixed data values
 */
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.UP); // This should print "0" zero on the console -> run -> node index.js in seperate terminal
console.log(Direction1.DOWN); // This should print "1" one on the console -> run -> node index.js in seperate terminal
console.log(Direction1.LEFT); // This should print "2" two on the console -> run -> node index.js in seperate terminal
console.log(Direction1.RIGHT); // This should print "3" three on the console -> run -> node index.js in seperate terminal
console.log("Break Point for Next Line in 'index.js'");
var Direction2;
(function (Direction2) {
    Direction2[Direction2["UP"] = 5] = "UP";
    Direction2[Direction2["DOWN"] = 6] = "DOWN";
    Direction2[Direction2["LEFT"] = 7] = "LEFT";
    Direction2[Direction2["RIGHT"] = 8] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.UP); // This should print "5" five on the console -> run -> node index.js in seperate terminal
console.log(Direction2.DOWN); // This should print "6" six on the console -> run -> node index.js in seperate terminal
console.log(Direction2.LEFT); // This should print "7" seven on the console -> run -> node index.js in seperate terminal
console.log(Direction2.RIGHT); // This should print "8" eight on the console -> run -> node index.js in seperate terminal
console.log("Break Point for Next Line in 'index.js'");
var clearDirections;
(function (clearDirections) {
    clearDirections["UP"] = "Up";
    clearDirections["DOWN"] = "Down";
    clearDirections["LEFT"] = "Left";
    clearDirections["RIGHT"] = "Right";
})(clearDirections || (clearDirections = {}));
console.log(clearDirections.UP); // This should print "Up" up on the console -> run -> node index.js in seperate terminal
console.log(clearDirections.DOWN); // This should print "Down" down on the console -> run -> node index.js in seperate terminal
console.log(clearDirections.LEFT); // This should print "Left" left on the console -> run -> node index.js in seperate terminal
console.log(clearDirections.RIGHT); // This should print "Right" right on the console -> run -> node index.js in seperate terminal
const my_information = {
    firstName: "Muzammil",
    lastName: "Ali",
    age: 25
};
console.log(my_information); // This will display the information as an Object using typescript indentation of Oject creation
// const my_information2: Info = {
//     firstName: true,      // I cannot do this as it is not defined in the typescript's Object type interface
//     lastName: "Ali",
//     age: 25
// }
// Functions
function Sum(x, y) {
    return x + y;
}
const result = Sum(1, 2);
console.log("sum is --> " + result + " <-- using typescript functions defination");
const my_type_age = 25;
const my_type_age2 = "25";
const my_information3 = {
    firstName: "Muzammil",
    lastName: "Ali",
    // Now I have skipped age here , it will still work in typescript
};
console.log(my_information3);
// Generics / So called Templates in C++ are possible in typescript as well
function getArray(items) {
    return new Array().concat(items);
}
const array1 = getArray([1, 2, 3, 4, 5]);
const array2 = getArray(["Muzammil", "Ali", "TypeScript", "Practice"]);
console.log(array1);
console.log(array2);
console.log("Break Point for Next Line in 'index.js'");
function getArrayGenericsWay(items) {
    return new Array().concat(items);
}
const genericsArray1 = getArrayGenericsWay([1, 2, 3, 4, 5]);
const genericsArray2 = getArrayGenericsWay(["Muzammil", "Ali", "TypeScript", "Practice"]);
console.log(genericsArray1);
console.log(genericsArray2);
// [         THE END        ]
