import { ServicoPrestadoBusca } from './servicos-prestados/servicos-prestados-lista/servicoPrestadoBusca';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ServicosPrestados } from './servicos-prestados/servicosPrestados';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURLBase: String = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(ServicosPrestados: ServicosPrestados) : Observable<ServicosPrestados>{
    return this.http.post<ServicosPrestados>(`${this.apiURLBase}`, ServicosPrestados);
  }

  buscar(nome: any, mes: number) : Observable<ServicoPrestadoBusca[]>{
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');
    const url = this.apiURLBase + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
