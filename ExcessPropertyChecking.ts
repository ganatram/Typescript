type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucile",
  lastName: "Clifton",
};

// ok, because firstName is 'string' and present
let t1: WithFirstName = hasBoth;

let t2: WithLastName = {
  firstName: "Lucile",
  lastName: "Clifton",
};
