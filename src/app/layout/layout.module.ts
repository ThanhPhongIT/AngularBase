import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavComponentModule } from '../components/nav/nav-menu/nav-menu.component';

@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavComponentModule,
    MatSidenavModule
  ],

  exports: [MainLayoutComponent, AuthLayoutComponent],
})
export class LayoutModule {}
