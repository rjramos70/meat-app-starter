import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  // metodo que retorna os itens do carrinho
  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  // metodo que retorna o valor total do carrinho
  total(): number {
    return this.shoppingCartService.total()
  }

}
