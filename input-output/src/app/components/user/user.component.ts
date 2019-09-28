import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  client = {
    name:'thom'
  }
  constructor() { }
  ngOnInit() {
  }
  @Input('data') user:any; // si no se coloca ('user') el atributo por defecto será data
  @Output() delete = new EventEmitter<number>();
  deleteUser(id:number){
    this.delete.emit(id)
  }
}
