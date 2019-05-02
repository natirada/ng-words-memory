import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { WordService } from 'src/app/edit/words.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService,
              private wordser: WordService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.auth.signin(email, password);
    this.auth.changedToken.subscribe(
      (result: boolean) => {
        if (result) {
          this.wordser.loadData();
          this.wordser.FitchData.subscribe(
            (res: boolean) => {
              if (res) {
                this.router.navigate(['/game']);
              }
            }
          );
        }
      }
    );
  }
}
