import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productdata:any
  constructor(private service:ProductService){}
  ngOnInit(){
    this.service.getAllProducts().subscribe((data)=>{
      // console.log(data);
      this.productdata=data;
    })
  }

}   
    
