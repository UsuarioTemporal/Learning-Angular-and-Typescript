import { Component, OnInit, Input, Output,EventEmitter, Host } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  client = {
    name:'thom'
  }
  constructor(
    @Host() private _app :AppComponent
  ) {
    console.log(_app)
   }
  ngOnInit() {
  }
  @Input('data') user:any; // si no se coloca ('user') el atributo por defecto será data
  // @Output() delete = new EventEmitter<number>();
  deleteUser(id:number){
    // this.delete.emit(id)
    this._app.users = this._app.users.filter(user=>user.id!==id)
  }
}

/**
 * Una solucion para no tener que salir del hijo es trabajar con el decorador HOST
 */