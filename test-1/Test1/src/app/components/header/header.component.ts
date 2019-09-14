import { Component, OnInit } from '@angular/core';
import { IBase } from '../../models/ibase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private name:string = 'Thom'
  private arr:string[] = ['Willian','Niuton','Prro']
  // private myObj:IBase= {
  //   name:'Thom',
  //   age:21
  // } // asignando directamente
  private myObj = <IBase>{ // haciendo casting
    name:'Thom',
    age:21
  }
  private generateRandomNumber(){
    this.myObj.age = Math.floor(Math.random()*21)
  }
  constructor() {
    console.log('El header se está construyendo');
   }

  ngOnInit() {
    console.log('El header ya esta construido')
  }

}
