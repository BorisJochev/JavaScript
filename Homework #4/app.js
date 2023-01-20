// HOME WORK PART #1

// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert



// let story = ["name", "mood", "activity"]

// function tellStory(name, mood, activity){
//     story.push(name, mood, activity);
//     console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`)
// }

// tellStory("Boris", "good", "programing")

// ==============================================================================

// HOME WORK PART #2

// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.



// let numbers = []

// function numberSum(numbers){
//     let sum = 0;
//     for (i = 0; i < numbers.length; i++) {
//         if(validateNumber(numbers[i])){
//             return "Theres is an invalid number in the array";
//         }
//         sum += numbers[i]
//     }
//     return sum;
// }

// function validateNumber(num){
//     if(typeof num !== "number"){
//     return true;
//     }
// }

// console.log(numberSum([5, 6, 5, 9, 8]))
// console.log(numberSum([9, 5, 9, "7", 2]))

// ===============================================================================

// HOME WORK PART #3

// Write a javascript function that:

// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"


// let strings = []

// function text (strings){
    
//     let bigString = " ";
//     for (i = 0; i < strings.length; i++){
//         bigString += strings[i] + " ";
        

//     }
    
//     return bigString

// }

// console.log(text(["Hello", "there", "students", "of", "SEDC",  "!"]))

// ==================================================================================

// HOME WORK PART #4

// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

// for(i = 1; i <= 20; i++ ){
//     if (i % 2 === 0){
//          i += "\n"
//          console.log(i + "\n")
//     }else {
//         console.log( i + " ")
//     }
// }

// =========================================================================================


// HOMW WORK PART #5

// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// let numbers = [5,9,6,28,55,2]
//     let max = -Infinity;
//     let min = Infinity;
//     let sum = 0;    

// function sumNumber(){
    
//      for (let number of numbers ){
//         if(number > max){
//             max = number
//         }else if(number < min){
//             min = number
//         }
//         sum = max + min
//      }
// }
// sumNumber()
// console.log(max)
// console.log(min)
// console.log(sum)

// ===================================================================================


// HOMW WORK PART #6

// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]


// let firstName = ["Bob","Jill"]
// let lastName = ["Gregory","Wurtz"]

// function fullName(){
//     for (i = 0; i < firstName.length; i++){
//         console.log(`${i + 1} ${firstName[i]} ${lastName[i]}`)
//     }
// }

// fullName()

// ========================================================================








