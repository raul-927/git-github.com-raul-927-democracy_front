
import { Component, OnInit, SimpleChanges } from '@angular/core';

import { SseService } from 'src/app/services/sse.service';
import { StreetDomain } from 'src/app/response/street-domain';
@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  streetList: StreetDomain[] = [];
  constructor(private sseService: SseService) {

  }

  ngOnInit(): void {
    this.sseService.getServerSentEvent().subscribe(newData=>{
      var street: StreetDomain = JSON.parse(newData);
      this.streetList.push(street);
    });
  }

}
