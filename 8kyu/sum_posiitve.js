//TASK
// You get an array of numbers, return the sum of all of the positives ones.

// SOLUTION
function positiveSum(arr) {
    let sumPositive = 0;
    arr.map(el => el > 0 ? sumPositive += el : '' )
    return sumPositive
}