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
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required]
    })
  }
}
