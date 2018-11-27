import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFbPage } from './cadastro-fb';

@NgModule({
  declarations: [
    CadastroFbPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFbPage),
  ],
})
export class CadastroFbPageModule {}
