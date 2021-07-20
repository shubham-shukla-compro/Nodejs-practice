const os = require('os');

const userInfo = os.userInfo();

console.log(userInfo);

console.log(`the system uptime is ${os.uptime} seconds`);

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(osInfo);
