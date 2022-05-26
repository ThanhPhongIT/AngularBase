import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from './grade.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GradeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: GradeComponent
    }])
  ]
})
export class GradeModule { }
