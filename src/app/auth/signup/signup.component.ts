import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './mustmatch.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formbuilder: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      email: new FormControl(null, [Validators.required , Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required , Validators.maxLength(10)]),
      verfictionpassword: new FormControl(null, Validators.required)
    }, {
      validator: MustMatch('password', 'verfictionpassword')
    });
  }


  onSubmit() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.auth.signup(email,password);
  }
}
