// Arrays
let stringArr = ["one", "two", "three"];
let guitars = ["Bag", "Black", 700];
let mixedData = ["TV", 300, true];
let test = [];

stringArr[0] = "john";
stringArr.push("70");

guitars[0] = 90;
guitars.push(700);
guitars[2] = "Hello";
guitars.push("guide");

// Defining
let brands: string[];
let product: string[] | number[];
let mixed: string[] | number[] | boolean[];

brands = ["he"];

// Tuple
// define type in specific locked in element position and specific length of array
let myTuple: [string, number, boolean];

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};

const exObj = { prop1: "Dave", prop2: true };

exObj.prop1 = "42";
exObj.prop2 = false;

// Annotation
type defOnj = {
  name: string;
  active?: boolean;
  album: (string | number)[];
};

let evh: defOnj = {
  name: "EDY",
  active: false,
  album: [3030, 1998, "HIGH"],
};

let jp: defOnj = {
  name: "none",
  active: true,
  album: [1289, 1389, "BELLOW"],
};

evh = jp;

type optionalType = {
  name: string;
  age?: number;
};

const godDay = (def: optionalType) => {
  console.log(def.name);
};

godDay({ name: "Cup" });

// Interface
interface jj {
  name: string;
  age: number;
}

const dam = (hal: jj) => {
  console.log(hal.name);
  console.log(hal.age);
};

dam({ name: "Int", age: 46 });

// Enums
// Unlike most TypeScript features, Enums are not a type-level addition but something added to the language and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
