/* 7) Display all multiple of 3 numbers in the range 0 - 40.
Needs to return 3, 6, 9, etc. */
var multipleArray = [];
var arrSpace = ", ";
for (let nbr = 0; nbr <= 40; nbr++) {
    if (nbr % 3 == 0) {
        multipleArray += nbr + arrSpace;
    }
}
console.log(multipleArray);

/* 8) Iterate from 0 - 15 and check if the current number is odd or even.
Return 1 => odd, 2 => even */
 
var oddOrEven = [];
for (nbr = 0; nbr <= 15; nbr++) {
    if (nbr % 2 != 0) {
        oddOrEven += nbr + arrSpace
        console.log(1)
    } else {
        oddOrEven += nbr + arrSpace
        console.log(2)
    }
}

/*9) Calculate your age.
Hint: You can use Date*/

/* 10) Capitalize the first letter of the word in a string.
- have fun => Have Fun */