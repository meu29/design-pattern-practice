/* visitorパターン */

/* データ構造(システムで扱うデータを持つ)のクラス */
class BookShelf {

    books: Array<string>;

    constructor(books: Array<string>) {
        this.books = books;
    }

    /* visitorを受け入れるメソッド */
    accept(librarian: Librarian): void {
        librarian.visitBookShelf(this.books);
    }

}

/* visitor(データ構造クラスが持つデータを処理する)クラス */
/* BookShelfクラス側では配列booksをいじらない(インスタンス作成時のコンストラクタでの代入を除く) */
class Librarian {

    /* 司書が本棚にある本を確認する */
    visitBookShelf(booksInBookShelf: Array<string>): void {
        console.log(JSON.stringify(booksInBookShelf));
    }

}

var bookShelf: BookShelf = new BookShelf(["独習git", "やさしいJava", "スッキリわかるSQL入門"]);
bookShelf.accept(new Librarian());