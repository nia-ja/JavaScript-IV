// CODE here for your Lambda Classes

// ============================ CLASSES ===================================

// Class Person
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender; 
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
} //<-------------- Person


// Sub-Class Instructor
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        let points = this.randomGrade(student);
        return `${student.name} receives ${points} points on ${subject}.`; // changed method to show points not a string "a perfect score"
    }

    //stretch problem 2
    randomGrade (student) {
        let num1 = student.grade();
        const min = Math.ceil(-5);
        const max = Math.floor(6);
        let num2 = Math.floor(Math.random() * (max - min)) + min;
        return (num1 + num2);
    }

} // <---------- Instructor



// Sub-Class Student
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        const subjects = this.favSubjects;
        subjects.forEach(function(subject) {
            console.log(subject);
        });
    }

    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    } 

    //stretch problem 1
    grade() {
        const min = Math.ceil(1);
        const max = Math.floor(101);
        let number = Math.floor(Math.random() * (max - min)) + min;
        return number;
    }

    //stretch problem 3
    graduate(grade) {
        if (grade > 70) {
            return `Congratulatons, ${this.name}, you did it!`;
        } else {
            return `Sorry, but not yet!`;
        }
    }

} // <---------- Student


// Sub-Class ProjectManager
class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
} // <------ ProjectManager


// ============================ OBJECTS ===================================


//Instructor objects
const mario = new Instructor({
    name: "Mario",
    age: 37,
    location: "Mushroom Kingdom",
    gender: "male",
    specialty: "Front-end",
    favLanguage: "CSS",
    catchPhrase: "I'm an Italian plumber"
});

const tania = new Instructor({
    name: "Tania",
    age: 18,
    location: "Livermore, CA",
    gender: "female",
    specialty: "Computer Sience",
    favLanguage: "Python",
    catchPhrase: "print('Hello, world!')"
});

//Student objects
const mike = new Student({
    name: "Mike",
    age: "30",
    location: "Ohio",
    gender: "male",
    previousBackground: "gender studies",
    className: "Web15",
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const lina = new Student({
    name: "Lina",
    age: "25",
    location: "Charlotte, NC",
    gender: "female",
    previousBackground: "biology",
    className: "Webpt4",
    favSubjects: ['CSS', 'JavaScript', 'Python']
});

//PM objects
const josh = new ProjectManager({
    name: "Josh",
    age: 55,
    location: "NY, NY",
    gender: "male",
    specialty: "Back-end",
    favLanguage: ['C', "Perl", "Erlang"],
    catchPhrase: "Let's get this bread!",
    gradClassName: "Web4",
    favInstructor: "Cameron Pope"
});

const mary = new ProjectManager({
    name: "Mary",
    age: 41,
    location: "Seattle, WA",
    gender: "female",
    specialty: "Front-end",
    favLanguage: ['CSS', 'HTML', 'Python'],
    catchPhrase: "There is an engeneer in everyone!",
    gradClassName: "Webpt4",
    favInstructor: "Josh Kneel"
});



// ========================== TESTS =================================================

//tests for INSTRUCTOR - Mario
console.log(mario);
//from Instructor Sub-Class
console.log(mario.specialty);
console.log(mario.demo('HTML'));
console.log(mario.grade(lina, 'JavaScript'));
console.log(mario.randomGrade(mike));
//from Person Class
console.log(mario.gender);
console.log(mario.speak());


//tests for INSTRUCTOR - Tania
console.log(tania);
//from Instructor Sub-Class
console.log(tania.catchPhrase);
console.log(tania.grade(mike, 'CSS'));
console.log(tania.demo("Python"));
console.log(tania.randomGrade(mike));
//from Person Class
console.log(tania.age);
console.log(tania.speak());


//tests for STUDENT - Mike
console.log(mike);
//from Sudent Sub-Class
console.log(mike.favSubjects);
console.log(mike.listsSubjects());
console.log(mike.PRAssignments('"JS IV"'));
console.log(mike.sprintChallenge('"JavaScript Fundamentals"'));
console.log(mike.grade());
//from Person Class
console.log(mike.age);
console.log(mike.speak());


//tests for STUDENT - Lina
console.log(lina);
//from Sudent Sub-Class
console.log(lina.previousBackground);
console.log(lina.listsSubjects());
console.log(lina.PRAssignments('"User Interface I"'));
console.log(lina.sprintChallenge('"Introduction to User Interface and Git"'));
console.log(lina.graduate(80));
console.log(lina.graduate(70));
console.log(lina.graduate(71));
console.log(lina.graduate(-2));
console.log(lina.graduate(0));
//from Person Class
console.log(lina.gender);
console.log(lina.speak());


//tests for PM - Josh
console.log(josh);
//from PM Sub-Class
console.log(josh.gradClassName);
console.log(josh.standUp("Web4"));
//from Instructor Sub-Class
console.log(josh.catchPhrase);
console.log(josh.demo('"DOM I"'));
console.log(josh.randomGrade(lina));
//from Person Class
console.log(josh.age);
console.log(josh.speak());


//tests for PM - Mary
console.log(mary);
//from PM Sub-Class
console.log(mary.favInstructor);
console.log(mary.debugsCode(lina, '"JS-II"'));
//from Instructor Sub-Class
console.log(mary.specialty);
console.log(mary.grade(lina, '"Responsive Web Design - I"'));
//from Person Class
console.log(mary.gender);
console.log(mary.speak());