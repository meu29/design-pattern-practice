var BookShelf = /** @class */ (function () {
    function BookShelf(books) {
        this.books = books;
    }
    BookShelf.prototype.accept = function (librarian) {
        librarian.visitBookShelf(this.books);
    };
    return BookShelf;
}());
/* visitorとなるクラス */
var Librarian = /** @class */ (function () {
    function Librarian() {
    }
    Librarian.prototype.visitBookShelf = function (booksInBookShelf) {
        console.log(JSON.stringify(booksInBookShelf));
    };
    return Librarian;
}());
var bookShelf = new BookShelf(["独習git", "やさしいJava", "スッキリわかるSQL入門"]);
bookShelf.accept(new Librarian());
