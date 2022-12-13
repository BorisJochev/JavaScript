



function parameter(type){

let x = typeof type;

return x;
}



console.log(parameter(person = {firstName: "Boris"}));
console.log (parameter("Hello"));
console.log (parameter(25));
console.log(parameter(10 > 9));
console.log(parameter());








