import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

/**
 * Generated class for the CadastroFbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-fb',
  templateUrl: 'cadastro-fb.html',
})
export class CadastroFbPage {

  public cadastro: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fb : FormBuilder) {

    this.cadastro = fb.group({
      email: new FormControl(null),
      cpf: new FormControl(null),
      senha: new FormControl(null)   
    });            


  }
  salvar = () => {
    console.log(this.cadastro.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroFbPage assasa');
  }

}
