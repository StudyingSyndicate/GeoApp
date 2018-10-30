import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  public static readonly PROJECT_ACCARAG = 'accarag';
  public static readonly PROJECT_CPSNGKM = 'cps-ngkm';
  public static readonly PROJECT_MAEIN = 'maein';
  public static readonly PROJECT_MAEINGES = 'maein-ges';
  public static readonly PROJECT_ORNACUL = 'ornacul';
  public static readonly PROJECT_ORSUG = 'orsug';

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
        }];
      case ProjectItemComponent.PROJECT_CPSNGKM:
        return [{
          url: '../assets/projects/cps-ngkm_1_.jpg',
          small: '../assets/projects/cps-ngkm_1_.jpg',
          big: '../assets/projects/cps-ngkm_1_.jpg',
        }];
      case ProjectItemComponent.PROJECT_MAEIN:
        return [{
          url: '../assets/projects/maein_1_.jpg',
          small: '../assets/projects/maein_1_.jpg',
          big: '../assets/projects/maein_1_.jpg',
        }];
      case ProjectItemComponent.PROJECT_MAEINGES:
        return [{
          url: '../assets/projects/maein_1_.jpg',
          small: '../assets/projects/maein_1_.jpg',
          big: '../assets/projects/maein_1_.jpg',
        }];
      case ProjectItemComponent.PROJECT_ORNACUL:
        return [{
          url: '../assets/projects/ornakul_1_.jpg',
          small: '../assets/projects/ornakul_1_.jpg',
          big: '../assets/projects/ornakul_1_.jpg',
        },{
          url: '../assets/projects/ornakul_2_.jpg',
          small: '../assets/projects/ornakul_2_.jpg',
          big: '../assets/projects/ornakul_2_.jpg',
        },{
          url: '../assets/projects/ornakul_3_.jpg',
          small: '../assets/projects/ornakul_3_.jpg',
          big: '../assets/projects/ornakul_3_.jpg',
        }];
      case ProjectItemComponent.PROJECT_ORSUG:
        return [{
          url: '../assets/projects/osuh_1_.jpg',
          small: '../assets/projects/osuh_1_.jpg',
          big: '../assets/projects/osuh_1_.jpg',
        }];


      default:
        return [];
    }
  }

  private getOptions(): NgxGalleryOptions[] {
    return [{
      image: false,
      height: '100px'
    }, {
      breakpoint: 500,
      width: '100%',
      previewForceFullscreen: true
    }];
  }

  private getTextByProjectName(projectName: string): string {
    switch (projectName) {
      case ProjectItemComponent.PROJECT_ACCARAG:
        return "Заказчик: ООО Аккаргинские хромиты " +
          "Дата сдачи: 2015г " +
          "Тип проекта: ТЭО кондиции " +
          "Округ: Уральский федеральный округ";
      case ProjectItemComponent.PROJECT_CPSNGKM:
        return "Заказчик: ООО Аланс " +
          "Дата сдачи: 2015г. " +
          "Тип проекта: Инженерно-геотехнические изыскания " +
          "Округ: Дальневосточный федеральный округ";
      case ProjectItemComponent.PROJECT_MAEIN:
        return "Заказчик: ООО РусГидро»-«Саяно-Шушенская ГЭС" +
          "Дата сдачи: 2015г." +
          "Тип проекта: Инженерно-геотехнические изыскания" +
          "Округ: Сибирский федеральный округ";
      case ProjectItemComponent.PROJECT_MAEINGES:
        return "Заказчик: ПАО Ленгидропроект " +
          "Дата сдачи: 2015г. " +
          "Тип проекта: Инженерно-геологические изыскания " +
          "Округ: Сибирский федеральный округ";
      case ProjectItemComponent.PROJECT_ORNACUL:
        return "Заказчик: ООО Природапромдобычат " +
          "Дата сдачи: 2015-2016 гг. " +
          "Тип проекта: Геологоразведочные работы, подсчёт запасов " +
          "Округ: Сибирский федеральный округ";
      case ProjectItemComponent.PROJECT_ORSUG:
        return "Заказчик: ООО Геостройсервис-с " +
          "Дата сдачи: 2013-2016 гг. " +
          "Тип проекта: Геологоразведочные работы, ТЭО кондиций, подсчёт запасов, проект отработки месторождения " +
          "Округ: Сибирский федеральный округ";
      default:
        return "";
    }
  }
}




