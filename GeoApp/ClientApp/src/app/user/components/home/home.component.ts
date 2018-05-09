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

  items: GalleryItem[];

  imageData = [{
    src: 'https://i.pinimg.com/originals/0d/e9/bb/0de9bbc33e515c6035078b3b8cdd9f01.jpg',
    preview: 'https://i.pinimg.com/originals/0d/e9/bb/0de9bbc33e515c6035078b3b8cdd9f01.jpg'
  }, {
    src: '../../assets/temp_pics/1.jpg',
    preview: '../../assets/temp_pics/1.jpg',
  }, {
    src: '../../assets/temp_pics/2.jpg',
    preview: '../../assets/temp_pics/2.jpg',
  }, {
    src: '../../assets/temp_pics/3.jpg',
    preview: '../../assets/temp_pics/3.jpg',
  }, {
    src: '../../assets/temp_pics/4.jpg',
    preview: '../../assets/temp_pics/4.jpg',
  }];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    this.gallery.ref('lightbox').load(this.items);
  }
}
