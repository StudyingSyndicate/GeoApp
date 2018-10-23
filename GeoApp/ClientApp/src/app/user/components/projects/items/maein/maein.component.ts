import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-maein',
  templateUrl: './maein.component.html',
  styleUrls: ['./maein.component.css']
})
export class MaeinComponent implements OnInit {

  // items: GalleryItem[];

  imageData = [{
    src: '../../assets/projects/maein_1_.jpg',
    preview: '../../assets/projects/maein_1_.jpg',
  }];

  // constructor(public gallery: Gallery, public lightbox: Lightbox) {
  // }

  ngOnInit() {
    //this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    // this.gallery.ref('lightbox').load(this.items);
  }
}
