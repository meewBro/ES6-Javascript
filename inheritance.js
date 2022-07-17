class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super(); //inherite parent propaties
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby1 = new Child("Arnold");
const baby2 = new Child("Tommy")
console.log(baby1, baby2);
console.log(baby2.getFullName());