// object Task 

// task 1
// Access the golden rod color value in output.
// --------------------
// const color = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(color["golden rod"]);
// -------------------

// task 2
// For this object below add a property named passenger capacity with value 5
// --------------
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passengerCapacity = 5;
// car["passenger capacity"] = 5;
// console.log(car);
// ----------------

// task 3
// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);
// ----------------


// task 4
// Count the number of properties.
// Input:
// ----------------
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const keys = Object.keys(student).length;
// console.log(keys);
// -----------------------


// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types
// -------------------
// let myObject = {
//          name: 'John Doe',
//          age: 25,
//          city: 'Example City',
//          isStudent: true
//     };
    
//     for(key in myObject){
//         const valuetypes = typeof myObject[key];
//         console.log(`key: ${key} | types: ${valuetypes}`);
//     }
    // ------------------


// string Task 

// task 1
// Count how many times a string has the letter a
// --------------
// const item = 'I am reading a book.'
function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') { // Using toLowerCase() to count both 'a' and 'A'
            count++;
        }
    }
    return count;
}

// Example usage
const a = "JavaScript is an amazing language";
console.log(countLetterA(a)); // Output: 5




    