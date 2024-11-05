// Block Scope vs Function Scope

//this will cause error
// function a(){
// let x=10
// }

// function b(){
// console.log(x)
// }

// a()
// b()

//but what happens here?
let x=10

function a(){
    x=x+5
}

function b(){
console.log(x)
}

a()
b()


//hoisting (ES5) var does hoisting

console.log(howAmIHereBeforeBeingCreatedButNotThrowingError)

var howAmIHereBeforeBeingCreatedButNotThrowingError=5;

//Es6 uses let
//cant do this
// console.log(g);
// let g;

//but is more systemicatic and similar to other lngs

let z=4;
{
    let z=6;
    console.log('in the block', z)
}
console.log('out the block', z)
