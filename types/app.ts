//tuple
let  addr: [string, number] = ['Rua xxxx', 33];

console.log(addr);

//enum
enum Color {
    Gray,
    Green,
    Blue
}

let pickColor = Color.Green;
console.log(pickColor);

//any
let carSpec: any = "BMW";
console.log(carSpec);

carSpec = {name: "BMW", price: 150.550, km: 0};
console.log(carSpec);

//functions

//explicit return type
function getName(): string {
    return "Flavio";
}

console.log(getName());

//return nothing
function printName(): void {
    console.log("Flavio");
    //return "Flavio"; //compilation error
}

function multiply(val1: number, val2: number) : number {
    return val1 * val2;
}

//function types
let myFunc: (val1: number, val2: number) => number; //forca variavel aceitar funcoes com essa assinatura
//myFunc = getName; // erro de compilacao
//console.log(myFunc()); //erro de compilacao
myFunc = multiply;
console.log(myFunc(10, 30));

//objects 
let userData: {name: string, age: number}; //Forcando nome das propriedades e tipos em um objeto

userData = {
    name: 'Flavio',
    age: 45
}

console.log(userData);

// type complex
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

console.log(complex.output(true));

//union types
let myRealAge: number | string = 27; //pode ser numero ou string
myRealAge = "27";
// myRealAge = true; //Erro de compilacao

//checar o tipo em tempo de execucao
let myAge = '45';

if(typeof myAge == "number") {
    console.log('its a number');
} else {
    console.log('its a string');
}

//Tipo 'never'
function neverReturns(): never {
    throw new Error('An error!');
    // return "An Error!"; força erro de compilação
}

try {
    neverReturns();
} catch(error) {
    console.error('Error returned!');
}

//Nulable types, para funcionar a propriedade 'strictNullChecks' tem que ser true
//no tsconfig.json
let canBeNull: number | null = 12;
canBeNull = 45;
canBeNull = null;

let canNotBeNull = 12;
// canNotBeNull = null; erro de compilacao

