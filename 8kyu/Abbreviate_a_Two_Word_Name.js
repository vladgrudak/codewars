// TASK

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F


//SOLUTION
function abbrevName(name){

    return name.split(" ").map(e => Array.from(e[0])+".").join("").slice(0, -1).toUpperCase();

}

console.log(abbrevName("Vlad Ralka"));