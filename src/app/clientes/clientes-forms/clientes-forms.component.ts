import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-clientesForms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css']
})
export class ClientesFormsComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;
  cpf: String;
  cpfMasc: String;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.cliente = new Cliente();
   }

  ngOnInit(): void{
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
    this.id =  urlParams['id'];
    if(this.id){
    this.service.getClientesById(this.id).subscribe(
      response => this.cliente = response,
      errorResponse => this.cliente = new Cliente()
       )
      }
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista'])
  }

  onSubmit(){
   if(this.id){
     this.service.atualizar(this.cliente).subscribe( response => {
       this.success = true;
        this.errors = null;

      }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente']
      })
   }else{ this.service.salvar(this.cliente).subscribe( response => {
      this.success = true;
      this.errors = null;
      this.cliente = response;
    } , errorsResponse => {
      this.success = false;
      this.errors = errorsResponse.error.errors;
    })
  }
}

}
