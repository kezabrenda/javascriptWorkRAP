const bestSuicideSquad = ['Harley Quinn', 'Joker', 'DeadShot', 'Flag', 'BloodSport', 'polkadotMan', 'Rat Catcher', 'King Shark', 'Milton'];

//slice
const mustHaveSquadMembers = bestSuicideSquad.slice(0, 4);
console.log(`Best Suicide Squad team, no doubt, is ${mustHaveSquadMembers}`);

const anotherMustHaveSquad = bestSuicideSquad.slice(4);
console.log(`Second best Suicide Squad is ${anotherMustHaveSquad}`);

const funnySquadMembers = bestSuicideSquad.slice(-4);
console.log(funnySquadMembers);

//concat
const justiceLeague = ['Batman', 'Cyborg', 'Marcian ManHunter', 'HawkGirl', 'Wonder Woman'];
const juniorJusticeSociety = ['StarGirl', 'WildCat', 'HourMan', 'DR. Mid-Nite'];

const superHeroesOfAllAges = justiceLeague.concat(juniorJusticeSociety);
console.log(`Recognized heroes ${superHeroesOfAllAges}`);

//indexOf
if (justiceLeague.indexOf('Marcian ManHunter') != -1) {
  console.log('Hero recognized!');
} else {
  console.log('Hero not recognized!');
}

if (justiceLeague.indexOf('Clark Kent') != -1) {
  console.log('Hero recognized!');
} else {
  console.log('Hero not recognized!');
}

//includes
console.log(juniorJusticeSociety.includes("WildCat"));
console.log(juniorJusticeSociety.includes("PatMan"));

//looping through
for (const hero of justiceLeague) {
  console.log(hero);
}

for (let i = 0; i < juniorJusticeSociety.length; i++) {
  console.log(`Here hero ${i} is ${juniorJusticeSociety[i]}`);
}
