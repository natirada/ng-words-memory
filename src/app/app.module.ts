import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlipModule } from 'ngx-flip';
import { BackDirective } from './edit/test/back.directive';
import { FrontDirective } from './edit/test/front.directive';
import { CommonModule } from '@angular/common';
import { WordService } from './edit/words.services';
import { FormsModule } from '@angular/forms';
import { PlayComponent } from './game/play/play.component';
import { UserDetailsComponent } from './game/user-details/user-details.component';
import { MinutesAndSecondes } from './game/user-details/minutesAndSecondes.pipe';
import { RunTime } from './game/runtime.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    EditComponent,
    FrontDirective,
    BackDirective,
    PlayComponent,
    UserDetailsComponent,
    MinutesAndSecondes,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlipModule,
    CommonModule,
    FormsModule
  ],
  providers: [ WordService , RunTime],
  bootstrap: [AppComponent]
})
export class AppModule { }
