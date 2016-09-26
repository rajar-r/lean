


import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './courses.component'
import {DashBoardComponent} from './dashborad.component'
import {CourseDetailComponent} from './course-detail.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch:'full'
    },
    {
        path:'courses',
        component:CoursesComponent
    },
    {
        path:'dashboard',
        component:DashBoardComponent
    },
    {
        path:'detail/:id',
        component:CourseDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);