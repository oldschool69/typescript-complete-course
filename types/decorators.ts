//Class decorator
function logged(constructorFn: Function){
    console.log(constructorFn);
}

function noLogged(constructor: Function){
    return null;
} 

@logged
class Dinossaur {
    constructor() {
        console.log('Hi!');
    }
}

//Factory
function logging(value: boolean): Function{
    return value ? logged : noLogged;
}

@logging(true)
class Car{

}

//Advanced
function printable(constructorFn: Function){
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

//Multiple decorators
@logging(true)
@printable
class Fruit {
    name = "Banana";
    color = "Yellow";
} 

const fruit = new Fruit();
(<any>fruit).print();

//Method Decorator
function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

//Property Decorator
function overwritable(value: boolean){
    return function(target: any, propName: string): any{
        const newDescriptor: PropertyDescriptor = {
            writable: true
        };

        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000);
    }
}

const project = new Project("WebApp");
project.calcBudget();
project.calcBudget = function() { //this will not work, function cannot be overriden
    console.log(3500);
}; 
project.calcBudget();
console.log(project.projectName);
project.projectName = "MobileApp";
console.log(project.projectName);

//Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex", paramIndex);
}

class Course {

    name: string;
    constructor(name: string){
        this.name = name;
    }

    printNumberOfStudents(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(2500);
        }
    }
}

const course = new Course("Typescript for dummies");
