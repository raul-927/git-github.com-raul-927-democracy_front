import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {OAuthService } from 'angular-oauth2-oidc';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges{
  username?: string;
  isLogged?: boolean;
  isAdmin?: boolean;

  constructor(private loginService: LoginService, private route: Router, private oauthService: OAuthService, private appComponent: AppComponent){

  }
  ngOnChanges(): void {

    this.isLogged = this.appComponent.getIsLogged();
    this.route.navigateByUrl('/web-site');
  }
  ngOnInit(): void {
    this.isLogged = this.appComponent.getIsLogged();

  }

    public login():void{
      this.loginService.login();
     //this.oauthService.initImplicitFlowInternal();
      //this.appComponent.login();
      this.isLogged = this.loginService.getIsLogged();




    }

    public logout():void{
      //this.oauthService.logOut();
      this.appComponent.logout();
    }

    public application():void{

      console.log('LLEGO');

      //routerLink="/application"
      this.route.navigateByUrl('/application');
    }

}
