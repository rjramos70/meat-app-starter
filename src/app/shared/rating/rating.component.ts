import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  // Opções de Rating
  rates: number[] = [1, 2, 3, 4, 5]

  // Valor de Rating selecionado, valor inicial igual a zero
  rate: number = 0

  // Valor temporário quando o usuário passar o mouse sobre
  // as estrelas e as mesmas mudarem de cor
  previousRate: number

  constructor() { }

  ngOnInit() {
  }

  // Método que seta o valor do Rate escolhido no template
  setRate(r: number){
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(this.rate)
    console.log(`Rate escolhido: ${this.rate}`)
  }

  setTemporaryRate(r: number){
    if(this.previousRate === undefined){
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }




}
