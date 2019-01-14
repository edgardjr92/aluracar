import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../models/carro';

@Injectable()
export class CarrosServiceProvider {

  private _url:string = 'http://localhost:8080/api/carro/listaTodos';

  constructor(private _http: HttpClient) {
    
  }

  getAll() {
    return this._http.get<Carro[]>(this._url);
  }

}
