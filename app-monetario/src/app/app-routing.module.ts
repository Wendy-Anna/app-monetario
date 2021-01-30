import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'cadastro-conta', component: CadastroContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
