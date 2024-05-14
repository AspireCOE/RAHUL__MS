import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
     name:String="Rock";
     age:Number=35;
     joindate:Date=new Date();
     fontColor:String="blue";
     
     functionCall(){
      alert("This is event binding");
     }
}
