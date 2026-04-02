import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastro(){
    this.router.navigate(['/cadastro'])
  }
  contasAReceber(){
    this.router.navigate(['/receber'])
  }
  contasAPagar(){
    this.router.navigate(['/pagar'])
  }

}
