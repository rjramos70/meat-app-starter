import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
// import abaixo e para as animacoes
import { trigger, state, style, transition, animate } from '@angular/animations'
=======
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0

import { Restaurant } from './restaurant.model'

@Component({
  selector: 'mt-restaurant',
<<<<<<< HEAD
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

=======
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
