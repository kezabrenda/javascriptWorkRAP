/**Create a function which calculates the amount of fuel it needs, once given the distance. If a
car needs 5 times the amount of fuel than the distance it travels but it must always carry a
minimum of 20litres fuel before starting.
- calculateFuel(15) => 75,
- calculateFuel(20) => 100,
- calculateFuel(38) => 190
Notes
 Distance will be a number greater than zero.
 Return 20litres if the calculated fuel turns out to be less than 20litres. */

// amountOfFuel(20l)=5*distance, distance>0, 


const calculateFuel = distance => {
    const amountOfFuel = distance * 5;

    if (amountOfFuel < 20) {
        console.log('20 litres')
    } else {
        console.log(amountOfFuel)
    }
}
calculateFuel(15)
