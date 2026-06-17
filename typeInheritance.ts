/* const Poet = {
  name: "Mary",
  born: 2001,
}; */

type Poet = {
  // custom type - 'Type alias
  name: string;
  born: number;
};

const PoetLater: Poet = {
  name: "Henry",
  born: 2000,
};

const YetAnotherPoet: Poet = {
  name: "Freeman",
  born: 2010,
};
