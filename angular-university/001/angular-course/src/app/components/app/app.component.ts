import { Component, OnInit } from '@angular/core';
import {COURSES,findCourseById} from '../../../db-data'
import {Course} from '../../model/course'
import {CoursesService} from '../../services/courses.service'
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // courses:Course[] = COURSES
  courses:Course[] = []
  courses$ : Observable<Course[]>
  myCourses:Course[] = []
  // startDate = new Date(2000,0,1)
//
  constructor(private apiServiceCourse:CoursesService) { }

  ngOnInit() {
    const params = new HttpParams()
      .set("page","1")
      .set("pageSize","10")
    // this.apiServiceCourse.getCourses({params}).subscribe(response=>{
    //   this.courses = response
    // })
    this.courses$ = this.apiServiceCourse.getCourses({params})
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
