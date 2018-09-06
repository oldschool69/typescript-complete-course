// let & const
console.log('LET & CONST');
var variable = "123456";
function reset() {
    // let variable = "blablabla";
    console.log(variable);
}
console.log(variable);
reset();
//arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (val1, val2) {
    return val1 + val2;
};
console.log(addNumbers(10, 55));
var multiplyNumbers = function (val1, val2) { return val1 * val2; };
console.log(multiplyNumbers(2, 5));
//No parameters
var greet = function () {
    console.log('Hello!!');
};
greet();
//for one parameter it's possible to ommit the parenteses
var greetFriend = function (friend) {
    console.log("Hello, " + friend + " !!!");
};
greetFriend('Bob');
console.log('DEFAULT PARAMETERS');
var countDown = function (value) {
    if (value === void 0) { value = 10; }
    while (value > 0) {
        console.log(value);
        value--;
    }
    console.log('Done, ', value);
};
countDown();
countDown(5);
console.log('SPREAD & REST');
var numbers = [1, 10, 99, -5];
console.log(Math.max(0, 33, 8, 102, -9));
console.log(Math.max.apply(Math, numbers)); //Spread, quando e usado na variavel
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Flavio", 1, 2, 3));
console.log(makeArray("Bla bla"));
//Destructuring
console.log('DESTRUCTURING');
var myHobbies = ["Playing guitar", "Drinking"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, " ", hobby2);
var user = { userName: "Flavio", userAge: 45 };
var userName = user.userName, userAge = user.userAge;
console.log(userName, userAge);
var carro = {
    marca: "Honda",
    model0: "City",
    cor: "Cinza",
    dimensoes: {
        altura: 1.20,
        largura: 2.05,
        comprimento: 3.20
    }
};
var altura = carro.dimensoes.altura;
console.log(altura);
//Template Literals
var myName = "Flavio";
var msg = "Hi, I'm \n" + myName + " !!\nNice to meet you!";
console.log(msg);
