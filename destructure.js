const person = { name: 'Jack William', age:17, job: 'facebooker', gfName: 'Emma Watson', address: 'LA', phone:'175234564', friends: ['Tom Hanks', 'Tom Cruise', 'Sakib Khan']}

// const gf = person.gfName;
// const phone = person.phone;
const {phone, gfName} = person;
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

//Destructure from nested structure
const complexObject = {
    noun: 'halum',
    info: {
        add: 'kakoli',
        road: 'green'
    }
}
const {road} = complexObject.info;
console.log(road);


//Array Destructuring
const friends = ['Sakib', 'Amir', 'Fahim', 'Salman', 'Ovi', 'Rakib'];
const [chotoFriend, ...older] = friends;
console.log(older);