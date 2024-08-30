import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OAuthModule}from 'angular-oauth2-oidc';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpTokenInterceptorService } from './services/interceptor/http-token-interceptor.service';
import { TranslocoRootModule } from './transloco-root.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8082'],
          sendAccessToken: true
      }
  }),
    TranslocoRootModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
