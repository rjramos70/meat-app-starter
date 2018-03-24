import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import { MEAT_API } from '../app.api'


@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient){}

  // Esta sendo incluído o parametro 'search' como opcional, assim não irá quebrar a chamadas que não estejam passando o parametro.
  restaurants(search?: string): Observable<Restaurant[]>{
    // criamos uma instancia do objeto HttpParams
    let params: HttpParams = undefined
    // testamos se a variavel search esta preenchida
    if(search){
      params = new HttpParams().append('q', search)
    }
    // O parametro 'q' faz uma busca genérica por qualquer informação do restaurante.
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  // metodo que retorna os reviews de cada respectivo restaurante
  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  // metodo que retorna os menus de cada respectivo restaurante
  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

}
