import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _http:HttpClient){

  }
  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(reponse=>{
      this.users = reponse as any
      console.log(this.users)
    })
  }
  title = 'input-output';
  users = []
  
}
