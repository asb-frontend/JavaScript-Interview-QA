//we gottta know arrow notation so we aint weak asf



function oldTitties(old, titties) {

}

const newAssAndTitties = (a, b) => {

}

//whats is an IIFE?

//Immediately Invoked Function Expression

//looks lkike this

(function IIFE(){
    console.log("IIFE triggered itself!!")
})();


//but wait we use arrow notation cuase we strong boys
(() => {
    console.log(`way cooler IIFE.`)
})();


//dang so arrow notation is cool does it not do anything?
//lets see...

const arrow = () => {
    console.log(this);
    console.log(arguments)
}

//vs

function notArrow() {
    console.log(this);
    console.log(arguments)
}

arrow(1,2,3)
notArrow(1,2,3)

const arrow2 = (...spread) => {
console.log(spread)
}

arrow2(1,2,3)

//arrow is very verbose
//functionthat adds 5 to the paramter
const verboseArrow = a => a+5

console.log(verboseArrow(10))