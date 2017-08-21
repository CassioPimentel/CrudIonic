import { ProdutoProvider } from './../../providers/produto/produto';
import { produto } from './produtoclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
  providers: [ ProdutoProvider ]
})
export class ProdutoPage {

  public produtos = new Array<produto>();

  constructor(private navCtrl: NavController,
              private view: ViewController,
              private produtoProvider: ProdutoProvider,
              public modal: ModalController,
              public alertCtrl: AlertController) {}

  editProduto(produto: produto){
    const profileModal = this.modal.create("EditaProdutoPage", { data: produto });
    profileModal.present();
  }

  adicionarProduto(){
    const profileModal = this.modal.create("AddProdutoPage", { data: 0 });
    profileModal.present();
  }

  deleteProduto(id: number){
    console.log("deletar=", id);
    const result = this.produtoProvider.deletaProduto(id);
    if(result){
      this.showAlert("Sucesso","Registro excluido com sucesso");
      this.ionViewDidLoad();
    }else{
      this.showAlert("Erro","Erro ao excluir o registro");
    }
  }

  ionViewDidLoad() {
    this.produtoProvider.buscaProdutos().subscribe(categories => {
      console.log(categories);
       this.produtos = categories;
    });
  }

  showAlert(titulo: string, mensagem: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
