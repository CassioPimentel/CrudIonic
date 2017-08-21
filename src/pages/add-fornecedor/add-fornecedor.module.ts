import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFornecedorPage } from './add-fornecedor';

@NgModule({
  declarations: [
    AddFornecedorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFornecedorPage),
  ],
})
export class AddFornecedorPageModule {}
