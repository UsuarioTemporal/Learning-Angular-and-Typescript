import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signupForm : FormGroup
  constructor(
    private _builder:FormBuilder
  ){
    this.signupForm = this._builder.group({
      name:['',Validators.required],
      user:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }
  sendInfo(values){
    console.log(values)
  }
}
