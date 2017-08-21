import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteProdutoPage } from './delete-produto';

@NgModule({
  declarations: [
    DeleteProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteProdutoPage),
  ],
})
export class DeleteProdutoPageModule {}
