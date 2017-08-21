import { produto } from './../produto/produtoclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';
import { ProdutoProvider } from './../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-edita-produto',
  templateUrl: 'edita-produto.html',
  providers: [ ProdutoProvider ]
})
export class EditaProdutoPage {

  public produto : produto;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private produtoProvider: ProdutoProvider,
              public alertCtrl: AlertController) {


                 console.log("testeeee");
                 this.produto = this.navParams.get('data');
     
  }

  closeModal(){
    this.view.dismiss();
  }

  Editar(productID: number,
             productName: string,
             quantityPerUnit: string,
             unitPrice: string,
             reorderLevel: string,
             unitsInStock: string,
             unitsOnOrder: string,
             discontinued: string){

    this.produto = new produto();
    this.produto.productID = productID;
    this.produto.categoryID = "1";
    this.produto.discontinued = "";
    this.produto.productName = productName;
    this.produto.quantityPerUnit = quantityPerUnit;
    this.produto.reOrderLevel = "12";
    this.produto.supplierID = "1";
    this.produto.unitPrice = unitPrice;
    this.produto.unitsInStock = unitsInStock;
    this.produto.unitsOnOrder = unitsOnOrder;
      
    console.log(productID);

    console.log(productID, this.produto);
    this.produtoProvider.atualizaProduto(productID, this.produto);
    this.showAlert("Sucesso", "Registro atualizado com sucesso");
    
    this.closeModal();

  }

  ionViewDidLoad() {
      this.produto = this.navParams.get('data');
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
