type Book = {
  author: string; // mandatory property
  pages?: number; // optional property
  //   pages: number | undefined; // optional property
};

//ok
const myBook: Book = {
  author: "Mary Oliver",
  //   pages: 200,
  //   pages: undefined,
};
