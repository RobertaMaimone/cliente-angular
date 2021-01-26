import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ServicosPrestados } from './servicos-prestados/servicosPrestados';
import { HttpClient } from '@angular/common/http';
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
}
