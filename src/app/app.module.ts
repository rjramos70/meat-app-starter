import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
// Modulo para trabalhar com Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ApplicationErrorHandler } from './app.error-handler'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'

import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'

import { OrderSummaryComponent } from './order-summary/order-summary.component';
// -> import { RatingComponent } from './shared/rating/rating.component'
import { SharedModule } from './shared/shared.module'

// Em substituição aos serviços removidos, será importado o novo Core Module (core.module.ts)
// import { CoreModule } from './core/core.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component'


// Import abaixo e para resolver o problema de rotas que passou a existir ao fazermos o build para Producao.
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    // InputComponent,
    // RadioComponent,
    // Os componentes abaixo serão removidos para a inclusão do módulo order.module.ts que será carregado no arquivo de rotas
    /*
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    */
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent

    // , RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule.forRoot(), // importando o módulo com os providers
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
              {provide: LOCALE_ID, useValue: 'pt-BR'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler}  // declara nosso ErrorHandler como nosso error padrao
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
