const bookByCategory = [
   {
      category: "Riqueza",
      books: [
         {
            title: "Os seguedos da mente milionária",
            author: "T. Harv Eker",
         },
         {
            title: "Pai rico , pai pobre",
            author: "George S. Clason",
         },
         {
            title: "O homem mais rico da Babilônia",
            author: "Robert T. Kiyosaki e Sharon L. Lenchter "
         },
      ],
   },

   {
      category: "Inteligência Emocional",
      books: [
         {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
         },
         {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
         },
         {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Augusto Cury",
         },
      ],
   },
];
  
const totalCategories = bookByCategory.length

console.log(totalCategories);
for (let category of bookByCategory){
   console.log("Total de livros da categoria " + category.category)
   console.log(category.books.length)
}

function countAuthors() {
   let authors = [];

   for(let category of bookByCategory) {
      for(let book of category.books) {
         if(authors.indexOf(book.author) == -1)
         authors.push(book.author)
      }
   }
   console.log("Total de autores " + authors.length)
}

countAuthors();

function booksOfAuthor(author) {
   let books = [];

   for(let category of bookByCategory) {
      for(let book of category.books) {
         if(book.author === author) {
            books.push(book.title)
         }
      }
   }
   console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("Augusto Cury");