// const myName = 'Shubham';

// console.log(myName);

// console.log(__dirname);

const names = require('./names');
const sayHi = require('./utils');

console.log(names);

sayHi(names.john);
sayHi(names.peter);
