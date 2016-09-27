
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component'
import { CourseDetailComponent }   from './course-detail.component';
import { DashboardComponent } from './dashboard.component'
import { routing } from './app.routing';

import {CourseService} from './course.service'

import {CourseSearchComponent} from './course-search.component';

@NgModule(
    {
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            routing],
        declarations: [AppComponent,DashboardComponent,CourseSearchComponent,CoursesComponent,CourseDetailComponent],
        providers: [CourseService],
        bootstrap: [AppComponent],
    }
)
export class AppModule { }