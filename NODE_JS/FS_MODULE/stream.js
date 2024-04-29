const path=require('path');
const fs=require('fs');

const rs=fs.createReadStream(path.join(__dirname,'Files','copy.txt'));
const ws=fs.createWriteStream(path.join(__dirname,'Files','newcopy.txt'));


// rs.on('data',(datachunk)=>{
//     ws.write(datachunk);
// })

rs.pipe(ws);

