const fs = require('fs');

fs.writeFile(
    'readme.txt',
    'Hello world',
    {
      flag: 'a',
      encoding: 'utf-8',
    },
    (err) => {
      console.log(err);
    }
  );