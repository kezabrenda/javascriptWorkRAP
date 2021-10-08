//convert this into normal function
const teenager = age => {
    if (age > 18){
      console.log("Adult")
    } else {
      console.log("Teen")
    }
  }
  teenager(99);
// from arrow function to normal
function normalTeenager(normalAge) {
    if (normalAge > 18){
        console.log("Adult (normal function)")
    } else {
        console.log("Teen (normal function)")
    }
}
normalTeenager(99);

//                                function 1
//normal 
function birthYearCounter(currentAge, currentYear) {
    const birthYear = currentYear - currentAge;
    return birthYear;
}
const birthYearResult = birthYearCounter(21, 2021);
console.log('The year you were born in is ' + birthYearResult);

// arrow 
const arrowBirthYrCounter = (arrowCurrentAge, arrowCurrentYear) => arrowCurrentYear - arrowCurrentAge;
console.log('Using arrow function, the year you were born in is ' + arrowBirthYrCounter(21, 2021));

//                                function 2
// normal
function areaOfSquare(side) {
    const squareArea = side * side;
    return squareArea;
}
const squareResult = areaOfSquare(4);
console.log('The area of the given square is ' + squareResult);

//arrow
const arrowAreaOfSquare = sideArr => sideArr * sideArr;
console.log('The area of the given square by arrow function is ' + arrowAreaOfSquare(4));

//                                function 3
//normal
function areaOfRectangle(length, width) {
    const rectangleArea = length * width;
    return rectangleArea;
}
const rectangleResult = areaOfRectangle(5,6);
console.log('The area of the given rectangle is ' + rectangleResult);

//arrow
const arrowAreaOfRectangle = (L, W) => L * W;
console.log('The area of the given rectangle by arrow function is ' + arrowAreaOfRectangle(5,6));

//                                function 4
// normal
let firstActivity = "Just have a nice day!"
function mySchedule(time, day, activity) {
    if(time == 8.55) {
        activity = "join class";
        console.log('It is at '+time +', you should '+activity)
    } else if(time == 6.50 && day.toLowerCase() == "saturday") {
        activity = "go to Fusion Night";
        console.log('It is at '+time + ' on '+day +', you should '+activity)
    } else {
        console.log(firstActivity);
    }
}
mySchedule(8.55);
mySchedule(6.50, 'Saturday');
mySchedule();

//arrow
const arrowMySchedule = (arrTime, arrDay, arrActivity) => {
    if(arrTime == 8.55) {
        arrActivity = "join class";
        console.log('Using arrow function, it is at '+arrTime +', you should '+arrActivity)
    } else if(arrTime == 6.50 && arrDay.toLowerCase() == "saturday") {
        arrActivity = "go to Fusion Night";
        console.log('Using arrow function, it is at '+arrTime + ' on '+arrDay +', you should '+arrActivity)
    } else {
        console.log(firstActivity+' arrow-wise');
    }
}
arrowMySchedule(8.55);
arrowMySchedule(6.50, 'Saturday');
arrowMySchedule();


//                                function 5
// normal
function perimeterOfRectangle(length, width) {
    const rectanglePerimeter = (length + width)*2;
    return rectanglePerimeter;
}
console.log('The area of the given rectangle is ' + perimeterOfRectangle(3,2));

//arrow
const arrowPerimeterOfRectangle = (L, W) => (L+W)*2;
console.log('The area of the given rectangle by arrow function is ' + arrowPerimeterOfRectangle(3,2));

//                                function 5
//normal
function toCelsius(farh) {
    return (5/9) * (farh-32);
}
console.log('From Fahrenheit to Cesius degree, the result is ' +toCelsius(77));
// arrow
const toCelsiusByArrow = arrFarh => (5/9) * (arrFarh-32);
console.log('From Fahrenheit to Cesius degree using arrow function, the result is ' +toCelsiusByArrow(77));

