// HOMEWORK PART 1

// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let name = prompt ("Name of the animal?");
let kind = prompt ("Kind of the animal?");
let speak = prompt ("Says:");

let parsedInput1 = parseInt (name );
let parsedInput2 = parseInt (kind );
let parsedInput3 = parseInt (speak );

if(Number.isNaN(parsedInput1 || parsedInput2 || parsedInput3 )){


let animal = {
    name: `${name}`, 

    kind: `${kind}`,

    speak:  function(){
          let speakAnimas = (`${kind} ${name} says: ${speak}`)
          return speakAnimas
        
    }
}

let speakAnimas = animal.speak()
console.log(speakAnimas)

}else{
    console.log("Not a valid")
}