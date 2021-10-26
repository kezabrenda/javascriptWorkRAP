/*Write a program for a bartender, where he only serves drinks to adults 
and when he’s not on a break session. Given the person’s age, 
and whether break time is in session, create a function which returns 
whether he should serve drinks.
- serveDrinks(17, true) => false,
- serveDrinks(19, false) => true,
- serveDrinks(30, true) => false
Notes
 Return true or false.
 Some countries have a slightly higher drinking age, but for the purposes of this
challenge, it will be 18years old. */
const serveDrinks = (personAge, breakTime) => {
    if (personAge >=18 && !breakTime) {
        return true
    } else {
        return false
    }
}
console.log(serveDrinks(17, true))
console.log(serveDrinks(19, false))
console.log(serveDrinks(30, true))