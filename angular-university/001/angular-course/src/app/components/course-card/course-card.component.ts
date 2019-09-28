import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Course} from '../../model/course'
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('data') course:Course
  @Input('cardIndex') index:number
  @Output() showCourse = new EventEmitter<Course>() 
  onCourseViewed(course:Course){
    this.showCourse.emit(course)
  }
  isImageVisible(){
    return this.course || this.course.iconUrl
  }
  addCourse(course:Course){
    console.log(course)
  }
}