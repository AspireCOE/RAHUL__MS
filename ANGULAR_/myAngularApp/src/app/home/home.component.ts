import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment); 
        }
      }
    });
  } 
}
