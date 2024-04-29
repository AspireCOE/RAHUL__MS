

export class Rock{
  

    constructor(private num1:number,public num2:number,public num3:number)
    {
         
    }
    shape=()=>{
      console.log("X IS "+this.num1+"  Y IS "+this.num2+"  Z IS "+this.num3);
    }
    get NUM1()
    {
     return this.num1;
    }
    set NUM1(value)
    {
     this.num1=value
    }
 
 }
