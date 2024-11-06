//closure

function outterA(){

    function innerA(){
        console.log(`hit`)
    }
}
//uncomment to test this
//innerA()

//we can refernce the inner function
function outterB(){

    function innerB(){
        console.log(`hit`)
    }
    return innerB;
}

const clB=outterB();
//now that cl is pointing to our function execute it
clB();

//lets trim this down to make cleanner code and use anonymous function 
function outter(){
    return function(){
        console.log(`hit`)
    }
}

const cl=outter();
//now that cl is pointing to our function execute it
cl();

//.....but wait this isnt even arrow notation its weak asf

//simple counter with closure

const counter = () => {
    let count = 0
    return () => {
        count++;
        return count;
    }
}

const al = counter();

console.log(al());
console.log(al());
console.log(al());
console.log(al());