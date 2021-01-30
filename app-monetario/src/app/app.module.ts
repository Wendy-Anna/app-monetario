import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { TelaUsuarioComponent } from '../tela-usuario/tela-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    TelaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
