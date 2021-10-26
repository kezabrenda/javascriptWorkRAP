/** Write a function that checks whether a kid can watch an MA15+ rated movie. 
 For admittance, one of the following conditions needs to be met:
 The person is at least 15 years old.
 They have parental supervision.
 The function accepts 2 parameters, age and isSupervised. Return a Boolean.
- acceptIntoCinema(12, true) => true,
- acceptIntoCinema(13, false) => false,
- acceptIntoCinema(16, false) => true
Notes
 isSupervised is a Boolean */

const acceptIntoCinema = (kidAge, isSupervised) => {
    if (kidAge >=15 || isSupervised) {
        return true;
    } else {
        return false;
    }
}
console.log(acceptIntoCinema(12, true));
console.log(acceptIntoCinema(13, false));
console.log(acceptIntoCinema(16, false));
