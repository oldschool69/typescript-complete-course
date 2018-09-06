interface Student {
    firstName: string;
    age?: number; //? means, optional propertie
    [propName: string]: any; //Propriedade dinamica, pode ser qq tipo de dado
}

function showStudent(student: Student) {
    console.log("Student name: " + student.firstName);
    console.log("Hobbies: ", student.hobbies);
    console.log("Weight: ", student.weight);
}

function changeName(student: Student) {
    student.firstName = "Carlos";
}   


const student = {
    firstName: "Flavio",
    age: 45,
    hobbies: ["Fishing", "Gambling"]
}

const student2 = {
    firstName: "Monica",
    weight: 85
}


showStudent({firstName: "Barbara", age: 15, weight: 78, hobbies: ["Drink", "Fuck"]});
changeName(student);
showStudent(student);
showStudent(student2);