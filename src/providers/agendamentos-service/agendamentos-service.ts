import { Agendamento } from './../../models/agendamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendamentosServiceProvider {

  private _url:string = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {
  }

  agendar(agendamento:Agendamento) {
    return this._http.post(`${this._url}/agendamento/agenda`, agendamento);
  }
}
