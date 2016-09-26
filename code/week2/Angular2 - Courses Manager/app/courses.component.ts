import { Component,OnInit } from '@angular/core';
import {Course } from './course.ts';

import {CourseService} from './course.service'
import {Router} from '@angular/router';


@Component({
    selector: 'my-courses',
    providers: [CourseService],
    template: `
        
                 <ul class="courses">
                    <li *ngFor="let course of courses" 
                         (click)="onSelect(course)" 
                         [class.selected]="selectedCourse===course">
                        <span class="badge">{{course.id}}</span>{{course.name}}
                    </li>
                 </ul>   

                 <my-course-detail [course]="selectedCourse"></my-course-detail>

                 `,
    styles: [`
                .selected {
                background-color: #CFD8DC !important;
                color: white;
                }
                .courses {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
                }
                .courses li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
                }
                .courses li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
                }
                .courses li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
                }
                .courses .text {
                position: relative;
                top: -3px;
                }
                .courses .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
                }`]
}
)
export class CoursesComponent implements OnInit {
   
    selectedCourse: Course;
    courses: Course[];

    // dependency injection    
    constructor(private courseService:CourseService,private router:Router) {
    }
    
    // lifecycle
    ngOnInit() {
        //var couserService = new CourseService();
        //this.courses = this.courseService.getCourses(); // sync call
        this.getCourses();
    }

    getCourses() {
        this.courseService.getCourses().then(courses=>this.courses=courses);
    }
   
    onSelect(course) {
        this.selectedCourse = course;
    }

    gotoDetail(): void{
        this.router.navigate(['/detail',this.selectedCourse.id]);
    }

}