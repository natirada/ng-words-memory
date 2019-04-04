import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'game' , component: GameComponent},
  {path: 'edit' , component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
