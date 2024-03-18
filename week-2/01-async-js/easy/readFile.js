const fs = require('fs');

function expensiveOperation(numbers){
    for (let i =0; i<numbers; i++){

    }
    console.log('Expensive operation completed');
}

fs.readFile('./easy/1-counter.md','utf-8',(err, data) =>{
    if(err){
        console.error('error reading the file:', err);
        return;
    }
    console.log('File contents:', data);
});