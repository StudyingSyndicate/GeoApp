import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from "@ngx-gallery/core";
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-maein-ges-2',
  templateUrl: './maein-ges-2.component.html',
  styleUrls: ['./maein-ges-2.component.css']
})
export class MaeinGes2Component implements OnInit {

  items: GalleryItem[];

  imageData = [{
    src: '../../assets/projects/maein-ges_1_.jpg',
    preview: '../../assets/projects/maein-ges_1_.jpg',
  }];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    this.gallery.ref('lightbox').load(this.items);
  }
}
