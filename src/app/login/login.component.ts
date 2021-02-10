import { AuthService } from './../auth.service';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: String;
  password: String;
  cadastrando: boolean;
  mensagemSucesso: String;
  errors: String[];


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
    this.mensagemSucesso = "";
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario)
                    .subscribe(response => {
                      this.mensagemSucesso = "Cadastro realizado com sucesso! Faça o Login.";
                      this.cadastrando = false;
                      this.username = '';
                      this.password = '';
                      this.errors = [];
                    }, errorsResponse => {
                       this.mensagemSucesso = null;
                       this.errors = errorsResponse.error.errors;

                    })

  }

}
