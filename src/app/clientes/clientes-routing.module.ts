import { LayoutComponent } from './../layout/layout.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clientes' , component: LayoutComponent, children: [
    { path: 'form' , component: ClientesFormsComponent},
    { path: 'form/:id' , component: ClientesFormsComponent},
    { path: 'lista' , component: ClientesListaComponent},
    { path: '', redirectTo: '/clientes/lista', pathMatch: 'full' }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
