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
