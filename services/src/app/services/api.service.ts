import { Injectable } from '@angular/core';
import { User, UserBase } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url:string="https://randomuser.me/api/1.2/?inc=gender,name,email,picture&noinfo"
  constructor(
    private _http:HttpClient
  ) { }
  requestGetUserRandom():Observable<User>{
    return this._http.get<User>(this.api_url)
  }
}
