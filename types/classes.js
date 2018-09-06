var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, nickName) {
        this.name = name;
        this.nickName = nickName;
        this.age = 45; // Pode ser acessado pela classe filha
        this.gender = "Male";
    }
    Person.prototype.showAge = function () {
        console.log("My age is: ", this.age);
        this.showGender();
    };
    Person.prototype.showGender = function () {
        console.log("My gender is: ", this.gender);
    };
    return Person;
}());
var person = new Person("Flavio", "Careca");
person.showAge();
var Flavio = /** @class */ (function (_super) {
    __extends(Flavio, _super);
    function Flavio(nickName) {
        var _this = _super.call(this, "Flavio", nickName) || this;
        _this.age = 56;
        return _this;
    }
    return Flavio;
}(Person));
var flavio = new Flavio("careca");
console.log(flavio);
flavio.showAge();
//Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return "My species is " + this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Green leaf";
console.log(plant.species);
// Classe abstrata
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Animal";
        this.qtdLegs = 4;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.showDescription = function () {
        console.log("This is a Dog, with " + this.qtdLegs + " legs");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.showDescription();
//Singleton
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    ;
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
console.log(singleton);
