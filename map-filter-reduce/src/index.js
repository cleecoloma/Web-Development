// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//     return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers)

// //forEach way
// var newNumbers =[];
// numbers.forEach(function (x) {
//     newNumbers.push(x * 2);
// });
// console.log(newNumbers)

// //More consise map
// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });
// console.log(newNumbers)

// var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num) {
//     return num > 10
// });
// console.log(newNumbers)

// //forEach way
// var newNumbers = [];
// numbers.forEach(function (num) {
//     if (num > 10) {
//         newNumbers.push(num);
//     }
// })
// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];
// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     console.log("accumulator =" + accumulator);
//     console.log("currentNumber =" + currentNumber);
// return accumulator + currentNumber;
// })
// console.log(newNumber)

// // forEach way
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber;
// })
// console.log(newNumber)

// var numbers = [3, 56, 2, 48, 5];
// //Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//     return num > 10;
// })
// console.log(newNumber)

// var numbers = [3, 56, 2, 48, 5];
// //FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//     return num > 10;
// })
// console.log(newNumber)

//Only shows first 100 characters
import emojipedia from "./emojipedia";
const justMeaning = emojipedia.map(function (x) {
    return x.meaning.substring(0,99)
})
console.log(justMeaning)