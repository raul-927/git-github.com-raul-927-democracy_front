import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationPrincipalComponent } from './components/application-principal/application-principal.component';
import { ProductComponent } from './components/product/product.component';
import { StreetComponent } from './components/street/street.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { DepartmentComponent } from './components/department/department.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood.component';
import { InvestigationResultComponent } from './components/investigation-result/investigation-result.component';


@NgModule({
  declarations: [
    ApplicationPrincipalComponent,
    ProductComponent,
    StreetComponent,
    ProfessionComponent,
    DepartmentComponent,
    NeighborhoodComponent,
    InvestigationResultComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
