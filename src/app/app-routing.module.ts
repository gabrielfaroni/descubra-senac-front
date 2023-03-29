import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { TesteComponent } from './components/teste/teste.component';

const routes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'iniciarteste', component: TesteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
