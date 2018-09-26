import {IImage} from "ng-simple-slideshow";

export class AppBackgroundImage implements IImage {
  url: string;
  href: string;
  title: string;

  constructor(href: string, title: string) {
    this.url = href;
    this.href = href;
    this.title = title;
  }
}
