interface Student {
    firstName: string;
    age?: number; //? means, optional propertie
    [propName: string]: any; //Propriedade dinamica, pode ser qq tipo de dado
    displayName(lastName: string): void;
}

function showStudent(student: Student) {
    console.log("Student name: " + student.firstName);
    console.log("Hobbies: ", student.hobbies);
    console.log("Weight: ", student.weight);
    student.displayName('Cuca');
}

function changeName(student: Student) {
    student.firstName = "Carlos";
}   


const student = {
    firstName: "Flavio",
    age: 45,
    hobbies: ["Fishing", "Gambling"],
    displayName(lastName: string): void {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
}

const student2 = {
    firstName: "Monica",
    weight: 85,
    displayName(lastName: string): void {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
}


showStudent({firstName: "Barbara", age: 15, weight: 78, hobbies: ["Drink", "Fuck"], displayName: (lastName) =>{
    console.log('I\'m fucking ' + lastName);
}});
changeName(student);
showStudent(student);
showStudent(student2);
student2.displayName('Oliveira');

class TIStudent implements Student {
    [propName: string]: any;    
    firstName: string;
    displayName(lastName: string): void {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
    skills: [string, string]; // propriedade nao existente na interface
}

const tiStudent = new TIStudent();
tiStudent.firstName = 'Mariana';
showStudent(tiStudent);
tiStudent.skills = ['Java', 'Linux'];
tiStudent.displayName('Batatinha');
console.log(tiStudent.skills);

//Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = (value1: number, value2: number) => (value1 + value2) * 2;

console.log(myDoubleFunction(2, 5));

//Interface Inheritance
interface MedicineStudent extends Student {
    
}

const medicineStudent: MedicineStudent = {
    age: 58,
    firstName: "Augusto",
    displayName(lastName: string): void {
        console.log('Hi, I\'m ' + this.firstName + ' ' + lastName);
    }
};

console.log(medicineStudent.displayName('Josuel'));