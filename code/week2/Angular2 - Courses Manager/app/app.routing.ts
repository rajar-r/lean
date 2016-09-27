
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent }  from './courses.component';
import { CourseDetailComponent }  from './course-detail.component';
import { DashboardComponent }      from './dashboard.component';

const appRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: CourseDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);