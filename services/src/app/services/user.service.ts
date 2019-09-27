import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User
}
