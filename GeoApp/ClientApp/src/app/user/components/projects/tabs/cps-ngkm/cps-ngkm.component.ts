import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from "@ngx-gallery/core";
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-cps-ngkm',
  templateUrl: './cps-ngkm.component.html',
  styleUrls: ['./cps-ngkm.component.css']
})
export class CpsNgkmComponent implements OnInit {

  items: GalleryItem[];

  imageData = [{
    src: '../../assets/projects/cps-ngkm_1_.jpg',
    preview: '../../assets/projects/cps-ngkm_1_.jpg',
  }];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    this.gallery.ref('lightbox').load(this.items);
  }
}
