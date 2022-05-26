import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollumsModel } from 'src/app/models/base/collums.model';
import { HomeEnterPriseModel } from 'src/app/models/home-enterprise.model';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [fader],
})

export class HomeComponent {
    config = new HomeEnterPriseModel();
    listFilter : any = [];
    data = [
      {
        "stt": "1",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 1',
        "gt": '1 giấy tờ',
        "status": "Không cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
      {
        "stt": "2",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 2 ',
        "gt": '1 giấy tờ',
        "status": "Cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
      {
        "stt": "3",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 3',
        "gt": '1 giấy tờ',
        "status": "Cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
      {
        "stt": "4",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 4',
        "gt": '1 giấy tờ',
        "status": "Cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
      {
        "stt": "5",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 5',
        "gt": '1 giấy tờ',
        "status": "Cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
      {
        "stt": "6",
        "code": "023456781",
        "global": '023456781',
        "register": 'Công ty TNHH Việt An 6',
        "gt": '1 giấy tờ',
        "status": "Cho quét",
        "update": "13:30, 21/04/2021",
        "taxcode": "01234",
        "country": "Viet Nam",
        "city": "1",
        "district": "1",
        "address": "Ha Noi - Viet Nam",
        "phone": "0987654321",
        "email": "city@gmail.com",
        "website": "https://www.consultindochina.com/",
        "servicePackage": "Gói MBTT-5",
        "condition": "Đã duyệt"
      },
  
  
    ];
    dataTable!: CollumsModel[];
    listActive: any;
    dataSub: any;
    constructor(
  
    ) { }
  
    ngOnInit(): void {
      this.listFilter = this.config.filter;
      this.dataTable = this.config.collums;
      this.listActive = this.config.btnActice;
      this.dataSub = this.data;
    }
  
    tableFilter(event: any){
      console.log(event);
      
    }
}
