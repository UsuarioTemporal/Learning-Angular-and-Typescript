import { Component, OnInit, Input } from '@angular/core';
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
  
}