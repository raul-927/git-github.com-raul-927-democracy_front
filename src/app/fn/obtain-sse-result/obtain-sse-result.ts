import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../utils/strict-http-response';
import { RequestBuilder } from '../../utils/request-builder';
import { StreetResultRequest } from 'src/app/request/street-result-request';
import {StreetResultResponse} from 'src/app/response/street-result-response';
export interface ObtainStreetResult$Params{
  body?: StreetResultRequest
}

export function getStreetResult (http: HttpClient, rootUrl: string, params?: ObtainStreetResult$Params, context?: HttpContext): Observable<StrictHttpResponse<StreetResultResponse>> {
  const rb = new RequestBuilder(rootUrl, obtainStreetResultData.PATH, 'POST');
  if (params) {
    rb.body(params.body, 'application/json');
  }else{
    rb.body({}, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<StreetResultResponse>;
    })
  );
}

export function obtainStreetResultData (http: HttpClient, rootUrl: string, params?: ObtainStreetResult$Params, context?: HttpContext): Observable<StrictHttpResponse<StreetResultResponse>> {
  const rb = new RequestBuilder(rootUrl, obtainStreetResultData.PATH, 'POST');
  if (params) {
    rb.body(params.body, 'application/json');
  }else{
    rb.body({}, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<StreetResultResponse>;
    })
  );
}

obtainStreetResultData.PATH = '/humanresources/street/select';
