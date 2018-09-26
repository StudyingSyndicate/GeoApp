import { Component } from '@angular/core';
import {AppBackgroundImage} from "./user/components/models/app-background-image";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;

  sideNavItems = [{
    name: 'О компании',
    link: 'about'
  }, {
    name: 'Услуги',
    link: 'geo-services'
  }, {
    name: 'Проекты',
    link: 'projects'
  }, {
    name: 'Фотогаллерея',
    link: ''
  }, {
    name: 'Публикации',
    link: ''
  }, {
    name: 'Вакансии',
    link: ''
  }, {
    name: 'Контакты',
    link: ''
  }];

  /** Slideshow options*/

  width: string = '100%';
  height: string = '1000px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = false;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = false;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;

  public images: AppBackgroundImage[] = [];

  constructor() {
    this.fillCarouselContent();
  }

  private fillCarouselContent() {
    this.images.push(new AppBackgroundImage(
      '../../assets/temp_pics/1.jpg',
      'pict1'
    ));
    this.images.push(new AppBackgroundImage(
      '../../assets/temp_pics/2.jpg',
      'pict2'
    ));
    this.images.push(new AppBackgroundImage(
      '../../assets/temp_pics/3.jpg',
      'pict3'
    ));
    this.images.push(new AppBackgroundImage(
      '../../assets/temp_pics/4.jpg',
      'pict4'
    ));
  }


}
