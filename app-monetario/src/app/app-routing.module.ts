import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { TelaUsuarioComponent } from '../tela-usuario/tela-usuario.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'tela', component: TelaUsuarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
