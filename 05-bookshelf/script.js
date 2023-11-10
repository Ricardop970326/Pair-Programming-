class bookshelf{
    constructor(){
        this.Books = [];
    }
   
    addBook(bookName){
        this.Books.push(bookName);
    }


    removeBook(title) {
        this.Books = this.Books.filter( book => book.title !== title );
      }

      getTotalBooks() {
        return this.Books.length;
      }
}

const theBookshelf = new bookshelf();
theBookshelf.addBook("the great gatsby");
theBookshelf.addBook("To Kill a Mockingbird");
theBookshelf.addBook("Pride and Prejudice");
console.log(theBookshelf);

console.log(theBookshelf.getTotalBooks());

theBookshelf.removeBook("To Kill a Mockingbird");

console.log(theBookshelf.getTotalBooks());