


import { Injectable } from '@angular/core';
import { COURSES } from './mock-courses'
import {Course} from './course'


@Injectable()
export class CourseService {
    getCourses(): Promise<Course[]> {
        return Promise.resolve(COURSES);
    }

    getCourse(id: number): Promise<Course> {
        return this.getCourses()
            .then(courses => courses.find(course => course.id === id));
    }

}


