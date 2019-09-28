import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import {Course} from '../../model/course'
import { AppComponent } from '../app/app.component';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(
    @Host() private _app:AppComponent
  ) { }

  ngOnInit() {
  }
  @Input('data') course:Course
  @Input('cardIndex') index:number
  @Output() showCourse = new EventEmitter<Course>()
  @Output() eventAddCourse = new EventEmitter<Course>()
  onCourseViewed(course:Course){
    this.showCourse.emit(course)
  }
  isImageVisible(){
    return this.course || this.course.iconUrl
  }
  addCourse(course:Course){
    this.eventAddCourse.emit(course)
    this._app.courses=this._app.courses.filter(cour=>cour.id!==this.course.id)
  }
}