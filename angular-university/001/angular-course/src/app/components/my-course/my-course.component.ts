import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {
  constructor() { }
  @Input('myCourse')course:Course
  ngOnInit() {
    
  }

}
