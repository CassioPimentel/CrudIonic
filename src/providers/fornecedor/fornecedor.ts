import { fornecedor } from './../../pages/fornecedor/fornecedorclass';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FornecedorProvider {

  readonly endpoint: string = 'https://urbano.eti.br/northwind/supplier';
  options : RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  buscaFornecedores(){
    return this.http.get(this.endpoint, this.options)
                    .map(res => res.json());;
  }

  deletaFornecedor(id: number){
    return this.http.delete(this.endpoint + "/" + id, this.options).map(res => res.json()).subscribe(data => {
      console.log(data);
    })
  }

  atualizaFornecedor(id: string ,fornecedor: fornecedor){

    this.http.put(this.endpoint, fornecedor, this.options)
             .map(res => res.json())
             .subscribe(data => {
             console.log(data);
    })

  }

  salvaFornecedor(fornecedor: fornecedor){

    this.http.post(this.endpoint, fornecedor, this.options)
             .map(res => res.json())
             .subscribe(data => {
             console.log(data);
    })

  }


}
