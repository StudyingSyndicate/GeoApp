import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items1: Array<number> = [1, 2, 3, 4, 5];

  items2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
