
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { SseService } from 'src/app/services/sse.service';
import { StreetDomain } from 'src/app/response/street-domain';
import { StreetService } from 'src/app/services/street.service';
import { ObtainStreetResult$Params, obtainStreetResultData } from 'src/app/fn/streetResult/obtain-street-result';
import { StreetResultRequest } from 'src/app/request/street-result-request';
@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit, OnChanges {

  streetList: StreetDomain[] = [];
  street: StreetDomain = new StreetDomain();
  bodyStreet: ObtainStreetResult$Params = {

  }
  errorMessage: string ="";
  constructor(private sseService: SseService, private streetService: StreetService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

    /*this.sseService.getServerSentEvent().subscribe(newData=>{
      if(newData.includes('[')){
        newData = newData.replace('[', '')
      }
      if(newData.includes(',{')){
        newData = newData.replace(',{', '{')
      }

      if(newData.includes('}')){
        newData = newData.replace('}','},')
      }

      if(newData.includes('},]')){
        newData = newData.replace('},]','}')
      }


      console.log("valor == "+newData);
      //this.street = JSON.parse(newData)
      this.streetList = JSON.parse(newData);

    });*/



    this.streetService.obtainStreetResult$Response(this.bodyStreet).subscribe({
      next: (data) => {
        this.streetList = data.body;
        console.log("RESULT JSON: " + JSON.stringify(data.body))
      },
      error: (err: string) => {
        this.errorMessage = err;
        console.log("Se lanzó el error: " + err);
         console.log("INCLUDES: "+this.errorMessage.includes('error'))
      }
    });
     this.sseService.getServerSentEvent().subscribe(res => {
          console.log("RESULT STREAM: " + JSON.stringify(res))
          let street: StreetDomain = JSON.parse(res);
          this.streetList.push(street);
        })



  }

}
