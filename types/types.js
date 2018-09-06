//Using namespaces
/// <reference path="myMath.ts" />
var sumNumbers = MyMath.sumNumbers;
//tuple
var addr = ['Rua xxxx', 33];
console.log(addr);
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var pickColor = Color.Green;
console.log(pickColor);
//any
var carSpec = "BMW";
console.log(carSpec);
carSpec = { name: "BMW", price: 150.550, km: 0 };
console.log(carSpec);
//functions
//explicit return type
function getName() {
    return "Flavio";
}
console.log(getName());
//return nothing
function printName() {
    console.log("Flavio");
    //return "Flavio"; //compilation error
}
function multiply(val1, val2) {
    return val1 * val2;
}
//function types
var myFunc; //forca variavel aceitar funcoes com essa assinatura
//myFunc = getName; // erro de compilacao
//console.log(myFunc()); //erro de compilacao
myFunc = multiply;
console.log(myFunc(10, 30));
//objects 
var userData; //Forcando nome das propriedades e tipos em um objeto
userData = {
    name: 'Flavio',
    age: 45
};
console.log(userData);
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
//union types
var myRealAge = 27; //pode ser numero ou string
myRealAge = "27";
// myRealAge = true; //Erro de compilacao
//checar o tipo em tempo de execucao
var myAge = '45';
if (typeof myAge == "number") {
    console.log('its a number');
}
else {
    console.log('its a string');
}
//Tipo 'never'
function neverReturns() {
    throw new Error('An error!');
    // return "An Error!"; força erro de compilação
}
try {
    neverReturns();
}
catch (error) {
    console.error('Error returned!');
}
//Nulable types, para funcionar a propriedade 'strictNullChecks' tem que ser true
//no tsconfig.json
var canBeNull = 12;
canBeNull = 45;
canBeNull = null;
var canNotBeNull = 12;
// canNotBeNull = null; erro de compilacao
console.log(sumNumbers(10, 33));
console.log(MyMath.multiplyNumbers(2, 10));
