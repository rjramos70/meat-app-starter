import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from  './rating/rating.component'

// Imports que servirão para o retorno da função forRoot
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantsService } from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'

// Import do servico de notificacao para ser utilizado no snackbar
import { NotificationService } from './messages/notification.service'

// Import para inclusao do servico de login
import { LoginService } from '../security/login/login.service'

// Import da classe que sera responsavel pela protecao de rotas
import { LoggedInGuard } from '../security/loggedin.guard'

// Import da classe que sera responsavel pela guarda da rota do Pedido
import { LeaveOrderGuard } from '../order/leave-order.guard'

// Imports para registro do Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from '../security/auth.interceptor'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService,
                  RestaurantsService,
                  OrderService,
                  NotificationService,
                  LoginService,
                  LoggedInGuard,
                  LeaveOrderGuard,
                  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}  // Assim registraremos todos os Interceptors em nome de HTTP_INTERCEPTORS que passara a ter um array de Interceptors.
                 ]
    }
  }
}
