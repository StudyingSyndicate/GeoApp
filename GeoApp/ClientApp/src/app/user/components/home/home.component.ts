import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import {Gallery, GalleryItem, ImageItem} from "@ngx-gallery/core";
import {Lightbox} from "@ngx-gallery/lightbox";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   myOptions2 = {
    autoplay: true,
    loop: true,
    items: 1,
    dots: false,
    dotsContainer: '#carousel-custom-dots',
    autoWidth: true,
    center: true,   
  };
  
  constructor(public) { }

  ngOnInit() {
   
  }
}
