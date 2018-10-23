import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maein-ges',
  templateUrl: './maein-ges.component.html',
  styleUrls: ['./maein-ges.component.css']
})
export class MaeinGesComponent implements OnInit {

  // items: GalleryItem[];

  imageData = [{
    src: '../../assets/projects/maein-ges_1_.jpg',
    preview: '../../assets/projects/maein-ges_1_.jpg',
  }];

  // constructor(public gallery: Gallery, public lightbox: Lightbox) {
  // }

  ngOnInit() {
    //this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    // this.gallery.ref('lightbox').load(this.items);
  }
}
