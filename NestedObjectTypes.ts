/* type Poem = {
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
 */

type Poem = {
  name: string;
};

type Author = {
  firstName: string;
  lastName: string;
};

const poemMatch:Author = {
    name:"Sylvia Plath'
}
// 
 const poemMisMatch:Poem ={
    firstName='Mary',
    lastName='Oliver'
 }


