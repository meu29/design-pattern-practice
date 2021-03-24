package java版.iterator;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        BookShelf bookShelf = new BookShelf();
        bookShelf.addBook(new Book("java入門"));
        bookShelf.addBook(new Book("Reactチュートリアル"));
        bookShelf.addBook(new Book("応用情報技術者試験過去問題集"));
        Iterator bookShelfIterator = bookShelf.iterator();
        while (bookShelfIterator.hasNext() == true) {
            Book book = (Book)bookShelfIterator.next();
            System.out.println(book.getName());
        }
    }
}

interface Iterator {
    abstract boolean hasNext();
    abstract Object next();
}

class Book {

    String name;

    Book(String name) {
        this.name = name;
    }

    String getName() {
        return this.name;
    }

}

class BookShelf {

    ArrayList<Book> books = new ArrayList<Book>();

    Book getBook(int index) {
        return this.books.get(index);
    } 

    void addBook(Book newBook) {
        this.books.add(newBook);
    }

    public Iterator iterator() {
        /* thisは自身のインスタンスと同じ？ */
        return new BookShelfIterator(this);
    }

}

class BookShelfIterator implements Iterator {

    BookShelf bookShelf;
    int index;

    BookShelfIterator(BookShelf bookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }

    public boolean hasNext() {

        if (this.index < this.bookShelf.books.size()) {
            return true;
        } else {
            return false;
        }

    }

    public Object next() {
    
        Book book = this.bookShelf.getBook(index);
        this.index += 1;
        return book;

    }

}