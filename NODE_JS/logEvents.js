const fs= require('fs');
const fsPromises=require('fs').promises;
const path=require('path');
const {format} =require('date-fns');
const {v4:uuid}=require('uuid');


const logEvents = async(message) =>{
    const dateTime=`${format(new Date(), 'dd-MM-yyyy \t hh:mm:ss')}`;
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`;
    
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
             await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem);
        console.log(logItem);
    }
    catch(err)
    {
        console.error(err);
    }
}

module.exports= logEvents;