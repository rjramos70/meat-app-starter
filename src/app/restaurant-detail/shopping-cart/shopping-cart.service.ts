<<<<<<< HEAD
// Esse componente recebera o servico de notificacoes e por isso precisa implementar o decorator @Injectable()
import { Injectable } from '@angular/core'

import { CartItem } from './cart-item.model'
import { MenuItem } from '../menu-item/menu-item.model'

// Import abaixo e para os servicos de notificacoes
import { NotificationService } from '../../shared/messages/notification.service'

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = []

  constructor(private notificationService: NotificationService){}

  clear(){
    this.items = []
  }

  addItem(item: MenuItem){
    // primeiro verificar se o item ja consta no carrinho,
    // havendo é só incrementar a quantidade
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    // Se encontrou, incrementar quantidade
    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      // Incluir no carrinho
      this.items.push(new CartItem(item))
    }
    // Quando for inserido um item no carrinho o snackbar recebera uma notificacao
    this.notificationService.notify(`Voce adicionou o item ${item.name}`)
  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1
    if(item.quantity === 0){
      this.removeItem(item)
    }
  }

  removeItem(item: CartItem){
    // a partir do indice do item, remover a quantidade de um
    this.items.splice(this.items.indexOf(item), 1)

    // Quando for removido um item no carrinho o snackbar recebera uma notificacao
    this.notificationService.notify(`Voce removeu o item ${item.menuItem.name}`)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev+value, 0)
  }

}
=======
import { CartItem } from './cart-item.model'
import { MenuItem } from '../menu-item/menu-item.model'

export class ShoppingCartService {
  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item: MenuItem){
    // primeiro verificar se o item ja consta no carrinho,
    // havendo é só incrementar a quantidade
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    // Se encontrou, incrementar quantidade
    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1
    }else{
      // Incluir no carrinho
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    // a partir do indice do item, remover a quantidade de um
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev+value, 0)
  }

}
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
