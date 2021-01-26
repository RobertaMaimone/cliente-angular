import { environment } from '../environments/environment';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURLBase: String = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient) { }

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURLBase}`, cliente);
  }

  atualizar(cliente: Cliente) : Observable<any> {
    return this.http.put<any>(`${this.apiURLBase}/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURLBase}`);
  }

  getClientesById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURLBase}/${id}`);
  }

  deletar(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURLBase}/${cliente.id}`);
  }
}
