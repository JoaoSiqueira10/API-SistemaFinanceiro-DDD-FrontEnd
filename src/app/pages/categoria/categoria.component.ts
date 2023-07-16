import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menuservice';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  constructor(public menuService:MenuService){}

  ngOnInit(){
    this.menuService.menuSelecionado = 3;
  }
}
