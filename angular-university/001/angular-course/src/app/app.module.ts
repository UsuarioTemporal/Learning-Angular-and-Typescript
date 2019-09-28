import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseImageComponent } from './components/course-image/course-image.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { MyCourseComponent } from './components/my-course/my-course.component'
@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    ListCoursesComponent,
    MyCourseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
