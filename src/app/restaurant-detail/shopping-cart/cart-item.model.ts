<<<<<<< HEAD
import { MenuItem } from '../menu-item/menu-item.model'

export class CartItem {
  constructor(public menuItem: MenuItem,
              public quantity: number = 1){

  }

  value(): number {
    return this.menuItem.price * this.quantity
  }

}
=======
import { MenuItem } from '../menu-item/menu-item.model'

export class CartItem {
  constructor(public menuItem: MenuItem,
              public quantity: number = 1){

  }

  value(): number {
    return this.menuItem.price * this.quantity
  }

}
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
