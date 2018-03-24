import { Component, OnInit, Input } from '@angular/core';
// import abaixo e para as animacoes
import { trigger, state, style, transition, animate } from '@angular/animations'

import { Restaurant } from './restaurant.model'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [     // faz a transicao de void(quando ainda nao entrou na arvore de componentes) para ready
        style({ opacity: 0, transform: 'translate(-30px, -10px)'}),   // definiu o estilo
        animate('800ms') // definiu a animacao: 500ms de velocidade; 0s de delay; ease-in-out que sai acelerando
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  // propriedade com o estado do componente
  restaurantState = 'ready'

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
