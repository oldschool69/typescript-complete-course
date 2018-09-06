class Person {
    protected age: number = 45; // Pode ser acessado pela classe filha
    private gender: string = "Male";
    
    constructor(public name: string, public nickName: string) {}

    showAge() {
        console.log("My age is: ", this.age);
        this.showGender();
    }

    private showGender() {
        console.log("My gender is: ", this.gender);
    }
}

const person = new Person("Flavio", "Careca");
person.showAge();

class Flavio extends Person {
    constructor(nickName: string) {
        super("Flavio", nickName);
        this.age = 56;
    }
}

const flavio = new Flavio("careca");

console.log(flavio);
flavio.showAge();

//Getters and Setters
class Plant {
    private _species: string = "Default";

    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }
    }
    
    get species(){
        return "My species is " + this._species;
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = "Green leaf";
console.log(plant.species);