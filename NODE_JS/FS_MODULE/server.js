console.log("HELLO CHAMPS!!");
// console.log(global)
// const os=require('os');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
const path=require('path');
// const math=require('./math');
// console.log(math.add(1,2));
// console.log(math.sub(10,3));

const fsPromises=require('fs').promises;

const fileOps = async ()=>{
    try{
        const data= await fsPromises.readFile(path.join(__dirname,'Files','Start.txt'),'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'Files','Subs.txt'),'Hello !! This is Writing File')
        console.log("Writing Completed !! ");
        await fsPromises.appendFile(path.join(__dirname,'Files','Subs.txt'),'\n\n Appending the data')
        console.log("Appended !!");
        await fsPromises.rename(path.join(__dirname,'Files','Subs.txt'),path.join(__dirname,'Files','thanks.txt'))
        console.log("Renamed !!");
    }
    catch(err){
        console.error(err);
    }
}

fileOps();



// fs.writeFile(path.join(__dirname,'Files','Subs.txt'),'Hii this is Writing File!!',(err)=>{
//     if(err) throw err;
//     console.log("Written :)");
//     fs.appendFile(path.join(__dirname,'Files','Subs.txt'),'\n\n Here Appending the data',(err)=>{
//         if(err) throw err;
//         console.log("Appended :)");
//     })
//     fs.rename(path.join(__dirname,'Files','Subs.txt'),path.join(__dirname,'Files','thanks.txt'),(err)=>{
//         if(err) throw err;
//         console.log("Renamed :)");
//     })
// })

//exit on uncaught error.
process.on('uncaughtException',err=>{
    console.error(`There was a uncaught error: ${err}`)
    process.exit(1); 
});

