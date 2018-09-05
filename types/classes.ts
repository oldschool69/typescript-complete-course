// Classe abstrata

abstract class Animal {
    protected name: string = "Animal";
    protected qtdLegs: number = 4;

    abstract showDescription();  
    
}


class Dog extends Animal {

    showDescription() {
        console.log("This is a Dog, with " + this.qtdLegs + " legs");
    }
     
}

const dog = new Dog();
dog.showDescription();


//Singleton
class Singleton {
    private constructor() {};
    private static instance: Singleton;

    static getInstance(): Singleton {
        if(!this.instance){
            this.instance = new Singleton();
        }
        
        return this.instance;
    }
}

const singleton = Singleton.getInstance();
console.log(singleton);

