import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private apiService:ApiService,private userService:UserService) {
   }

  ngOnInit() {
    this.generateUser()
  }
  private generateUser(){
    // this.apiService.requestGetUserRandom().subscribe(response=>{
    //   this.userService.user.results = response.results
    // })
  }
}
