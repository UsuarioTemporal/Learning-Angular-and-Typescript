import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private isNotActive = false
  private isLogged:boolean = false
  constructor() { }
  ngOnInit() {
  }
  private changeState(){
     this.isLogged = !this.isLogged
   }

}
