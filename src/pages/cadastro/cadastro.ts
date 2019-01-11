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

  constructor(public navCtrl: NavController, 
      public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
