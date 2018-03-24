import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
/*
  Módulos de formulário que ajudam a criar os agrupamentos de campos, validadores
*/
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

import { Router } from '@angular/router'

import { OrderService } from './order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'

import { Order, OrderItem } from './order.model'

import { RadioOption } from '../shared/radio/radio-option.model'

import 'rxjs/add/operator/do'
=======
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

<<<<<<< HEAD
  // Ambas as propriedades são sintaxes de expressões regulares (REGEX)
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  orderForm: FormGroup

  // Esse valor do frete em produção deve vir de uma API externa
  // provavelmente da API dos correios para calcular o valor do
  // frete, nesse caso foi setado o valor fixo de R$8,00
  delivery: number = 8

  orderId: string   // propriedade para sabermos se o pedido foi finalizado ou nao

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartao Refeicao', value: 'REF'},
    {label: 'Cartao de Debito', value: 'DEB'}
  ]


  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Criação do objeto FormGroup com suas respectivas validações
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]), /* método de FormBuilder que cria o componente */
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  // método abstrato responsavel por validar os campos do formulario
  static equalsTo(group: AbstractControl): {[key: string]: boolean}{
    // pega os valores via metodo get dos campos que deseja comparar
    // pegando as respectivas propriedades do objeto via nome
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    // Se os campos estiverem vazios, retornar undefined (disconsiderar)
    if(!email || !emailConfirmation){
      return undefined
    }
    // Se campos preenchidos, comparar os valores, se forem diferentes
    // retorna umachave (pode ser uma qualquer) com seu valor, nesse
    // um valor boleano
    if(email.value !==  emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    // Caso os emails sejam igual, disconsiderar retornando undefined
    return undefined
  }


  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  // Metodo que retorna o valor total dos itens
  // que estão no carrinho de compras
  itemsValue(): number {
    // O valor total vai vir do método itemsValue da classe OrderService
    return this.orderService.itemsValue()
  }

  // Metodo que verifica se o pedido foi finalizado ou nao
  isOrderCompleted(): boolean {
    return this.orderId !== undefined
  }

  // Método que imprime no console a Order
  checkOrder(order: Order){
    // Com o MAP, pegar a compra e incluir os items, transformando um array de
    // CartItem em um array de OrderItem
    order.orderItems = this.cartItems()
                           .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    // Mostra o pedido (Order) no console
    console.log(`Objeto enviado para ser gravado: ${order}`)

    // Chama o método no servidor de back-end e passa a Order para ser salavo e retorna o ID da transação
    this.orderService.checkOrder(order)
                     .do( (orderId: string) => {
                       this.orderId = orderId       // o atributo this.orderId recebe o valor do atributo local
                      })
                     .subscribe( (orderId: string) => {
                       // Redireciona para a página Order-summary
                       this.router.navigate(['/order-summary'])
                       //console.log(`Compra concluida: ${orderId}`)

                       // Limpar a lista de Itens
                       this.orderService.clear()
                     })

  }



=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
}
