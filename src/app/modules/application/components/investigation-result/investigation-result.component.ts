import { Component, OnInit, OnChanges, OnDestroy, signal, computed, SimpleChanges, booleanAttribute } from '@angular/core';
import { InvestigationResultService } from 'src/app/services/investigation-result.service';
import { StreetService } from 'src/app/services/street.service';
import { InvestigationResultRequest } from 'src/app/request/investigation-result-request';
import { ObtainInvestigationResult$Params } from 'src/app/fn/investigationResult/obtain-investigation-result';
import { ProductTypeEnum } from 'src/app/enums/product-type';
import { toSignal } from '@angular/core/rxjs-interop';
import { SseService } from 'src/app/services/sse.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { StreetResultResponse } from 'src/app/response/street-result-response';
import { InvestigationResultSseService } from 'src/app/services/investigation-result-sse.service';
import { InvestigationResultDomain } from 'src/app/response/investigation-result-domain';
@Component({
  selector: 'app-investigation-result',
  templateUrl: './investigation-result.component.html',
  styleUrls: ['./investigation-result.component.css']
})
export class InvestigationResultComponent implements OnInit, OnChanges, OnDestroy {

  investigationResultList: InvestigationResultDomain[] = [];


  count = signal(0);
  doubleCount = computed(() => this.count() * 2);


  constructor(private oauthService: OAuthService, private investigationResultSseService: InvestigationResultSseService, private investigationResultService: InvestigationResultService, private sseService: SseService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.investigationResultSseService.getServerSentEvent().subscribe(res => {
      console.log("RES: " + JSON.stringify(res));
      let investigationResult: InvestigationResultDomain = JSON.parse(res);
      console.log('INVESTIGATION_RESULT: ' + JSON.stringify(investigationResult));
      this.investigationResultList.push(investigationResult);
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  investigationResultRequest: InvestigationResultRequest = {
    cedula: 0
  }




  ngOnInit(): void {
    this.investigationResultService.obtainInvestigationResult$Response().subscribe(res => {
      //let investigationResult: InvestigationResultDomain = JSON.parse(res.body);
      console.log('INVESTIGATION_RESULT: ' + JSON.stringify(res.body));
      this.investigationResultList = res.body;
    })
    this.investigationResultSseService.getServerSentEvent().subscribe(res => {
      console.log("RES: " + JSON.stringify(res));
      let investigationResult: InvestigationResultDomain = JSON.parse(res);
      console.log('INVESTIGATION_RESULT: ' + JSON.stringify(investigationResult));
      this.investigationResultList.push(investigationResult);
    })

  }

  getItemColor(investigation: InvestigationResultDomain): boolean {
    let retornarValor = false;
    if (investigation.isApprove === true) {
      retornarValor = true;
    } else {
      retornarValor = false;
    }
    console.log("RETORNAR VALOR: " + retornarValor);
    return retornarValor;
  }

}
