const favoriteBooks = ["My favorite book", "Another great book"];

function addFavoriteBook(bookName) {
    if(!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    }

}

 addFavoriteBook("A title that can be added");
// console.log(favoriteBooks);

// addFavoriteBook("Great title that cannot be added");
// console.log(favoriteBooks);

function printFavoriteBooks() {
    console.log("Favorite books:", favoriteBooks.length)
    for(let book of favoriteBooks) {
        console.log(book);
    }
}

printFavoriteBooks();
