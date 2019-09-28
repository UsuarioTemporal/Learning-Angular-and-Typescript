import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { CourseCardComponent } from './components/course-card/course-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyCourseComponent } from './components/my-course/my-course.component'
@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
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
