//**** Old Funcltion *****/
// function doubleIt(num){
//     return num *2;
// }
// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function(num){
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

//******** Arrow function *********//

//one parameter
const doubleIt = num => num *2;
const result = doubleIt(50);
console.log(result);
//two parameter
const add = (x,y) => x + y;
console.log(add(4,2));
//no parameter
const giveNum = () => 5;
console.log(giveNum());
//long function
const doMath = (x,y) => {
    const sum = x + y;
    const differ = x - y;
    return sum * differ;
}
console.log(doMath(6,3));