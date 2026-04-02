import { Component, OnInit } from '@angular/core';
import { Cadastro, TipoTransacao } from '../models/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  standalone: false,
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome: string= ' ';
  tipo!: TipoTransacao;

  listaCadastros: any[] = []

  cadastrar(){
    const novoCadastro: Cadastro = {
      nome: this.nome,
      tipo: this.tipo
    };

    this.listaCadastros.unshift(novoCadastro)
  }


  excluir(){}


}
