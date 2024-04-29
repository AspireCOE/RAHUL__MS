function doSomething()
{
    for(var i=0;i<5;i++)
    {
        console.log(i);
    }

    console.log("finally the value is "+i);

    
}
doSomething();


import {Rock} from './Rock';
let ob=new Rock(5,5,5);
console.log(ob.NUM1);
ob.NUM1=7;
console.log(ob.NUM1);

ob.shape();

