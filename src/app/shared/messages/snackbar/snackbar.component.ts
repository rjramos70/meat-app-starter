import { Component, OnInit } from '@angular/core';

// import abaixo e para trabalhar com animacoes
import { trigger, state, style, transition, animate } from '@angular/animations'

// Import abaixo e para receber as notificaoes do carrinho de compra para o snackbar
import { NotificationService } from '../notification.service'
// Para podermos controlar o tempo que a snackbar fica visivel na tela, precisaremos dos imports abaixo:
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'  // responsavel pelo tempo que a snackbar permanecera visivel.
// Imports abaixo e para controlar os Observables que controlam o Snackbar
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => visible', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there!'

  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // Iremos inscrever no tifier para receber as mensagens
    this.notificationService.notifier
      .do(message=>{
        // receberemos a mensagem
        this.message = message
        // mudar a visibilidade do snackbar
        this.snackVisibility = 'visible'
    }).switchMap(message=> Observable.timer(3000))
      .subscribe(timer=> this.snackVisibility = 'hidden')
}


}
