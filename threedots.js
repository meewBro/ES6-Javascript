const ages = [12, 14, 17, 18, 20];
const ages2 = [17, 14, 19, 20];
const ages3 = [23, 24, 28, 33];

const allAges = ages.concat(ages2).concat([2]).concat(ages3);
console.log(allAges);

const allAges2 = [...ages,...ages2,3,...ages3];
console.log(allAges2);


const business = 650;
const minister = 500;
const sochib = 400;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);

const taka = [700,650,500];
const maximum2 = Math.max(...taka);
console.log(maximum2);