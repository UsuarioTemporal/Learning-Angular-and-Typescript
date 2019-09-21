import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  getUser():Promise<User>{
    return this.http.get<User>('https://randomuser.me/api/1.2/?inc=gender,name,email,picture&noinfo').toPromise();
  }
}
