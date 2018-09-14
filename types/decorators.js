var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Class decorator
function logged(constructorFn) {
    console.log(constructorFn);
}
function noLogged(constructor) {
    return null;
}
var Dinossaur = /** @class */ (function () {
    function Dinossaur() {
        console.log('Hi!');
    }
    Dinossaur = __decorate([
        logged
    ], Dinossaur);
    return Dinossaur;
}());
//Factory
function logging(value) {
    return value ? logged : noLogged;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
//Multiple decorators
var Fruit = /** @class */ (function () {
    function Fruit() {
        this.name = "Banana";
        this.color = "Yellow";
    }
    Fruit = __decorate([
        logging(true),
        printable
    ], Fruit);
    return Fruit;
}());
var fruit = new Fruit();
fruit.print();
//Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//Property Decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: true
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("WebApp");
project.calcBudget();
project.calcBudget = function () {
    console.log(3500);
};
project.calcBudget();
console.log(project.projectName);
project.projectName = "MobileApp";
console.log(project.projectName);
//Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printNumberOfStudents = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2500);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printNumberOfStudents", null);
    return Course;
}());
var course = new Course("Typescript for dummies");
