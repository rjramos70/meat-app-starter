import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
// import { AboutComponent } from './about/about.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'

// O componente abaixo será removido, pois as classes vão ser carregadas quando
// for chamado a rota específica
// import { OrderComponent } from './order/order.component'

import { OrderSummaryComponent } from './order-summary/order-summary.component'

// Import para o componente not-found
import { NotFoundComponent } from './not-found/not-found.component'

// Import do componente de login
import { LoginComponent } from './security/login/login.component'

// Import da classe que sera responsavel pela protecao de rotas
import { LoggedInGuard } from './security/loggedin.guard'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent}, // URL que ser'a direcionado logo apos o usuario ser autenticado.
  {path: 'login', component: LoginComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
      children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard],       // canLoad = posso carregar a rota
    canActivate: [LoggedInGuard]},  // canActivate = posso ativar a rota;
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}  // rota padrão caso URL não seja identificada, deve-se usar no final das regras.
]
