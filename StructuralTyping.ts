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

let t1: WithFirstName = hasBoth;

let t2: WithLastName = hasBoth;
