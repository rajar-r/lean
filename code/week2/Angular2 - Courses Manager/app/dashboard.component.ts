
import { Component } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent { 

  courses: Course[] = [];

  constructor( private router: Router,private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
      .then(courses => this.courses = courses.slice(1, 5));
  }

  gotoDetail(course: Course): void {
    let link = ['/detail', course.id];
    this.router.navigate(link);
  }

}
