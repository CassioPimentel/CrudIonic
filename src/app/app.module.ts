import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { ProdutoPage } from '../pages/produto/produto';
import { FornecedorPage } from '../pages/fornecedor/fornecedor';
//import { AddProdutoPage } from '../pages/add-produto/add-produto';
//import { DeleteProdutoPage } from '../pages/delete-produto/delete-produto';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoProvider } from '../providers/produto/produto';
import { FornecedorProvider } from '../providers/fornecedor/fornecedor';

@NgModule({
  declarations: [
    MyApp,
    ProdutoPage,
    FornecedorPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutoPage,
    FornecedorPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoProvider,
    FornecedorProvider
  ]
})
export class AppModule {}
