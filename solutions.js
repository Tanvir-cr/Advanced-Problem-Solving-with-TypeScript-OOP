"use strict";
// Problem 1
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Problem 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('typescript'));
function checkType(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    else {
        return 'number';
    }
}
console.log(checkType('Hello'));
console.log(checkType(42));
// Problem 4
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", year: 2024 };
console.log(toggleReadStatus(myBook));
// Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
// Problem 7
function getIntersection(array1, array2) {
    return array1.filter((item) => array2.includes(item));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getIntersection(array1, array2));
