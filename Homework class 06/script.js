$.getJSON("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
 function(students){



// ====================================================================
//  All students with an average grade higher than 3

let filterStudent1 = students.filter(x => x.averageGrade > 3).map(student => {
    return {
        name:`${student.firstName} ${student.lastName}`
    }
    })
console.log(filterStudent1);

// ===============================================================
// All female student names with an average grade of 5

let filterStudent2 = students
                            .filter(x => x.averageGrade === 5)
                            .filter(x => x.gender === "Female")
                            .map(student => {
    return {
        name:`${student.firstName} ${student.lastName}`
    }
    })
console.log(filterStudent2);

// ============================================================
// All male student full names who live in Skopje and are over 18 years old

let filterStudent3 = students
                               .filter(x => x.age >= 18)
                                .filter(x => x.city === "Skopje")
                                .filter(x => x.gender === "Male" )
                                .map(student => {
    return {
        name:`${student.firstName} ${student.lastName} `,
        city:`${student.city}`
    }
} )

console.log(filterStudent3)

//===================================================================
// The average grades of all female students over the age of 24

let filterStudent4 = students
                            .filter(x => x.gender === "Female")
                            .filter(x => x.age >= 24)
                            // .filter(x => x.averageGrade)
                            .map(student => {
                                return {
                                name:`${student.firstName} ${student.lastName}`,
                                averageGrade:`${student.averageGrade}`
                                }
                            })
                            console.log(filterStudent4)
                    
//====================================================================
// All male students with a name starting with B and average grade over 2
 
let filterStudent5 = students
                            .filter(x => x.averageGrade > 2)
                            .filter(x => x.gender === "Male")
                            .filter(x => x.firstName[0] === "B" )
                            .map(student => {
                                return {
                                name:`${student.firstName} ${student.lastName}`,
                                
                                }
                            })
                            console.log(filterStudent5)

                            

// students.forEach(element => console.log(element.firstName))

    


}) 


