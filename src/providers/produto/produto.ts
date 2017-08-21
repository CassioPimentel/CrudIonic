import { produto } from './../../pages/produto/produtoclass';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoProvider {

  readonly endpoint: string = 'https://urbano.eti.br/northwind/product';
  options : RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  buscaProdutos(){
    return this.http.get(this.endpoint, this.options)
                    .map(res => res.json());;
  }

  deletaProduto(id: number){
    return this.http.delete(this.endpoint + "/" + id, this.options).map(res => res.json()).subscribe(data => {
      console.log(data);
    })
  }

  atualizaProduto(id: number ,produto: produto){

    this.http.put(this.endpoint, produto, this.options)
             .map(res => res.json())
             .subscribe(data => {
             console.log(data);
    })

  }

  salvaProduto(produto: produto){

    this.http.post(this.endpoint, produto, this.options)
             .map(res => res.json())
             .subscribe(data => {
             console.log(data);
    })

  }

}
