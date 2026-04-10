import { Component, OnInit } from '@angular/core';
import { Fabricante, TipoPagamento } from '../models/fabricante';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nomeFabricante: string = '';
  dataVencimento: string = ''; 
  pagamento?: TipoPagamento;
  valor?: number;

  listaCadastrosFabricantes: any[] = []

  cadastrarFabricante(){
    const novoFabricante: Fabricante = {
      nomeFabricante: this.nomeFabricante,
      dataVencimento: this.dataVencimento,
      pagamento: this.pagamento,
      valor: Number(this.valor)
    };

    this.listaCadastrosFabricantes.unshift(novoFabricante);
    this.limparFormularioFabricante();
  }

  limparFormularioFabricante(){
    this.nomeFabricante = '',
    this.dataVencimento = '',
    this.pagamento= undefined,
    this.valor = undefined
  }

  excluirFabricante(index: number){
      this.listaCadastrosFabricantes.splice(index, 1);
  }

}
