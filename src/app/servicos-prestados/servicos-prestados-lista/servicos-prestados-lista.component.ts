import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../clientes.service';

@Component({
  selector: 'app-servicos-prestados-lista',
  templateUrl: './servicos-prestados-lista.component.html',
  styleUrls: ['./servicos-prestados-lista.component.css']
})
export class ServicosPrestadosListaComponent implements OnInit {

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
  }

}
