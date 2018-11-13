import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public nome: string = "";
  public rua: string = "";
  public numero: number;
  public bairro: string = "";
  public cidade: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.nome = this.navParams.get("nome");
      this.rua  = this.navParams.get("rua");
      this.numero = this.navParams.get("numero");
      this.bairro = this.navParams.get("bairro");
      this.cidade = this.navParams.get("cidade");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
