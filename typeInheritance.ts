/* const Poet = {
  name: "Mary",
  born: 2001,
}; */

// Type Alias - custom type shape:
/* type Poet = {
  name: string;
  born: number;
}; */

// Interface - custom type shape:
interface Poet {
  name: string;
  born: number;
}

interface Poet {
  // declarative merging -- interface
  job: string;
}

const PoetLater: Poet = {
  name: "Henry",
  born: 2000,
  job: "singer",
};

const YetAnotherPoet: Poet = {
  name: "Freeman",
  born: 2010,
  job: "director",
};

// Reusing type shapes with 'typeof' operator
/* const PoetLater: typeof Poet = {
  name: "Henry",
  born: 2000,
};


const YetAnotherPoet: typeof Poet = {
  name: "Freeman",
  born: 2010,
}; */

/* 
type Poet = {  // custom type - 'Type alias'
  name: string;
  born: number;
};


const YetAnotherPoet: Poet = {
  name: "Freeman",
  born: 2010,
};
 */
