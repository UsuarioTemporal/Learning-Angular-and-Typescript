import { Component, OnInit, Host } from '@angular/core';
import { Course } from 'src/app/model/course';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  private myCourse:Course[]
  constructor(
    @Host() private _app:AppComponent
  ) { }

  ngOnInit() {
  }
  private verifyCourses(){
    return this.myCourse && this.myCourse.length
  }
}
