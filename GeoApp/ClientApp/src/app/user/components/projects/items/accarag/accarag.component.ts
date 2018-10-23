import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accarag',
  templateUrl: './accarag.component.html',
  styleUrls: ['./accarag.component.css']
})
export class AccaragComponent implements OnInit {

  imageData = [{
    src: '../../assets/projects/accarag_1_.jpg',
    preview: '../../assets/projects/accarag_1_.jpg',
  }];

  constructor() {
  }

  ngOnInit() {
  }
}
