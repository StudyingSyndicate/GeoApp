import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-staff',
  templateUrl: './about-staff.component.html',
  styleUrls: ['./about-staff.component.css']
})
export class AboutStaffComponent implements OnInit {

  staffItems = [{
    name: 'Совлук Виктор Иванович',
    position: 'Генеральный директор УК "СибГеоТех"',
    image: '../../../../../../assets/sovluk.png'
  }, {
    name: 'Совлук Александр Викторович',
    position: 'Директор отдела ООО "Геологические Технологии"',
    image: '../../../../../../assets/asovluk.png'
  }, {
    name: 'Хомяков Андрей Сергеевич',
    position: 'Директор ООО "Геологические технологии"',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Качеров Сергей Алексеевич',
    position: 'Директор по экономике и развитию',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Звягин Александр Владимирович',
    position: 'Директор по производству',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Гриневич Любовь Михайловна',
    position: 'Главный бухгалтер',
    image: '../../../../../../assets/female_icon.png'
  }, {
    name: 'Киселев Александр Викторович',
    position: 'Главный специалист в отделе инженерных изысканий',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Федан Николай Алексеевич',
    position: 'Главный специалист в отделе инженерных изысканий',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Сергеев Виктор Витальевич',
    position: 'Инженер-геолог 1 категории',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Дебелов Максим Юрьевич',
    position: 'Инженер-эколог',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Карпов Геннадий Геньевич',
    position: 'Инженер-геолог 1 категории',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Грушецкая Ольга Александровна',
    position: 'Экономист',
    image: '../../../../../../assets/female_icon.png'
  }, {
    name: 'Тарасов Александр Васильевич',
    position: 'Ведущий геоло',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Шведов Геннадий Иванович',
    position: 'Ведущий геолог',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Бабинцев Никита Анатольевич',
    position: 'Геолог',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Пернова Наталья Васильевна',
    position: 'Ведущий эколог',
    image: '../../../../../../assets/female_icon.png'
  }, {
    name: 'Подковальникова Полина Дмитриевна',
    position: 'Геолог',
    image: '../../../../../../assets/female_icon.png'
  }, {
    name: 'Нифатова Светлана Руслановна',
    position: 'Геолог',
    image: '../../../../../../assets/female_icon.png'
  }, {
    name: 'Смоленскас Владас Вито',
    position: 'Геолог',
    image: '../../../../../../assets/male_icon.png'
  }, {
    name: 'Подковальников Александр Александрович',
    position: 'Маркшейдер 1 категории',
    image: '../../../../../../assets/male_icon.png'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
