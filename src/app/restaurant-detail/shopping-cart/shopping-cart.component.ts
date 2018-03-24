import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

// Import para animar os itens do carrinho de compras
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('600ms 0s ease-in', keyframes([     // transicao de void para ready
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),   // mais ou menos em 80% da animacao
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([     // transicao de ready para void
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),   // mais ou menos em 20% da animacao
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  // propriedade que vai ter o estado da row
  rowState = 'ready'

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
