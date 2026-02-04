import { Injectable, NgZone, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { BaseService } from './base-service';
import { ApiConfiguration } from '../config/api-configuration';
import { StreetResultResponse } from '../response/street-result-response';
@Injectable({
  providedIn: 'root'
})
export class SseService extends BaseService{

public tableData: WritableSignal<StreetResultResponse[]> = signal([]);

  constructor(config: ApiConfiguration, private oauthService: OAuthService, private zone: NgZone, http: HttpClient) {
    super(config,http)
  }

  public getServerSentEvent(): Observable<any> {
    return new Observable(observer => {
      this.fetchWithToken(observer);
    });
  }

  private async fetchWithToken(observer: any) {
    const path = '/humanresources/street/select';
    const url = this.config.rootUrl + path;
    var token = this.oauthService.getAccessToken();
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'text/event-stream'
      }
    });

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      // Procesar 'chunk' (parar por \n\n, parsear JSON, etc.)
      const valor = chunk.replace("data:","");
      //this.zone.run(() => observer.next(valor));
      this.zone.run(()=>observer.next(valor));
    }
    observer.complete();
  }

  // POST para iniciar la conexión SSE
  streamData(url: string, body: any): Observable<any> {
    const req = new HttpRequest('POST', url, body, {
      reportProgress: true,
      responseType: 'text', // Importante para recibir el stream
    });

    return this.http.request(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.DownloadProgress),
      map((event) => {
        return event;
      })
    );
  }
}
