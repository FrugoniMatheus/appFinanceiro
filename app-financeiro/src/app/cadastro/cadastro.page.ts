import { Component, OnInit } from '@angular/core';
import { Cadastro, TipoTransacao } from '../models/cadastro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  standalone: false,
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['/menu'])
  }

  nome: string= ' ';
  tipo: TipoTransacao | undefined;
  endereco: string= ' ';

  listaCadastros: any[] = []

  cadastrar(){

    const novoCadastro: Cadastro = {
      nome: this.nome,
      endereco: this.endereco,
      tipo: this.tipo,
    };

    this.listaCadastros.unshift(novoCadastro);
    this.limparFormulario();
  }

  limparFormulario(){
    this.nome = ' ';
    this.endereco = ' ';
    this.tipo = undefined; 
  }

  excluir(index: number) {
    this.listaCadastros.splice(index, 1);
  }


}
