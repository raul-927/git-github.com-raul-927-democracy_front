import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private oauthService: OAuthService, private zone: NgZone, private http: HttpClient) {}

  public getServerSentEvent(): Observable<any> {
    const url = 'http://localhost:8082/humanresources/street/select';
    var token = this.oauthService.getAccessToken();
    return new Observable(observer => {
      const eventSource = new EventSource(url); // O usar fetch para headers
      // Nota: EventSource nativo no permite headers.
      // Solución real con fetch para incluir token:
      this.fetchWithToken(url, token, observer);
    });
  }

  private async fetchWithToken(url: string, token: string, observer: any) {
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
      this.zone.run(() => observer.next(chunk));
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
        // Analizar el texto recibido (debe ser formato "data: ... \n\n")
        return this.parseSseEvent(event);
      })
    );
  }

  private parseSseEvent(text: any): any {
    // Lógica para extraer el JSON del evento SSE
    // Se recomienda una librería o parsing manual sólido
    return text;
  }
}
