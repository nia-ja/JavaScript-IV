// CODE here for your Lambda Classes

//class Person
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender; 
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} //<-----Person



//subClass Instructor
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
        this.name = student.name;
        return `${student.name} receives a perfect score on ${subject}.`;
    }
} // <------ Instructor




//subClass Student
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        // const subjects = this.favSubjects;
        // function everySubject(arr, cb) {
        //     let length = arr.length;
        //     for (let i = 0; i < length; i++) {
        //         cb(arr[i]);
        //     }
        // }

        // everySubject(subjects, function(value){
        //     console.log(value);
        // });

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
} // <------ Student



class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp() {

    }

    debugsCode() {

    }
} // <------ ProjectManager

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

console.log(mario.speak());
console.log(mario.specialty);
console.log(mario.demo('HTML'));
console.log(tania.catchPhrase);
console.log(tania.speak());
console.log(mike.speak());
console.log(mike.favSubjects);
console.log(mike.listsSubjects());
console.log(tania.grade(mike, 'CSS'));
console.log(mike.PRAssignments('"JS IV"'));
console.log(mike.sprintChallenge('"CSS"'));
