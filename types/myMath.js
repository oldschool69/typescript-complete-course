var MyMath;
(function (MyMath) {
    function sumNumbers(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumNumbers = sumNumbers;
    function multiplyNumbers(num1, num2) {
        return num1 * num2;
    }
    MyMath.multiplyNumbers = multiplyNumbers;
})(MyMath || (MyMath = {}));
