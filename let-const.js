const noun = "Tasin";
// noun = "Toha"; not possible 
console.log(noun);

const num = [3,5,6];
num[2] = 9;
num.push(1);
// num = ['tasin','toha', 'hosssain'];  not possible
console.log(num);

let teacher = "Harun";
teacher = "Sakib";
console.log(teacher);

// let is a scope variable
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i); let i cannot access from outside scope(curly braces)