import { fornecedor } from './../fornecedor/fornecedorclass';
import { Component } from '@angular/core';
import { FornecedorProvider } from './../../providers/fornecedor/fornecedor';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edita-fornecedor',
  templateUrl: 'edita-fornecedor.html',
  providers: [ FornecedorProvider ]
})
export class EditaFornecedorPage {

  public fornecedor : fornecedor;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private fornecedorProvider: FornecedorProvider,
              public alertCtrl: AlertController) {

                 console.log("testeeee");
                 this.fornecedor = this.navParams.get('data');
  }

  closeModal(){
    this.view.dismiss();
  }

 Editar(supplierID: string,
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
    this.fornecedor.contactName = contactName;
    this.fornecedor.address = address;
    this.fornecedor.contactTitle = contactTitle;
    this.fornecedor.city = city;
    this.fornecedor.country = country;
    this.fornecedor.fax = fax;
    this.fornecedor.homePage = homePage;
    this.fornecedor.phone = phone;
    this.fornecedor.postalCode = postalCode;
     this.fornecedor.region = region;
      
    console.log(supplierID);

    console.log(supplierID, this.fornecedor);
    this.fornecedorProvider.atualizaFornecedor(supplierID, this.fornecedor);
    this.showAlert("Sucesso", "Registro atualizado com sucesso");
    
    this.closeModal();

  }

  ionViewDidLoad() {
      this.fornecedor = this.navParams.get('data');
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
