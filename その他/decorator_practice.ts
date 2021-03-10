/* "experimentalDecorators": true, を設定してもエラーが消えずコンパイルできない */

var decorator_func = (class_constructor_func: Function) => {

}

@decorator_func
class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark(): void {
        console.log("がるる");
    }

}

var dog = new Animal("イヌ");
dog.bark();