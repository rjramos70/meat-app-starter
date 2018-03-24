import { Injectable } from '@angular/core'
<<<<<<< HEAD
import { HttpClient, HttpParams } from '@angular/common/http'
=======
import { Http } from '@angular/http'
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import { MEAT_API } from '../app.api'
<<<<<<< HEAD


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
=======
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class RestaurantsService {

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  }

  // metodo que retorna os reviews de cada respectivo restaurante
  reviewsOfRestaurant(id: string): Observable<any>{
<<<<<<< HEAD
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
=======
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  }

  // metodo que retorna os menus de cada respectivo restaurante
  menuOfRestaurant(id: string): Observable<MenuItem[]>{
<<<<<<< HEAD
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
=======
  return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  }

}
