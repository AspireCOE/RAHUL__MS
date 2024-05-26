import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,FormsModule,ShopComponent,ProductComponent,AccountComponent,RouterLink,CommonModule,CubePipe,HomeComponent,SignUpComponent,ProductdetailsComponent,HttpClientModule]
  ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularApp';
  date=new Date();
}
