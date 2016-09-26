

import { Component, OnInit } from '@angular/core';
import {Course} from './Course'
import {CourseService} from './course.service'
import {Router} from '@angular/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css'],
    providers:[CourseService]
})
export class DashBoardComponent {

    courses: Course[];

    constructor(private courseService: CourseService,private router:Router) { }
    
    ngOnInit():void {
        this.courseService.getCourses()
            .then(courses => this.courses=courses.slice(1,5))
    }

    gotoDetail(course: Course) {
        let link = ['/detail', course.id]
        this.router.navigate(link);
    }
    
}