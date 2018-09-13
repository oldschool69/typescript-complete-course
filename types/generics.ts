//Simple Generic 
function echo(data: any) {
    return data;
}

console.log(echo(45));
console.log(echo("Flavio"));
console.log(echo({name: "Flavio", age: 45}));

//Better Generic 
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho<number>(45));
//console.log(betterEcho<number>('33')); //Erro de compilacao, força o tipo
console.log(betterEcho("Flavio").length);
console.log(betterEcho({name: "Flavio", age: 45}));

//Buit in Generics
const testResults: Array<number> = [5.33, 10.68];
testResults.push(-55.2);
//testResults.push("15"); //compilation error
console.log(testResults);

//Generic Arrays
function printAll<T>(data: T[]){
    data.forEach(element => console.log(element));
}

class Bird {
    color: string;
    size: string;
};

const birds: Bird[] = [{color: "gray", size: "5 cm"}, {color: "green", size: "25 cm"}];

printAll<string>(["Pera", "Uva", "Maçã"]);
printAll<number>([15,  5, 102]);
printAll<Bird>(birds);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Do something here"));

//Generic classes
class SimpleMath<U extends number | string, T extends number | string>{
    baseValue: U;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    } 
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "9";
console.log(simpleMath.calculate());



