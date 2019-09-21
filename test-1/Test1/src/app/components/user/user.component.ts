import { Component, OnInit } from "@angular/core";
import {UserService} from '../../services/user.service'
import { User, UserBase } from '../../models/user.model';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  private isNotActive = false;
  private isLogged: boolean = false;
  private name: string = "Thom";
  private lastName = "Roman";
  // private title:string = ''
  private items:string[] = ['Toyota','Hyandai','Mercedes']
  private seleccion:string = this.items[0]
  private seleccion_2:string = this.items[0]
  private user:UserBase

  constructor(private userService:UserService) {
    this.init()
  }
  async ngOnInit() {
  }
  private async init(){
    const {results} = await this.userService.getUser()
    this.user = {...results}[0]

  }
  private changeState() {
    this.isLogged = !this.isLogged;
  }
  private log($event){
    console.log($event)
  }
}
