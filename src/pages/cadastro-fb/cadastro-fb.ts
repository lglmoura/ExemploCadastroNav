import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import {CpfValidator} from '../../validator/cpf'

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
      email: new FormControl(null,Validators.compose([Validators.email,
                                                      Validators.required])),
      cpf: new FormControl(null,Validators.compose([Validators.required, CpfValidator.cpfValido])),
      senha: new FormControl(null,Validators.compose([Validators.required,
                                                      Validators.minLength(6),
                                                      Validators.maxLength(20)]))   
    });            


  }

  salvar = () => {

    console.log(this.cadastro.value);

    let { email, cpf, senha } = this.cadastro.value;
    //console.log(this.cadastro.controls);
    console.log("Senha: => "+senha);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroFbPage assasa');
  }

}
