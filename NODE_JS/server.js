console.log("HELLO CHAMPS!!");
// console.log(global)
// const os=require('os');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
const path=require('path');
const math=require('./math');
console.log(math.add(1,2));
console.log(math.sub(10,3));

const fs=require('fs');
fs.readFile(path.join(__dirname,'Files','Start.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//exit on uncaught error.
process.on('uncaughtException',err=>{
    console.error(`There was a uncaught error: ${err}`)
    process.exit(1); 
});

