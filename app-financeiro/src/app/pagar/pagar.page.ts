import { Component, OnInit } from '@angular/core';
import { Cliente, TipoPagamento } from '../models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/menu'])
  }

    nomeCliente: string = '';
    dataVencimento: string = ''; 
    pagamento?: TipoPagamento;
    valor?: number;
  
    listaCadastrosClientes: any[] = []
  
    cadastrarCliente(){
      const novoCliente: Cliente = {
        nomeCliente: this.nomeCliente,
        dataVencimento: this.dataVencimento,
        pagamento: this.pagamento,
        valor: Number(this.valor)
      };
  
      this.listaCadastrosClientes.unshift(novoCliente);
      this.limparFormularioCliente();
    }
  
    limparFormularioCliente(){
      this.nomeCliente = '',
      this.dataVencimento = '',
      this.pagamento= undefined,
      this.valor = undefined
    }
  
    excluirCliente(index: number){
        this.listaCadastrosClientes.splice(index, 1);
    }
  

}
