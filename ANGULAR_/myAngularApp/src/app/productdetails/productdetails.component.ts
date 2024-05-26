import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
   productdata:any

   constructor(private service:ProductService){}
   ngOnInit(){
    this.service.getAllProducts().subscribe((data)=>{
      
      this.productdata=data;
    })
   }
}
