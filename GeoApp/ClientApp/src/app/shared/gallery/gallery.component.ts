import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input()
  galleryOptions: NgxGalleryOptions[];

  @Input()
  galleryImages: NgxGalleryImage[];

  constructor() {
  }

  ngOnInit() {
  }

}
