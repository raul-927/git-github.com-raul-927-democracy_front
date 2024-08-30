import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPrincipalComponent } from './components/web-principal/web-principal.component';

const routes: Routes = [
  {
    path: '',
    component: WebPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule { }
