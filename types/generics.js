//Simple Generic 
function echo(data) {
    return data;
}
console.log(echo(45));
console.log(echo("Flavio"));
console.log(echo({ name: "Flavio", age: 45 }));
//Better Generic 
function betterEcho(data) {
    return data;
}
console.log(betterEcho(45));
//console.log(betterEcho<number>('33')); //Erro de compilacao, força o tipo
console.log(betterEcho("Flavio").length);
console.log(betterEcho({ name: "Flavio", age: 45 }));
//Buit in Generics
var testResults = [5.33, 10.68];
testResults.push(-55.2);
//testResults.push("15"); //compilation error
console.log(testResults);
//Generic Arrays
function printAll(data) {
    data.forEach(function (element) { return console.log(element); });
}
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
;
var birds = [{ color: "gray", size: "5 cm" }, { color: "green", size: "25 cm" }];
printAll(["Pera", "Uva", "Maçã"]);
printAll([15, 5, 102]);
printAll(birds);
//Generic Types
var echo2 = betterEcho;
console.log(echo2("Do something here"));
//Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "9";
console.log(simpleMath.calculate());
