import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myOptions = {
    //autoplay: true,
    loop: true,
    items: 1,
    dots: true,
    //dotsContainer: '#carousel-custom-dots'
  };
  myOptions2 = {
    //autoplay: true,
    loop: true,
    items: 1,
    dots: true,
    dotsContainer: '#carousel-custom-dots'
  };
}
