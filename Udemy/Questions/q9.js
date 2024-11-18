//currying in javascript??? what the hell is it?  how does it work?  Lets find out

//Is this valid syntax?   sum(5)(6); => returns 11?

const sumExplained = (a) => {
    return (b) => {
        return a+b;
    }
}

const sum = a => b => a+b;
//There are two ways to call our inner functions one we have already seen....

const cl = sum(5);
const answer = cl(6);
console.log(answer);
//this is fine!

//But we can use currying to reduce some coding

const foo = sum(5)(6);
console.log(foo);

//taadah currying