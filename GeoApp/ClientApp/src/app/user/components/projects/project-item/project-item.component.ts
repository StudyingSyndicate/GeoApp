import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  public static readonly PROJECT_ACCARAG = 'accarag';

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public projectText: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const projectName = this.route.snapshot.params.projectName;
    this.galleryImages = this.getImagesByProjectName(projectName);
    this.galleryOptions = this.getOptions();
    this.projectText = this.getTextByProjectName(projectName);
  }

  private getImagesByProjectName(name: string): NgxGalleryImage[] {
    switch (name) {
      case ProjectItemComponent.PROJECT_ACCARAG:
        return [{
          url: '../assets/projects/accarag_1_.jpg',
          small: '../assets/projects/accarag_1_.jpg',
          big: '../assets/projects/accarag_1_.jpg',
        }, {
          url: '../assets/projects/accarag_1_.jpg',
          small: '../assets/projects/accarag_1_.jpg',
          big: '../assets/projects/accarag_1_.jpg',
        }, {
          url: '../assets/projects/accarag_1_.jpg',
          small: '../assets/projects/accarag_1_.jpg',
          big: '../assets/projects/accarag_1_.jpg',
        }, {
          url: '../assets/projects/accarag_1_.jpg',
          small: '../assets/projects/accarag_1_.jpg',
          big: '../assets/projects/accarag_1_.jpg',
        }, {
          url: '../assets/projects/accarag_1_.jpg',
          small: '../assets/projects/accarag_1_.jpg',
          big: '../assets/projects/accarag_1_.jpg',
        }];

      default:
        return [];
    }
  }

  private getOptions():NgxGalleryOptions[] {
    return [{
      image: false,
      height: '100px'
    }, {
      breakpoint: 500,
      width: '100%',
      previewForceFullscreen: true
    }];
  }

  private getTextByProjectName(projectName: string):string {
    switch (projectName) {
      case ProjectItemComponent.PROJECT_ACCARAG:
        return "ACCARAG ALIVE!!!!";
      default:
        return "";
    }
  }
}
