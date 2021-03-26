package abstract_factory;

class Main {
    public static void main(String[] args) {
        CorpSiteFactory f1 = new CorpSiteFactory();
        System.out.println(f1.createHeader());
        System.out.println(f1.createMainContent());
        System.out.println(f1.createFooter());
    }
}

/* 抽象的な工場 */
abstract class Factory {
    abstract String createHeader();
    abstract String createMainContent();
    abstract String createFooter();
}

/* 具体的な工場1 */
class CorpSiteFactory extends Factory {

    public String createHeader() {
        return new CorpSiteHeader().make();
    }

    public String createMainContent() {
        return new CorpSiteMainContent().make();
    }

    public String createFooter() {
        return new CorpSiteFooter().make();
    }

}

/* 抽象的な部品 */
interface Part {
    abstract String make();
}

/* 具体的なヘッダー部品1(工場1で生産される) */
class CorpSiteHeader implements Part {
    public String make() {
        return "<div><span></span></div>";
    }
}

/* 具体的なメインコンテンツ部品1 */
class CorpSiteMainContent implements Part {
    public String make() {
        return "<div><p>これはトップページです</p></div>";
    }
}

/* 具体的なフッター部品1 */
class CorpSiteFooter implements Part {
    public String make() {
        return "<div><a herf='/recruit'>採用情報</a></div>";
    }
}

/* 工場とそれに対応する部品を増やしていく */
/* 製品は部品をまとめたもの? */