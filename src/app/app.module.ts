import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoService } from './servico-prestado.service';
import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesService } from './clientes.service'
import { HttpClientModule } from '@angular/common/http'
import { ServicosPrestadosModule } from './servicos-prestados/servicos-prestados.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'



@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      LayoutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosPrestadosModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
