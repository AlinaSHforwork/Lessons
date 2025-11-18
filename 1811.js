const { unescape } = require("querystring");

class student {
    name;
    weight;
    hight;
    age;

    constructor(a,b,c,d){
        console.log("from constructor")

        if (typeof a === "string"){
        this.name = a
        }else {a = undefined}

        if (typeof b === "number" && typeof c === "number" && typeof d === "number" ) {
        this.weight = b      
        this.hight = c
        this.age = d
        } else {b = undefined; c = undefined; d = undefined}
    }

    getName(){
        return this.name;
    }
}

const student1 = new student("Alina (>^-^<)",56,176,17);
/*
student1.name = "Alina (>^-^<)"
student1.weight = 56
student1.hight = 176
student1.age = 17
*/
console.log(student1)
console.log(student1 instanceof student)