/*Create a function that takes a number of wins, draws and losses 
and calculates the number of points a football team had obtained so far.
 Wins get 3pts.
 Draws get 1 point
 Losses get 0 points
- footballPoints(3, 4, 2) => 13,
- footballPoints(5, 0, 2) => 15,
- footballPoints(0, 0, 1) => 0
Notes: Inputs will be numbers greater than or equal to 0.*/

const teamScores = {winpoints: 3, drawpoints: 1, losspoints: 0}

const footballPoints = (wins, draws, losses) => {
   // const teamScore = teamScores.find(score => score.winpoints == wins);
    let {winpoints, drawpoints, losspoints} = teamScores;
    let totalScore = 0;
    totalScore = (winpoints*wins) + (drawpoints*draws) + (losspoints*losses)

    return totalScore
}
console.log(footballPoints(3,4,2));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1));