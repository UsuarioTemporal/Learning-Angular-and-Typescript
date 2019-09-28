import { Component, OnInit } from '@angular/core';
import {COURSES,findCourseById} from '../../../db-data'
import {Course} from '../../model/course'
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private courses:Course[] = COURSES
  constructor() { }

  ngOnInit() {
  }
  onCourseSelected(course:Course){
    console.log(course)
  }
  
}
