const fs = require('fs');

function writeToFile(filename, content) {
    fs.writeFile(filename, content, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('Content has been written to the file successfully.');
    });
  }

  const filePath = './readme.txt'; 


const content = 'This is the content that will be written to the file.\n';

writeToFile(filePath, content);