/* "experimentalDecorators": true, を設定してもエラーが消えずコンパイルできない */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorator_func = function (class_constructor_func) {
};
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.bark = function () {
        console.log("がるる");
    };
    Animal = __decorate([
        decorator_func
    ], Animal);
    return Animal;
}());
var dog = new Animal("イヌ");
dog.bark();
