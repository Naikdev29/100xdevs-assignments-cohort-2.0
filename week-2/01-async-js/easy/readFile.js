const fs = require('fs');

function expensiveOperation(numbers){
    for (let i =0; i<numbers; i++){

    }
    console.log('Expensive operation completed');
}

fs.readFile('readme.txt','utf-8',(err, data) =>{
    if(err){
        console.error('error reading the file:', err);
        return;
    }
    console.log('text from file:', data);
     
});

console.log('start itertions');
expensiveOperation(1000000);

console.log('this message is logged after initiating file read and expensive operations.');