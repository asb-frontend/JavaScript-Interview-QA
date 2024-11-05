//this code will fail because of ASI

function gimmeAObj(){
    return 
    {
        a: 5
    }
}
let obj1 = gimmeAObj();
console.log(obj1);

//but this one will succeed

function gimmeARealObj(){
    return {
        a: 5
    }
}
let obj2 = gimmeARealObj();
console.log(obj2);