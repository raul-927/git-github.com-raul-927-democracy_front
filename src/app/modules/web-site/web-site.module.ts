import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSiteRoutingModule } from './web-site-routing.module';
import { WebPrincipalComponent } from './components/web-principal/web-principal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    WebPrincipalComponent,
    CarouselComponent,
    FooterComponent,
    HeadComponent,
    HeaderComponent,
    MenuComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ],
  exports:[
    CarouselComponent
  ]
})
export class WebSiteModule { }
