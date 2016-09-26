
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Course} from './course'
import { CourseService} from './course.service';


@Component({
    selector: 'my-course-detail',
    templateUrl: './app/course-detail.component.html',
    providers:[CourseService]
})
export class CourseDetailComponent {

    @Input()
    course: Course;
    constructor(private courseService: CourseService,private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.courseService.getCourse(id)
          .then(course => this.course = course);
      });
    }

    goBack(): void {
     window.history.back();
    }

}
