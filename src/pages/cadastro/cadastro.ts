import { AgendamentosServiceProvider } from './../../providers/agendamentos-service/agendamentos-service';
import { Agendamento } from './../../models/agendamento';
import { Carro } from './../../models/carro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;
  public agendamento: Agendamento;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private _agendamentosService: AgendamentosServiceProvider) {
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
        this.agendamento = { 
          nome: '', 
          endereco: '', 
          email: '',
          modeloCarro: this.carro.nome,
          precoTotal: this.precoTotal, 
          data: new Date().toISOString() 
        };
  }

  agendar() {
    this._agendamentosService.agendar(this.agendamento)
      .subscribe(() => {
        alert('Agendou');
      }, () => alert('deu ruim'));
  }
}
