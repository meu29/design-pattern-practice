package java版.mediator;

import java.util.ArrayList;

class MainClass {

    public static void main(String[] args) {

        Mediator mediator = new Mediator();
        System.out.println("1回目");
        mediator.addComponent(new Component("hoge"));
        System.out.println("2回目");
        mediator.addComponent(new Component("fuga"));
        System.out.println("3回目");
        mediator.addComponent(new Component("piyo"));

    }

}

/* インスタンス間を仲介する(相互作用を実現する)クラス */
class Mediator {

    ArrayList<Component> components = new ArrayList<Component>();

    void addComponent(Component newComponent) {

        this.components.add(newComponent);
        
        /* 新しいコンポーネントが追加されたとき、それを含めた全てのコンポーネントに対してwidthの調整を要請する。 */
        for (int i = 0; i <= this.components.size() - 1; i++) {
            components.get(i).adjustWidth(this.components.size());
        }

    }
    
}

/* Reactのコンポーネントを想定 全てのコンポーネントはdisplay=flexで横並び */
/* コンポーネントが追加されるたびに、追加したコンポーネントを含む全てのコンポーネントのwidthを均等にする */
class Component {

    String name;
    int width;

    Component(String name) {
        this.name = name;
    }

    void adjustWidth(int num) {
        this.width = 300 / num;
        System.out.println(this.name + " component width : " + String.valueOf(this.width));
    }

}
