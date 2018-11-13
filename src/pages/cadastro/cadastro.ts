import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  public nome:string="";
  public rua:string="";
  public numero:number;
  public bairro:string="";
  public cidade:string="";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  salvar = () =>{
    this.navCtrl.push(DetalhePage, {
      nome: this.nome,
      endereco: this.rua,
      numero: this.numero,
      bairro: this.numero,
      cidade: this.cidade
    });
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
