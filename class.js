class Student {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.school = "BZS"
    }
}

const student1 = new Student(22, "Sakib");
const student2 = new Student(11, "Tasin");
const student3 = new Student(33, "Habib");

console.log(student1, student2);
console.log(student1.name);
console.log(student3);