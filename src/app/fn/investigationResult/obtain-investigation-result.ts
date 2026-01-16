import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../utils/strict-http-response';
import { RequestBuilder } from '../../utils/request-builder';
import { InvestigationResultRequest } from 'src/app/request/investigation-result-request';
import {InvestigationResultResponse} from 'src/app/response/investigation-result-response';
export interface ObtainInvestigationResult$Params{
  body?: InvestigationResultRequest
}

export function getInvestigationResult (http: HttpClient, rootUrl: string, params?: ObtainInvestigationResult$Params, context?: HttpContext): Observable<StrictHttpResponse<InvestigationResultResponse>> {
  const rb = new RequestBuilder(rootUrl, getInvestigationResult.PATH, 'POST');
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
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<InvestigationResultResponse>;
    })
  );
}

export function obtainInvestigationResultData (http: HttpClient, rootUrl: string, params?: ObtainInvestigationResult$Params, context?: HttpContext): Observable<StrictHttpResponse<InvestigationResultResponse>> {
  const rb = new RequestBuilder(rootUrl, obtainInvestigationResultData.PATH, 'POST');
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
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<InvestigationResultResponse>;
    })
  );
}

getInvestigationResult.PATH = '/democracyorchestrator/investigation/select';
obtainInvestigationResultData.PATH = '/electoralcourt/investigationresult/select';
