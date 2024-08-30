import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {OAuthService } from 'angular-oauth2-oidc';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges{
  username?: string;
  isLogged?: boolean;
  isAdmin?: boolean;

  constructor(private messageService: MessageService, private loginService: LoginService, private route: Router, private oauthService: OAuthService, private appComponent: AppComponent){

  }
  ngOnChanges(): void {

    this.isLogged = this.appComponent.getIsLogged();
  }
  ngOnInit(): void {

    this.messageService.getMessage().subscribe(res =>{
      if(res['text']!= undefined){
        this.isLogged = this.appComponent.getIsLogged();
      }
    })

  }
    public login():void{
      this.loginService.login();
    }

    public logout():void{
      this.loginService.logout();

    }

    public application():void{
      this.route.navigateByUrl('applications');
    }

}
