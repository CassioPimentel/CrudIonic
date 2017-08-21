import { FornecedorProvider } from './../../providers/fornecedor/fornecedor';
import { fornecedor } from './fornecedorclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fornecedor',
  templateUrl: 'fornecedor.html',
  providers: [ FornecedorProvider ]
})
export class FornecedorPage {

  public fornecedores = new Array<fornecedor>();

  constructor(private navCtrl: NavController,
              private view: ViewController,
              private fornecedorProvider: FornecedorProvider,
              public modal: ModalController,
              public alertCtrl: AlertController) {}

  editFornecedor(fornecedor: fornecedor){
    const FornecedorModal = this.modal.create("EditaFornecedorPage", { data: fornecedor });
    FornecedorModal.present();
  }

  adicionarFornecedor(){
    const FornecedorModal = this.modal.create("AddFornecedorPage", { data: 0 });
    FornecedorModal.present();
  }

  deleteFornecedor(id: number){
    console.log("deletar=", id);
    const result = this.fornecedorProvider.deletaFornecedor(id);
    if(result){
      this.showAlert("Sucesso","Registro excluido com sucesso");
      this.ionViewDidLoad();
    }else{
      this.showAlert("Erro","Erro ao excluir o registro");
    }
  }

  ionViewDidLoad() {
    this.fornecedorProvider.buscaFornecedores().subscribe(fornecedores => {
      console.log(fornecedores);
       this.fornecedores = fornecedores;
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
