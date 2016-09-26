import { Component,OnInit } from '@angular/core';
import {Course } from './course.ts';

import {CourseService} from './course.service'


@Component(
    {
        selector:'my-app',
        template:`
            <h2 class="page-header"> {{title}} </h2> 
            <ul class="nav nav-pills">
                <li><a routerLink="/dashboard">Dashbord</a></li>
                <li><a routerLink="/courses">Courses</a></li>
            </ul>
            <hr/>
            <router-outlet></router-outlet>
        `
    }
)
export class AppComponent {
     title: string = 'Lean stack';
}