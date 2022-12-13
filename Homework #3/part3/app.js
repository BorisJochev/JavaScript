

let input = prompt("Enter the amount");
let num1 = parseInt(input);


function sum(num1){



    if ( num1 <= 1500){

        console.log("Picked up: " + num1);
        console.log("Sum on account: " + (1500 - num1)); 

    }else{

        console.log("You don't have enough funds in your account.")
    }


}

sum(input)


