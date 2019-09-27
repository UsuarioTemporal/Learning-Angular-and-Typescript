import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import {UserBase} from '../../model/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userModel:UserBase
  constructor(private apiService:ApiService,private userService:UserService) {
   }

  ngOnInit() {
  }
  private generateUser(){
    this.apiService.requestGetUserRandom().subscribe(response=>{
      this.userService.user = response
      this.userModel = this.userService.user.results[0]
    })
  }
}
