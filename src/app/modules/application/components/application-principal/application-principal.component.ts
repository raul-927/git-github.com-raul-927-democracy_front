import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {OAuthService } from 'angular-oauth2-oidc';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-application-principal',
  templateUrl: './application-principal.component.html',
  styleUrls: ['./application-principal.component.css']
})
export class ApplicationPrincipalComponent {
  username?: string;
  isLogged?: boolean;
  isAdmin?: boolean;

  constructor(private messageService: MessageService, private loginService: LoginService, private route: Router, private oauthService: OAuthService, private appComponent: AppComponent){

  }

  ngOnChanges(): void {

    this.isLogged = this.appComponent.getIsLogged();
    //this.route.navigateByUrl('/web-site');
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

    public investigationResult():void{
      this.route.navigate(['/applications/applicationprincipal/investigationresult']);
    }


}
