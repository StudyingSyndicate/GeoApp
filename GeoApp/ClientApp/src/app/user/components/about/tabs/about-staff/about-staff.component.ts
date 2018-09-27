import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-staff',
  templateUrl: './about-staff.component.html',
  styleUrls: ['./about-staff.component.css']
})
export class AboutStaffComponent implements OnInit {

  staffItems = [{
    name: 'Виктор Совлук',
    position: 'Генеральный директор УК "СибГеоТех"',
    image: '../../../../../../assets/sovluk.png'
  }, {
    name: 'Александр Совлук',
    position: 'Директор отдела геологоразведочных работ',
    image: '../../../../../../assets/asovluk.png'
  }, {
    name: 'Хомяков Андрей Сергеевич',
    position: 'Директор отдела инженерных изысканий',
    image: '../../../../../../assets/male_icon.jpg'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
