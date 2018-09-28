import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  itemsProject = [{
    name: 'Аккарагское',
    image: '../../../../assets/projects/accarag_1_.jpg',
    text: 'ТЭО временных разведочных кондиций с подсчетом запасов хромовых руд Аккаргинского месторождения Южного Урала 2015г',
    route: 'accarag'
  }, {
    name: 'Орнакул',
    image: '../../../../assets/projects/ornakul_1_.jpg',
    text: 'Геологоразведочные работы на лицензионной площади россыпного месторождения золота р. Орнакул 2015-2016 гг.',
    route: 'ornacul'
  }, {
    name: 'Орсуг',
    image: '../../../../assets/projects/orsuh_1_.jpg',
    text: 'Геологоразведочные работы на Орасугском участке Борусского месторождения жадеита 2013-2016 гг.',
    route: 'orsug'
  }, {
    name: 'Майнский',
    image: '../../../../assets/projects/maein_1_.jpg',
    text: 'Испытания на механическую и сдвиговую прочность материалов упорных призм, подвергающихся сезонному ' +
    'замораживанию и оттаиванию грунтовых сооружений Майнского гидроузла 2015 г.',
    route: 'maein'
  }, {
    name: 'ЦПС НГКМ',
    image: '../../../../assets/projects/cps-ngkm_1_.jpg',
    text: 'Инженерно-геотехнические изыскания на объекте: «Обустройство Среднеботуобинского НГКМ. Расширение ЦПС» 2015г.',
    route: 'cps-ngkm'
  }, {
    name: 'Майнская ГЭС',
    image: '../../../../assets/projects/maein-ges_1_.jpg',
    text: 'Изыскательские работы под модернизацию участков ВЛ 35кВ Т-72/74 "РП-7"-ПС №3 и опоры мостового перехода ' +
    'через р. Уй на Майнской ГЭС 2015 г.',
    route: 'maein-ges'
  }, {
    name: 'Майнская ГЭС',
    image: '../../../../assets/projects/maein-ges_1_.jpg',
    text: ' Изучение ИГУ условий левобережного водосброса майнской ГЭС 2015 г.',
    route: 'maein-ges-2'
  },];

  constructor() {
  }

  ngOnInit() {
  }

}
