

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseDetailComponent} from './course-detail.component'
import {DashBoardComponent} from './dashborad.component'

import {routing} from './app.routing';

@NgModule({
    imports: [BrowserModule,FormsModule,routing],
    declarations: [AppComponent,CoursesComponent,CourseDetailComponent,DashBoardComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}

