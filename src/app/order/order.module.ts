import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router'

import { SharedModule }  from "../shared/shared.module"

import { OrderComponent } from './order.component'
import { OrderItemsComponent } from './order-items/order-items.component'
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component'

// Import para implementacao do Guard Router do componente de Pedido
import { LeaveOrderGuard } from './leave-order.guard'

// Foi associado o guard route 'LeaveOrderGuard' para ficar verificando se o mesmo esta ativo
const ROUTES: Routes = [
  {path:'', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
