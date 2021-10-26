// Array
const famousCartoonCharacters = ["Tom and Jerry", "SpongeBob SquarePants", "The Simpsons"];
const [forChildren, , parentalGuidance] = famousCartoonCharacters;

console.log(`Though all are cartoons, ${forChildren} is more appropriate for children than ${parentalGuidance}.`);

//array rest operator
const idealRestingEnvironment = ["a good book", "quite place", "fresh air space"];
const [restingActivity, ...restingSurrounding] = idealRestingEnvironment;

console.log(`The perferct environment for ${restingActivity} requires a ${restingSurrounding}.`);

const favoriteBookGenre = ["Fantasy", "Paranormal", "Adventure"];
const [goToGenre, secondBestGenre, allTimeGenre = "Classics"] = favoriteBookGenre;
console.log(`My library contains ${goToGenre}, ${secondBestGenre}, and ${allTimeGenre} books`);



//object destructuring
const salvatorSchool = {
    studentName: "Hope Mikaelson",
    studentAge: 17,
    specialAbility_one: "witch",
    specialAbility_two: "werewolf",
    specialAbility_three: "vampire",
};
const {studentName, studentAge, specialAbility_one:ability} = salvatorSchool;
console.log(studentName);
console.log(studentAge);
console.log(ability);

const {studentAbilityStatus = "Tribrid", studentName:studentNames, ...studentDetails} = salvatorSchool;
console.log(studentNames);
console.log(studentDetails);
console.log(studentAbilityStatus);

