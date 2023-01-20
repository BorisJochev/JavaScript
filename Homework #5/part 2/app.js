

// HOMEWORK PART 2



// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)










let numbers = [2,25,69,8,14,32,4,7,9,42];

let htmlList;
htmlList = "<ul>";
for (let i = 0; i < numbers.length; i++){
        htmlList += "<li>" + numbers[i] + "</li>";
}

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

let math = 0;
let result = "";
for (let i = 0; i < numbers.length; i++){
    math += numbers[i];
    result += numbers[i] + "+"; 
}
let finalResult = result.slice(0, -1) + "=" + math;



document.getElementById("list").innerHTML = htmlList;
document.getElementById("sum").innerHTML = "Sum of the array numbers: " + sum;
document.getElementById("math").innerHTML = finalResult;