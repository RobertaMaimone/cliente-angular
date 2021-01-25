import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clientes-form' , component: ClientesFormsComponent},
  { path: 'clientes-form/:id' , component: ClientesFormsComponent},
  { path: 'clientes-lista' , component: ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
