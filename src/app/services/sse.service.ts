import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerSentEvent(url: string, token: string): Observable<any> {
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
}
