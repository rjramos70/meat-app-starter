import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { OrderComponent } from './order.component'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent: OrderComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {

      // vamos verificar se o pedido foi finalizado
      if(!orderComponent.isOrderCompleted()){     // metodo 'isOrderCompleted' ainda nao esta implementado na classe 'OrderComponent'
        return window.confirm('Deseja desistir da compra?')
      }else{
        return true
      }

  }

}
