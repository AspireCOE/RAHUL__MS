export class accountHolder{
    acHolderName:String;
    accountNumber:number;
    accountType:String;
    balance:number;
    dateOfJoining:String;
    status:String;

    constructor(acHolderName:String,accountNumber:number,accountType:String,balance:number,dateOfJoining:String,status:String)
    {
        this.acHolderName=acHolderName;
        this.accountNumber=accountNumber;
        this.accountType=accountType;
        this.balance=balance;
        this.dateOfJoining=dateOfJoining; 
        this.status=status;
    }
     

}