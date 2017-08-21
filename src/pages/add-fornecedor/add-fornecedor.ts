import { fornecedor } from './../fornecedor/fornecedorclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';
import { FornecedorProvider } from './../../providers/fornecedor/fornecedor';

@IonicPage()
@Component({
  selector: 'page-add-fornecedor',
  templateUrl: 'add-fornecedor.html',
   providers: [ FornecedorProvider ]
})
export class AddFornecedorPage {

  public fornecedor : fornecedor;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private fornecedorProvider: FornecedorProvider,
              public alertCtrl: AlertController) {

                this.fornecedor = new fornecedor();
  }

  closeModal(){
    this.view.dismiss();
  }

  addProduto(supplierID: string,
             companyName: string,
             contactName: string,
             contactTitle: string,
             address: string,
             city: string,
             region: string,
             postalCode: string,
             country: string,
             phone: string,
             fax: string,
             homePage: string){

    this.fornecedor = new fornecedor();
    this.fornecedor.supplierID = supplierID;
    this.fornecedor.companyName = companyName;  
    this.fornecedor.address = address;
    this.fornecedor.contactTitle = contactTitle;
    this.fornecedor.contactName = contactName;
    this.fornecedor.city = city;
    this.fornecedor.country = country;
    this.fornecedor.fax = fax;
    this.fornecedor.homePage = homePage;
    this.fornecedor.phone = phone;
    this.fornecedor.postalCode = postalCode;
     this.fornecedor.region = region;
      
    console.log(supplierID);

    console.log(this.fornecedor);
    this.fornecedorProvider.salvaFornecedor(this.fornecedor);
    this.showAlert("Sucesso", "Registro salvo com sucesso");
 
    this.closeModal();

  }

  ionViewDidLoad() {
    this.fornecedor = new fornecedor();

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
