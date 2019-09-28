import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import { Course } from 'src/app/model/course';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {
  constructor(
    @Host() private _app:AppComponent
  ) { }
  @Input('myCourse')course:Course
  ngOnInit() {
    
  }
  isImageVisible(){
    return this.course && this.course.iconUrl
  }
  deleteCourse(course:Course){
    this._app.myCourses = this._app.myCourses.filter(c=>c.id!==course.id)
    this._app.courses.push(course)
  }
}
