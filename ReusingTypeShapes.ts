/* let poetAssignment : {   // type shape
  born: number,
  name: string; 
};

// inheriting type shapes with 'typeof' 
let p1: typeof poetAssignment = {
  born: 1975,
  name: "Mary Oliver",
};

let p2: typeof poetAssignment = {
  born: 1979,
  name: "Yennifer Jaimes",
}; */

// Interface in typescript - custom type shape
/* interface poetAssignment {
  born: number;
  name: string;
} */

// Type Alias in typescript - custom type shape
/* type poetAssignment = {
  born: number;
  name: string;
};

// inheriting type shapes with 'Interface'
let p1: poetAssignment = {
  born: 1975,
  name: "Mary Oliver",
};

let p2: poetAssignment = {
  born: 1979,
  name: "Yennifer Jaimes",
}; */

// Advantage of a Type Alias
/* type someTypeShape = number | string | boolean; // can work with primitive types & union types 

let t1: someTypeShape;

t1 = 400;

t1 = "some string value";

t1 = false; */

// Advantage of an Interface

/* interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let T1: Dog = {
  breed: "Alcesan",
  species: "some species",
}; */

// Type Alias can also indirectly use extend

/* type Animal = {
  species: string;
};

type Dog = {
  breed: string;
};

let T1: Dog & Animal = {
  breed: "Alcesan",
  species: "some species",
};
 */

// Declarative Merging - exclusive to Interface
/* interface Person {
  name: string;
}

interface Person {
  age: number;
}

let p1: Person = {
  name: "Mary Oliver",
  age: 25,
};
 */
