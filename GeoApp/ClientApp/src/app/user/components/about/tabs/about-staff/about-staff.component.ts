import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-staff',
  templateUrl: './about-staff.component.html',
  styleUrls: ['./about-staff.component.css']
})
export class AboutStaffComponent implements OnInit {

  staffItems = [{
    name: 'Виктор Иванович Совлук',
    position: 'Генеральный директор УК "СибГеоТех"',
    image: '../../../../../../assets/sovluk.png'
  }, {
    name: 'Александр Викторович Совлук',
    position: 'Директор отдела ООО "Геологические Технологии"',
    image: '../../../../../../assets/asovluk.png'
  }, {
    name: 'Андрей Сергеевич Хомяков',
    position: 'Директор ООО "Геологические технологии"',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Андрей Сергеевич Хомяков',
    position: 'Директор ООО "Геологические технологии"',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Качеров Сергей Алексеевич',
    position: 'Директор по экономике и развитию',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Звягин Александр Владимирович',
    position: 'Директор по производству',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Гриневич Любовь Михайловна',
    position: 'Главный бухгалтер',
    image: '../../../../../../assets/female_icon.jpg'
  }, {
    name: 'Киселев Александр Викторович',
    position: 'Главный специалист в отделе инженерных изысканий',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Федан Николай Алексеевич',
    position: 'Главный специалист в отделе инженерных изысканий',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Сергеев Виктор Витальевич',
    position: 'Инженер-геолог 1 категории',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Дебелов Максим Юрьевич',
    position: 'Инженер-эколог',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Карпов Геннадий Геньевич',
    position: 'Инженер-геолог 1 категории',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Грушецкая Ольга Александровна',
    position: 'Экономист',
    image: '../../../../../../assets/female_icon.jpg'
  }, {
    name: 'Тарасов Александр Васильевич',
    position: 'Ведущий геоло',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Шведов Геннадий Иванович',
    position: 'Ведущий геолог',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Бабинцев Никита Анатольевич',
    position: 'Геолог',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Пернова Наталья Васильевна',
    position: 'Ведущий эколог',
    image: '../../../../../../assets/female_icon.jpg'
  }, {
    name: 'Подковальникова Полина Дмитриевна',
    position: 'Геолог',
    image: '../../../../../../assets/female_icon.jpg'
  }, {
    name: 'Нифатова Светлана Руслановна',
    position: 'Геолог',
    image: '../../../../../../assets/female_icon.jpg'
  }, {
    name: 'Смоленскас Владас Вито',
    position: 'Геолог',
    image: '../../../../../../assets/male_icon.jpg'
  }, {
    name: 'Подковальников Александр Александрович',
    position: 'Маркшейдер 1 категории',
    image: '../../../../../../assets/male_icon.jpg'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
