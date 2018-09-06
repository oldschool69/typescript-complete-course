// let & const
console.log('LET & CONST');
let variable = "123456";



function reset() {
    // let variable = "blablabla";
    console.log(variable);
}

console.log(variable);

reset();

//arrow functions
console.log('ARROW FUNCTIONS');

const addNumbers = function(val1: number, val2: number): number {
    return val1 + val2 ;  
}

console.log(addNumbers(10, 55));

const multiplyNumbers = (val1: number, val2: number): number => val1 * val2;

console.log(multiplyNumbers(2, 5));

//No parameters
const greet = () => {
    console.log('Hello!!');
};

greet();

//for one parameter it's possible to ommit the parenteses
const greetFriend = friend => {
    console.log(`Hello, ${friend} !!!`);
 }

 greetFriend('Bob');

 console.log('DEFAULT PARAMETERS');

 const countDown = (value: number = 10): void => {

    while(value > 0) {
        console.log(value);
        value--;
    }

    console.log('Done, ', value);
 }; 

 countDown();
 countDown(5);

 console.log('SPREAD & REST');
 const numbers = [1, 10, 99, -5];
 console.log(Math.max(0, 33, 8, 102, -9));
 console.log(Math.max(...numbers)); //Spread, quando e usado na variavel

 function makeArray(name: string, ...args: number[]){ //Rest, quando e usado no parametro da funcao
     return args;
 }

console.log(makeArray("Flavio", 1, 2, 3));
console.log(makeArray("Bla bla"));

//Destructuring
console.log('DESTRUCTURING');
const myHobbies = ["Playing guitar", "Drinking"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, " ", hobby2);

const user = { userName: "Flavio", userAge: 45 };
const {userName, userAge} = user;
console.log(userName, userAge);

const carro = {
    marca: "Honda",
    model0: "City",
    cor: "Cinza",
    dimensoes: {
        altura: 1.20,
        largura: 2.05,
        comprimento: 3.20
    }
};

const {altura} = carro.dimensoes;
console.log(altura);

//Template Literals
const myName = "Flavio";

const msg = `Hi, I'm 
${myName} !!
Nice to meet you!`;

console.log(msg);
