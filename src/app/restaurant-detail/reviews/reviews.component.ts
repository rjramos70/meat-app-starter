import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from '../../restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  // vai receber o objeto Observable sem tratamento e passar para ser tratado
  // na interface usando Pipe
  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
