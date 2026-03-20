type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
};

// Ok -- works
const poemMatch: Poem = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
};

// Ok -- works
const poemMisMatch: Poem = {
  author: {
    name: "Sylvia Plath",
  },
};
