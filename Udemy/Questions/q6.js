//when do you get NaN

let a= 4;
let b="value";
let c = 2;

console.log(a*b);

if(!isNaN(a*b)){
    console.log(`we all good`)
}
else{
    console.log(` bro u messed up`)
}

//while isNaN is nice we can check for NaN and Infinity with isFinate

if(isFinite(a*b)){
    console.log(`we all good`)
}
else {
    console.log(` bro u messed up`)

}

if(isFinite(a*c)){
    console.log(`we all good`)
}
else {
    console.log(` bro u messed up`)

}