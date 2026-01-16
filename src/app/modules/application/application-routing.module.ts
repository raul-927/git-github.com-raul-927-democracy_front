import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPrincipalComponent } from './components/application-principal/application-principal.component';
import { authGuard } from 'src/app/services/guard/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { InvestigationResultComponent } from './components/investigation-result/investigation-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'applicationprincipal',
    pathMatch: 'full'
  },

  {
    path: "applicationprincipal/product",
    component: ProductComponent,
    canActivate: [authGuard]
  },
  {
    path: "applicationprincipal",
    component: ApplicationPrincipalComponent,
    canActivate: [authGuard]
  },
  {
    path: "applicationprincipal/investigationresult",
    component: InvestigationResultComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
