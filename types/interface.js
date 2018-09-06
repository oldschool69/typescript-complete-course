function showStudent(student) {
    console.log("Student name: " + student.firstName);
    console.log("Hobbies: ", student.hobbies);
    console.log("Weight: ", student.weight);
}
function changeName(student) {
    student.firstName = "Carlos";
}
var student = {
    firstName: "Flavio",
    age: 45,
    hobbies: ["Fishing", "Gambling"]
};
var student2 = {
    firstName: "Monica",
    weight: 85
};
showStudent({ firstName: "Barbara", age: 15, weight: 78, hobbies: ["Drink", "Fuck"] });
changeName(student);
showStudent(student);
showStudent(student2);
