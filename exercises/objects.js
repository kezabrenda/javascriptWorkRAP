const salvatorSchool = {
    studentName: "Hope Mikaelson",
    studentAge: 17,
    studentSpecialAbility_one: "witch",
    studentSpecialAbility_two: "werewolf",
    studentSpecialAbility_three: "vampire",
    inactiveAbilities: "witch"
};


//edit a property 
salvatorSchool["inactiveAbilities"] = "vampire";

//delete a property
delete salvatorSchool.studentSpecialAbility_three;

//iteration over an object
for(var aboutStudent of Object.keys(salvatorSchool)) {
    console.log(salvatorSchool[aboutStudent]);
}

//notation > object.property
console.log(`The student ${salvatorSchool.studentName}, aged ${salvatorSchool.studentAge}, has the abilities of a ${salvatorSchool.studentSpecialAbility_one}, a ${salvatorSchool.studentSpecialAbility_two}, and a ${salvatorSchool.studentSpecialAbility_three}.`);

//bracket notation > object['property']
console.log(`The student ${salvatorSchool['studentName']}, aged ${salvatorSchool['studentAge']}, has the abilities of a ${salvatorSchool['studentSpecialAbility_one']}, a ${salvatorSchool['studentSpecialAbility_two']}, and a ${salvatorSchool['studentSpecialAbility_three']}.`);

const possibleSalvatorStudent = {
    names: "Landon Kirby",
    age: 17,
    "supernatural ability": "none confirmed",
};
//bracket notation when the key is a string and contains spaces
console.log(`The new applicant has ${possibleSalvatorStudent['supernatural ability']} abilities yet.`);

possibleSalvatorStudent.discoveredAbility = "Phoenix";
possibleSalvatorStudent["aboutAbility"] = "Cannot be killed by anything except a gold arrow";

for(var aboutApplicant of Object.keys(possibleSalvatorStudent)) {
    console.log(possibleSalvatorStudent[aboutApplicant]);
}