import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-web-principal',
  templateUrl: './web-principal.component.html',
  styleUrls: ['./web-principal.component.css']
})
export class WebPrincipalComponent implements OnInit{

  isLogging = true;



  constructor(private messageService:MessageService){}
  ngOnInit(): void {

      this.messageService.getMessage().subscribe(res =>{
      this.isLogging= false;
    },
    error => console.log('EREROR: '+error)
    );
  }

}
