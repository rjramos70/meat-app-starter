import { Injectable } from '@angular/core'

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Order, OrderItem } from './order.model'

import { MEAT_API } from '../app.api'

@Injectable()
export class OrderService {
  // precisamos injetar esse LoginService como argumento do construtor para ter acesso ao User logado
  constructor(private cartService: ShoppingCartService,
              private http: HttpClient){}

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  // metodos oriundos do ShoppingCartService
  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  // Método que busca na classe ShoppingCartService o valor total dos items
  itemsValue(): number {
    return this.cartService.total()
  }

  // Metodo que recebe a Order e salva no servidor de back-End
  // por ser uma chamada HTTP, retornará um objeto Observable
  // com a string do ID da comprar que foi gravada.
  checkOrder(order: Order): Observable<string>{

    // Envia usando o método POST
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id) // Caso queira que o método retorne somente o ID da comprar salva
  }

  // Método que limpa a lista de Itens
  clear(){
    this.cartService.clear()
  }

}
