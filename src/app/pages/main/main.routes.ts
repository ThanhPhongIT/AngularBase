import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>  import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'grade',
        loadChildren: () =>  import('./grade/grade.module').then((m) => m.GradeModule),
      },
      {
        path: 'subject',
        loadChildren: () =>  import('./subjects/subjects.module').then((m) => m.SubjectsModule),
      },
      {
        path: 'book',
        loadChildren: () =>  import('./books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'week',
        loadChildren: () =>  import('./weeks/weeks.module').then((m) => m.WeeksModule),
      },
      {
        path: 'lecture',
        loadChildren: () =>  import('./lecture/lecture.module').then((m) => m.LectureModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
