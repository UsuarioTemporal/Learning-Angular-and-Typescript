import { Component, OnInit } from '@angular/core';
import {COURSES,findCourseById} from '../../../db-data'
import {Course} from '../../model/course'
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses:Course[] = COURSES
  myCourses:Course[] = []

  constructor() { }

  ngOnInit() {
  }
  onCourseSelected(course:Course){
    console.log(course)
  }
  addCourse(course:Course){
    this.myCourses.push(course)
  }
  verifyMyCourses(){
    return this.myCourses  && this.myCourses.length 
  }
  listEmptyObject(){
    return {
      'margin':'auto'
    }
  }
}
