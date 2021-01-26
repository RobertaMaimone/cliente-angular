import { ServicosPrestadosListaComponent } from './servicos-prestados-lista/servicos-prestados-lista.component';
import { ServicosPrestadosFormComponent } from './servicos-prestados-form/servicos-prestados-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'servicos-prestados-form', component: ServicosPrestadosFormComponent},
  {path: 'servicos-prestados-lista', component: ServicosPrestadosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosPrestadosRoutingModule { }
