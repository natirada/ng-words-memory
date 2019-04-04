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
    MinutesAndSecondes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlipModule,
    CommonModule,
    FormsModule
  ],
  providers: [ WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
