import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnDestroy {

  private readonly BACKGROUND_COLOR_DEFAULT = '#303030';
  private readonly BACKGROUND_COLOR_TRANSPARENT = 'transparent';

  private subscription: Subscription;

  public opened = true;
  public backgroundColor = this.BACKGROUND_COLOR_TRANSPARENT;

  public sideNavItems = [{
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
    this.subscription = this.router
                            .events
                            .pipe(filter(event => event instanceof NavigationEnd))
                            .subscribe((event: NavigationEnd) => this.updateBackgroundColor(event.url));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateBackgroundColor(url: string) {
    this.backgroundColor = url === '/home' ? this.BACKGROUND_COLOR_TRANSPARENT : this.BACKGROUND_COLOR_DEFAULT;
  }
}
