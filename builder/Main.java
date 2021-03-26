package builder;

class Main {
    public static void main(String[] args) {
        Director director = new Director(new FormBuilder());
        director.getForm();
    }
}

class Director {

    Builder builder;

    Director(Builder builder) {
        this.builder = builder;
    }

    void getForm() {
        builder.makeStartForm("GET");
        builder.makeButton("送信");
        builder.makeEndForm();
        System.out.println(builder.getForm());
    }


}

abstract class Builder {
    abstract void makeStartForm(String method);
    abstract void makeButton(String value);
    abstract void makeEndForm();
    abstract String getForm();
}

class FormBuilder extends Builder {

    String html;

    void makeStartForm(String method) {
        this.html = "<form action='/' method='" + method + "'>";
    }

    void makeButton(String value) {
        this.html += "<input type='submit' value='" + value + "'>"; 
    }

    void makeEndForm() {
        this.html += "</form>";
    }

    String getForm() {
        return this.html;
    }

}
