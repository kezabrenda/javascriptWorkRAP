/*Create a function that takes an array and a string as arguments and 
return the index of the string.
- findIndex([“hi”, “zatec”, “Rwanda”, “training”], “Rwanda”) => 2,
- findIndex([“iPhone”, “iPad”, “iMac”, “MacBook Air”], “iPad”) => 1,
- findIndex([“html”, “css”, “javascript”, “tailwindcss”], “css”) => 3,
- findIndex([“toyota”, “mercedes benz”, “volkswagen”, “maclaren”], “toyota”) => 0
Notes
 Don’t forget to return the result.
 If you are stuck, you can read more about Array.prototype.indexOf(). */

const findIndex = (array, string) => {
    return array.indexOf(string)
}
console.log(findIndex(['hi', 'zatec', 'Rwanda', 'training'], 'Rwanda'))
console.log(findIndex(['iPhone', 'iPad', 'iMac', 'MacBook Air'], 'iPad'))
console.log(findIndex(['html', 'css', 'javascript', 'tailwindcss'], 'tailwindcss'))
console.log(findIndex(['toyota', 'mercedes benz', 'volkswagen', 'maclaren'], 'toyota'))