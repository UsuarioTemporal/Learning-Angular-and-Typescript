import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserBase } from 'src/app/model/user';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user:UserBase= this.generateUser() as any
  constructor(private userService:UserService) {
   }

  ngOnInit() {
    this.generateUser()
    console.log(this.user)
  }
  private async generateUser(){
    const {results} = await this.userService.getUser()
    return results[0]
  }
}
