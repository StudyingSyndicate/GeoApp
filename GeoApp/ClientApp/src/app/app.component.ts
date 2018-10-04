import {Component} from '@angular/core';
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


  constructor() {

  }


}
