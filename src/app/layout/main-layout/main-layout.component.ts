import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;
  icon = '<';
  dataNav = {
    list: [
      {
        icon: 'assets/img/home.svg',
        name: 'Trang chủ',
        linkURL: 'home',
        subs: []
      },
      {
        icon: 'assets/img/enterprise-code.svg',
        name: 'Danh mục khối',
        linkURL: 'grade',
        subs: []
      },
      {
        icon: 'assets/img/distributor.svg',
        name: 'Danh mục môn',
        linkURL: 'subject',
        subs: []
      },
      {
        icon: 'assets/img/shop.svg',
        name: 'Danh mục sách',
        linkURL: 'book',
        subs: []
      },
      {
        icon: 'assets/img/bag.svg',
        name: 'Danh mục tuần',
        linkURL: 'week',
        subs: []
      },
      {
        icon: 'assets/img/service-package.svg',
        name: 'Danh mục bài',
        linkURL: 'lecture',
        subs: []
      },
      // {
      //   icon: 'assets/img/icon-setting.svg',
      //   name: 'Cài đặt',
      //   linkURL: 'setting',
      //   subs: [
      //     { name: 'Danh sách tài khoản', path: 'setting/account-list' },
      //     { name: 'Nhóm quyền', path: 'setting/privileges' },
      //     { name: 'Phân quyền', path: 'setting/authorization' }
      //   ]
      // },

    ],
  };

  constructor() { }
  toggle(drawer: any){
    drawer.toggle()
    if(this.icon == '>'){
      this.icon = '<';
    }else{
      this.icon = '>';
    }
  }

  ngOnInit(): void {
    // if (localStorage.getItem("role") === 'saleAdmin') {
    //   this.dataNav.list.pop();
    // }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
