import { Component, OnInit } from "@angular/core";
import {UserService} from '../../services/user.service'

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
  constructor(private userService:UserService) {}
  async ngOnInit() {
    console.log(await this.userService.getUser())
  }
  private changeState() {
    this.isLogged = !this.isLogged;
  }
  log($event){
    console.log($event)
  }
}
