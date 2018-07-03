import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public carouselOptions = {
    autoplay: true,
    loop: true,
    items: 1,
    dots: false,
    dotsContainer: '#carousel-custom-dots',
    autoWidth: true,
    center: true,
  };

  constructor() {
  }

}
