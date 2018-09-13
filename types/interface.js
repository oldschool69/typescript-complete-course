function showStudent(student) {
    console.log("Student name: " + student.firstName);
    console.log("Hobbies: ", student.hobbies);
    console.log("Weight: ", student.weight);
    student.displayName('Cuca');
}
function changeName(student) {
    student.firstName = "Carlos";
}
var student = {
    firstName: "Flavio",
    age: 45,
    hobbies: ["Fishing", "Gambling"],
    displayName: function (lastName) {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
};
var student2 = {
    firstName: "Monica",
    weight: 85,
    displayName: function (lastName) {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
};
showStudent({ firstName: "Barbara", age: 15, weight: 78, hobbies: ["Drink", "Fuck"], displayName: function (lastName) {
        console.log('I\'m fucking ' + lastName);
    } });
changeName(student);
showStudent(student);
showStudent(student2);
student2.displayName('Oliveira');
var TIStudent = /** @class */ (function () {
    function TIStudent() {
    }
    TIStudent.prototype.displayName = function (lastName) {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    };
    return TIStudent;
}());
var tiStudent = new TIStudent();
tiStudent.firstName = 'Mariana';
showStudent(tiStudent);
tiStudent.skills = ['Java', 'Linux'];
tiStudent.displayName('Batatinha');
console.log(tiStudent.skills);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) { return (value1 + value2) * 2; };
console.log(myDoubleFunction(2, 5));
var medicineStudent = {
    age: 58,
    firstName: "Augusto",
    displayName: function (lastName) {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
};
console.log(medicineStudent.displayName('Josuel'));
