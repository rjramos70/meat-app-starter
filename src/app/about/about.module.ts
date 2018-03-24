import { NgModule } from '@angular/core'
import { AboutComponent } from './about.component'

/* Incluir os Routes para segregação dos módulos */
import { RouterModule, Routes } from '@angular/router'

const ROUTES: Routes = [
  {path: '', component: AboutComponent }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule, RouterModule.forChild(ROUTES)]
})
export class AboutModule {}
