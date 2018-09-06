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
