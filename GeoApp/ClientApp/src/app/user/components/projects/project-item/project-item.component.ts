import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

class ProjectItem {
  name: string;
  images: NgxGalleryImage[];
  customer: string;
  endDate: string;
  projectType: string;
  region: string;
}

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  private readonly PROJECT_ACCARAG = 'accarag';
  private readonly PROJECT_CPSNGKM = 'cps-ngkm';
  private readonly PROJECT_MAEIN = 'maein';
  private readonly PROJECT_MAEINGES = 'maein-ges';
  private readonly PROJECT_ORNACUL = 'ornacul';
  private readonly PROJECT_ORSUG = 'orsug';

  private readonly projects: { [key:string]: ProjectItem; } = {};

  public readonly galleryOptions: NgxGalleryOptions[];
  public currentItem: ProjectItem;

  constructor(private route: ActivatedRoute) {
    this.initMap();
    this.galleryOptions = [{
      image: false,
      height: '150px',
      width: '100%',
      previewCloseOnEsc: true,
      previewCloseOnClick: true,
    }];
  }

  ngOnInit() {
    this.currentItem = this.projects[this.route.snapshot.params.projectName];
  }

  private initMap(): void {
    this.projects[this.PROJECT_ACCARAG] = {
      name: 'ТЭО временных разведочных кондиций с подсчетом запасов хромовых руд Аккаргинского месторождения Южного Урала',
      images: [{
        url: '../assets/projects/accarag_1_.jpg',
        small: '../assets/projects/accarag_1_.jpg',
        big: '../assets/projects/accarag_1_.jpg',
      }],
      customer: "ООО Аккаргинские хромиты",
      endDate: "2015г.",
      projectType: "ТЭО кондиции",
      region: "Уральский федеральный округ",
    };

    this.projects[this.PROJECT_CPSNGKM] = {
      name: 'Инженерно-геотехнические изыскания на объекте: «Обустройство Среднеботуобинского НГКМ. Расширение ЦПС»',
      images: [{
        url: '../assets/projects/cps-ngkm_1_.jpg',
        small: '../assets/projects/cps-ngkm_1_.jpg',
        big: '../assets/projects/cps-ngkm_1_.jpg',
      }],
      customer: "ООО Аланс",
      endDate: "2015г.",
      projectType: "Инженерно-геотехнические изыскания",
      region: "Дальневосточный федеральный округ",
    };

    this.projects[this.PROJECT_MAEIN] = {
      name: 'Испытания на механическую и сдвиговую прочность материалов упорных призм, подвергающихся сезонному замораживанию и оттаиванию грунтовых сооружений Майнского гидроузла',
      images: [{
        url: '../assets/projects/maein_1_.jpg',
        small: '../assets/projects/maein_1_.jpg',
        big: '../assets/projects/maein_1_.jpg',
      }],
      customer: "ООО РусГидро»-«Саяно-Шушенская ГЭС",
      endDate: "2015г.",
      projectType: "Инженерно-геотехнические изыскания",
      region: "Сибирский федеральный округ",
    };

    this.projects[this.PROJECT_MAEINGES] = {
      name: 'Изыскательские работы под модернизацию участков ВЛ 35кВ Т-72/74 "РП-7"-ПС №3 и опоры мостового перехода через р. Уй на Майнской ГЭС',
      images: [{
        url: '../assets/projects/maein_1_.jpg',
        small: '../assets/projects/maein_1_.jpg',
        big: '../assets/projects/maein_1_.jpg',
      }],
      customer: "ПАО Ленгидропроект",
      endDate: "2015г.",
      projectType: "Инженерно-геологические изыскания",
      region: "Сибирский федеральный округ",
    };

    this.projects[this.PROJECT_ORNACUL] = {
      name: 'Геологоразведочные работы на лицензионной площади россыпного месторождения золота р. Орнакул',
      images: [{
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
      }],
      customer: "ООО Природапромдобычат",
      endDate: "2015-2016 гг.",
      projectType: "Геологоразведочные работы, подсчёт запасов",
      region: "Сибирский федеральный округ",
    };

    this.projects[this.PROJECT_ORSUG] = {
      name: 'Геологоразведочные работы на Орасугском участке Борусского месторождения жадеита',
      images: [{
        url: '../assets/projects/osuh_1_.jpg',
        small: '../assets/projects/osuh_1_.jpg',
        big: '../assets/projects/osuh_1_.jpg',
      }],
      customer: "ООО Геостройсервис-с",
      endDate: "2013-2016.",
      projectType: "Геологоразведочные работы, ТЭО кондиций, подсчёт запасов, проект отработки месторождения",
      region: "Сибирский федеральный округ",
    };
  }

}




