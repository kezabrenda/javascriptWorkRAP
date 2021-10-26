/*Write a function for:
 (i) Pass in 2 numbers, and print the sum.
sum(2,6) needs to return 8
 (ii) Validate if a number is in the range of 0 - 15.
Needs to return true or false
 (iii) Using the same code above, allow the possibility of entering a value aside from
numbers and prompt a response.
Hint: You can use NaN */

// (i)
const sum = (a, b) => {
    const printSum = a + b
    console.log(printSum)
}
//(ii) && (iii)
const numbersOrNot = value => {

    if (isNaN(value)){
        return NaN
    }else if (0 <= value && value >= 15) {
        return true
    } else {
        return false
    }

}
sum(2,6) //(i)
console.log(numbersOrNot(5)) //(ii)
console.log(numbersOrNot('h')) //(iii)