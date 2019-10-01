import { Injectable } from '@angular/core';
import {Course} from '../model/course'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  constructor(private _http:HttpClient) { }

  getCourses():Observable<Course[]>{
    return this._http.get<Course[]>('http://localhost:4000/api/courses/')
  }
}
