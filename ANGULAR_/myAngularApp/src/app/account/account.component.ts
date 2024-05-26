import { Component } from '@angular/core';
import { accountHolder } from './account.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountPipe } from '../count.pipe';


@Component({
  selector: 'app-account',
  standalone: true,                                           
  imports: [FormsModule,CommonModule,CountPipe],
  templateUrl:'./account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
     typeInput:String="Current";
    getStatus(amount:number):string{
      if(amount>65000){
         return 'loyal';
      }
      else if(amount>=10000 && amount<=65000){
        return 'active';
      }
      else if(amount>=500&&amount<10000){
        return 'inactive';
      }
      else{
        return 'unknown';
      }

     }
    accounts:accountHolder[]=[{acHolderName:"Rock",accountNumber:98765434561,accountType:"Savings",balance:99000,dateOfJoining:"2002/04/15",status:""},
      {acHolderName:"RandyOrton",accountNumber:48765974561,accountType:"Savings",balance:80000,dateOfJoining:"2007/03/23",status:""},
      {acHolderName:"RomanReigns",accountNumber:88765434861,accountType:"Current",balance:100000,dateOfJoining:"2000/07/28",status:""},
      {acHolderName:"Ajstyles",accountNumber:77765486461,accountType:"Joint",balance:73000,dateOfJoining:"2010/09/28",status:""},
      {acHolderName:"Undertaker",accountNumber:20765427561,accountType:"Current",balance:62000,dateOfJoining:"1998/02/19",status:""},
      {acHolderName:"Kane",accountNumber:33765497361,accountType:"Joint",balance:32000,dateOfJoining:"2001/06/12",status:""},
      {acHolderName:"Johncena",accountNumber:22765428561,accountType:"Savings",balance:98000,dateOfJoining:"1980/01/27",status:""},
      {acHolderName:"Solosikoa",accountNumber:26765428461,accountType:"Current",balance:92000,dateOfJoining:"1990/06/02",status:""},
      {acHolderName:"Sethrollins",accountNumber:99748734561,accountType:"Savings",balance:89000,dateOfJoining:"1970/03/28",status:""},
      {acHolderName:"Batista",accountNumber:55765389561,accountType:"Savings",balance:65000,dateOfJoining:"1988/09/23",status:""},
      {acHolderName:"CMPunk",accountNumber:44765423761,accountType:"Current",balance:91000,dateOfJoining:"1985/07/04",status:""},
      {acHolderName:"BrockLeshnar",accountNumber:84765895561,accountType:"Business",balance:96000,dateOfJoining:"1975/09/08",status:""},
      {acHolderName:"Miz",accountNumber:44765432761,accountType:"Student",balance:15000,dateOfJoining:"2008/02/19",status:""},
      {acHolderName:"Deanambrose",accountNumber:11765367561,accountType:"Business",balance:50000,dateOfJoining:"1987/03/27",status:""},
      {acHolderName:"Sting",accountNumber:97765433421,accountType:"Joint",balance:82000,dateOfJoining:"1986/10/23",status:""},
      {acHolderName:"ReyMysterio",accountNumber:34665314561,accountType:"Student",balance:20000,dateOfJoining:"2010/11/22",status:""},
      {acHolderName:"DominikMysterio",accountNumber:23465638561,accountType:"Student",balance:700,dateOfJoining:"2005/12/05",status:""},
      {acHolderName:"Sheamus",accountNumber:76465309761,accountType:"Student",balance:1600,dateOfJoining:"2008/09/18",status:""}
    ]

  }



