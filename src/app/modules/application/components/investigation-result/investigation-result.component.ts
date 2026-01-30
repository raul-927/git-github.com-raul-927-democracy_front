import { Component, OnInit, signal, computed } from '@angular/core';
import { InvestigationResultService } from 'src/app/services/investigation-result-service.service';
import { StreetService } from 'src/app/services/street.service';
import { InvestigationResultRequest } from 'src/app/request/investigation-result-request';
import { ObtainInvestigationResult$Params} from 'src/app/fn/investigationResult/obtain-investigation-result';
import { ProductTypeEnum } from 'src/app/enums/product-type';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-investigation-result',
  templateUrl: './investigation-result.component.html',
  styleUrls: ['./investigation-result.component.css']
})
export class InvestigationResultComponent implements OnInit{

  count = signal(0);
  doubleCount = computed(()=> this.count()*2);


  constructor(private investigationResulService: InvestigationResultService, private streetService: StreetService){

  }

  investigationResultRequest: InvestigationResultRequest = {
    cedula: 19455549
  }


  ngOnInit(): void {
    this.investigationResulService.getInvestigationResult$Response({body: this.investigationResultRequest}).subscribe(result=>{
      console.log('RESULT: '+JSON.stringify(result.body));
    })

    this.streetService.obtainStreetResult$Response({body: {}}).subscribe(result =>{
      console.log('STREET: '+JSON.stringify(result.body));
    });
    this.investigationResulService.obtainInvestigationResult$Response({body: this.investigationResultRequest}).subscribe(res =>{
          console.log('RES: '+JSON.stringify(res.body));
        })
  }

}
