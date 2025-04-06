function makeCounter(num) {
    return function() {
         return num += 5;
    };
}

let increment = makeCounter(5);
console.log(increment());
console.log(increment());
console.log(increment());

export default makeCounter; 

//function makeCounter(num) {
//}
//