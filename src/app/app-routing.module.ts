import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { EditComponent } from './edit/edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '' , redirectTo: '/signin' , pathMatch: 'full' },
  {path: 'game' , component: GameComponent, canActivate: [AuthGuardService]},
  {path: 'edit' , component: EditComponent, canActivate: [AuthGuardService]},
  {path: 'signin' , component: SigninComponent},
  {path: 'signup' , component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
