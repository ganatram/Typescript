const poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };

/*  
   
   {
      name:string,
      pages:number,
      rhymes?:boolean 
    } 

    |

    {
    name:string,
    rhymes:boolean,
    pages?:number
    }
   
    */

let T1: typeof poem = {
  name: "some string value",
  pages: 100,
  rhymes: false,
};
