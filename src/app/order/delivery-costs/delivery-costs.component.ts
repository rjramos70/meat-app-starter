import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  // Valor do frete
  @Input() delivery: number
  // Soma dos valores dos itens do carrinho
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  // Metodo que calcula o total da soma dos valores dos items + valor do frete
  total(): number {
    return this.delivery + this.itemsValue
  }

}
