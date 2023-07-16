import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menuservice';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss']
})
export class DespesaComponent {
  constructor(public menuService:MenuService){}

  ngOnInit(){
    this.menuService.menuSelecionado = 4;
  }
}
