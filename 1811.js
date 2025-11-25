const prompt = require('prompt-sync')({ sigint: true }); 

class Student {
    constructor(name, weight, height, age) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.age = age;
    }
}
/*
const student1 = new Student("Alina (>^-^<)",56,176,17);

student1.name = "Alina (>^-^<)"
student1.weight = 56
student1.hight = 176
student1.age = 17

console.log(student1)
console.log(student1 instanceof student)
*/
const allStudents = []

function createStudent(studentarr, quantityStu) {
    // Check if the input is a valid number
    if (isNaN(quantityStu) || quantityStu <= 0) {
        console.error("Invalid quantity of students provided.");
        return studentarr;
    }

    for (let i = 0; i < quantityStu; i++) {
        console.log(`\n--- Entering data for student ${i + 1} ---`);

        // Collect all necessary properties using synchronous prompts
        const studentName = prompt(`Enter name for student ${i + 1}: `);
        const studentWeight = parseFloat(prompt(`Enter weight (kg) for student ${i + 1}: `));
        const studentHeight = parseFloat(prompt(`Enter height (cm) for student ${i + 1}: `));
        const studentAge = parseInt(prompt(`Enter age for student ${i + 1}: `), 10);

        // Create a new Student instance
        const newStudent = new Student(
            studentName,
            studentWeight,
            studentHeight,
            studentAge
        );

        // Add the new student instance to the array
        studentarr.push(newStudent);

        console.log(`Student ${i + 1} created:`, newStudent);
    }

    console.log("\nAll students created:");
    return studentarr;
}

// 4. Call the function and log the result
console.log(createStudent(allStudents, 3));