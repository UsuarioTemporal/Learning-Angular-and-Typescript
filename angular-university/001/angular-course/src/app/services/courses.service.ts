import { Injectable } from '@angular/core';
import {Course} from '../model/course'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  constructor(private _http:HttpClient) { }

  getCourses({params=null}):Observable<Course[]>{
    if(!params)
      return this._http.get<Course[]>('http://localhost:4000/api/courses/')
    return this._http.get<Course[]>('http://localhost:4000/api/courses/',{params})
  }
}
