import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'

<<<<<<< HEAD
// Import abaixo para animação da searchbar de busca de Restaurantes
import { trigger, state, style, transition, animate } from '@angular/animations'

// Import abaixo para trabalhar com Reactive Forms na nossa barra de busca de restaurantes
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
// Import para utilizarmos o SwitchMap na busca da search bar
import 'rxjs/add/operator/switchMap'
// Operador usado para logar as queries das requisições feitas a cada caracter digitado no search bar
import 'rxjs/add/operator/do'
// operador só envia o evento quando a diferença entre dois eventos for mais que o tempo passado como parametro
import 'rxjs/add/operator/debounceTime'
// Operador só faz a chamanda quando os eventos forem diferente e não existma no histórico das requisições
import 'rxjs/add/operator/distinctUntilChanged'
// Operadores para tratamento do erro de backend
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from' // usado para criar uma string a partir de um array, e vai emitir um evento para cada item do array.
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  // Propriedade que controla a visibilidade do search bar
  searchBarState = 'hidden'

  restaurants: Restaurant[]

  // Propriedades para o form
  searchForm: FormGroup
  searchControl: FormControl

  // Vamos injetar uma instância de FormBuilder
  constructor(private restaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    // Criar as instâncias do form
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    // Inscrever no Observable para escutar o que o cliente esta digitando.
    // Toda vez que que alguem digitar algum valor naquele campo, isso vai gerar um evento e quem estiver inscrito no valueChanges
    // vai receber uma notificação.
    // Abaixo estamos nos inscrevendo no valueChanges:
    this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged() // Operador só faz a chamanda quando os eventos forem diferente e não existma no histórico das requisições
        .do(searchTerm => console.log(`q => ${searchTerm}`))  // TEMPORARIO so para vermos o que est sendo digitdo
        .switchMap(searchTerm =>
          this.restaurantsService
            .restaurants(searchTerm)
            .catch(error=>Observable.from([])))
        .subscribe(restaurants => this.restaurants = restaurants)



=======
@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

<<<<<<< HEAD
  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

=======
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
}
