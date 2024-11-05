
//rest parameeter
function sum(...numbers){
console.log(numbers);

}

sum(1,2)
sum(1,2,3,4,5)

//bad
// function sum1(...numbers, b){
//     console.log(numbers);
    
//     }
//spread

let arr1= [1,2,3,4];
let arr2= [...arr1,5,6,7]

console.log(arr2);

console.log(Math.max(arr2));
//almost...
console.log(Math.max(...arr2));
