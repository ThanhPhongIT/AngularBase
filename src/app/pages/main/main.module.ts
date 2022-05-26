import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavComponentModule } from 'src/app/components/nav/nav-menu/nav-menu.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule
  ],
  providers: [],
})
export class MainModule {}
