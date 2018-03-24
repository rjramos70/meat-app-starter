import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
<<<<<<< HEAD
// import abaixo para animacao do item do menu
import { trigger, state, style, transition, animate } from '@angular/animations'
=======
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0

import { MenuItem } from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
<<<<<<< HEAD
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  // cria o estado do menu
  menuItemState = 'ready'

=======
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  // Metodo que incluirá novo comentario
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
