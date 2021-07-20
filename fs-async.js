const { readFile, writeFile } = require('fs');

readFile('./contents/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile('./contents/second.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;

    writeFile(
      './contents/result-async.txt',
      `here is the result : ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
});
