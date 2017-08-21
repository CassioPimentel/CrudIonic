import { Component } from '@angular/core';
import { ProdutoPage } from '../produto/produto';
import { FornecedorPage } from '../fornecedor/fornecedor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutoPage;
  tab2Root = FornecedorPage;

  constructor() {

  }
}
