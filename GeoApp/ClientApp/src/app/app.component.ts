import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private readonly BACKGROUND_COLOR_DEFAULT = '#303030';
  private readonly BACKGROUND_COLOR_TRANSPARENT = 'transparent';

  opened = true;
  //isBackgroundTransparent;

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
    name: 'Контакты',
    link: ''
  }];


  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      /*if (event.url.replace('/','').length === 0) {
        this.isBackgroundTransparent = this.BACKGROUND_COLOR_TRANSPARENT;
      } else {
        this.isBackgroundTransparent = this.BACKGROUND_COLOR_DEFAULT;
      }*/
    });
  }


}
