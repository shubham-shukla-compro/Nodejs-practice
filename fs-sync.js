const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./contents/first.txt', 'utf8');
const second = readFileSync('./contents/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
  './contents/third.txt',
  `Here is the next result: ${first} ${second}`,
  { flag: 'a' }
);
