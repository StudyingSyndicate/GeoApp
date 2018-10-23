import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-ornacul',
  templateUrl: './ornacul.component.html',
  styleUrls: ['./ornacul.component.css'],
})
export class OrnaculComponent implements OnInit {

  // items: GalleryItem[];

  imageData = [{
    src: '../../assets/projects/ornakul_1_.jpg',
    preview: '../../assets/projects/ornakul_1_.jpg',
  }, {
    src: '../../assets/projects/ornakul_2_.jpg',
    preview: '../../assets/projects/ornakul_2_.jpg'
  }, {
    src: '../../assets/projects/ornakul_3_.jpg',
    preview: '../../assets/projects/ornakul_3_.jpg'
  }];

  // constructor(public gallery: Gallery, public lightbox: Lightbox) {
  // }

  ngOnInit() {
    //this.items = this.imageData.map(item => new ImageItem(item.src, item.preview));

    // this.gallery.ref('lightbox').load(this.items);
  }
}

