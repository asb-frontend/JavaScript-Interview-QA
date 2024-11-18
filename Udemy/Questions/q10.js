//Iterables and Iterators

//Arrays are iterable this means i can do fancy stuff like this:

let arr = [1,2,3,4]

for (let i of arr){
    console.log(i);
}

arr.forEach(i => {
    console.log(i);
});

//we can valid here
let itr = arr[Symbol.iterator]();
console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

//but if we make an Obj

let obj = {
    some: 0,
    thing: 1,
    start: 5,
    end: 10
}

//we cannot do this (uncomment to test)
// for(let j of obj){
//     console.log(j);
// }

obj[Symbol.iterator] = () => {
    return {
        next() {
            if(obj.start < obj.end){
                return {value: obj.start++, done: false}
            }
            else{
                return {done: true}
            }
        }
    }
}

//now we can
for(let j of obj){
    console.log(j);
}

let betterObj = {
    some: 0,
    thing: 1,
    start: 5,
    end: 10,
    [Symbol.iterator](){
        return this;
    },
    next() {
        if(obj.start < obj.end){
            return {value: obj.start++, done: false}
        }
        else{
            return {done: true}
        }
    }
}