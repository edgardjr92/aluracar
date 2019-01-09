import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

  public carros: Carro[];

  constructor(public navCtrl: NavController, 
    private _http: HttpClient, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _carrosService: CarrosServiceProvider) {
  }

  ionViewDidLoad() {
    const loading = this._loadingCtrl.create({ content: 'Carregando...' });

    loading.present();
  
    this._carrosService.getAll()
      .subscribe(
        (carros) => {
          this.carros = carros;
          loading.dismiss();
      }, (err: HttpErrorResponse) => {
          loading.dismiss();
          this._alertCtrl.create( { 
            title:'Connection Error', 
            subTitle: 'Não foi possível carregar a lista de carros',
            buttons: [
              { text: 'ok' }
            ]}).present();
      });

  }
}
