import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private isNotActive = false
  private isLogged:boolean = false
  private name:string = 'Thom'
  private lastName = 'Roman'
  constructor() { }
  ngOnInit() {
  }
  private changeState(){
     this.isLogged = !this.isLogged
   }

}
