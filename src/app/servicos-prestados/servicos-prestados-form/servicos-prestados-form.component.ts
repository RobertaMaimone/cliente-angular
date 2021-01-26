import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicosPrestados } from './../servicosPrestados';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servicos-prestados-form',
  templateUrl: './servicos-prestados-form.component.html',
  styleUrls: ['./servicos-prestados-form.component.css']
})
export class ServicosPrestadosFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicosPrestados;
  success: boolean = false;
  errors: String[];

  constructor(
    private clientesService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servico = new ServicosPrestados();
   }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe( response =>
      this.clientes = response)
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servico)
    .subscribe( response => {
      this.success = true;
      this.errors = null;
      this.servico = new ServicosPrestados();
    } , errorsResponse => {
      this.success = false;
      this.errors = errorsResponse.error.errors;
    })
  }
}
