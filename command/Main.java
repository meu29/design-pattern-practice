package command;

import java.util.ArrayList;

/* コマンド = イベント */

class Main {
    public static void main(String[] args) {
        MacroCommand macroCommand = new MacroCommand();
        macroCommand.addCommand(new ComponentCommand(new Component()));
        macroCommand.addCommand(new CssCommand(new Css()));
        System.out.println("コマンド実行");
        macroCommand.execute();
        macroCommand.deleteCommand();
        System.out.println("コマンド実行");
        macroCommand.execute();
    }
}

interface Command {
    abstract void execute();
}

/* コマンドの集合 */
class MacroCommand implements Command {

    ArrayList<Command> commands = new ArrayList<Command>();

    void addCommand(Command command) {
        this.commands.add(command);
    }

    public void execute() {
        
        if (this.commands.size() > 0) {
            for (int i = 0; i <= this.commands.size() - 1; i++) {
                this.commands.get(i).execute();
            }
        } else {
            System.out.println("コマンドがありません");
        }

    }

    public void deleteCommand() {
        this.commands = new ArrayList<Command>();
    }

}

class ComponentCommand implements Command {

    Component component;

    ComponentCommand(Component component) {
        this.component = component;
    }

    public void execute() {
        component.createComponent();
    }

}

/* コマンドに対応する(コマンドによってメソッドの実行を要求される)クラス  1:1の関係 */
class Component {

    void createComponent() {
        System.out.println("<form action='/' method='post'><input type='text'><input type='submit'></form>");
    }    

}

class CssCommand implements Command {

    Css css;

    CssCommand(Css css) {
        this.css = css;
    }

    public void execute() {
        this.css.createCss();
    }

}

class Css {

    void createCss() {
        System.out.println("input { color: 'white'; background: 'yellow' }");
    }

}