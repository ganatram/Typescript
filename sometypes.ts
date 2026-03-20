// any type
let x;

// Interface
interface Materials {
  material1: "Cement";
  material2: "Mortar";
  price: 2000;
}

// Type Alias
type TS1 = {
  material1: "Cement";
  material2: "Mortar";
  price: 2000;
};

// Union type
let nameornumber: string | number;

//string arrays
const arr1: string[] = ["string1", "string2", "string3"];

// tuples
const arr2: [string, number, boolean] = ["string1", 100, false];

// Generics - eg
