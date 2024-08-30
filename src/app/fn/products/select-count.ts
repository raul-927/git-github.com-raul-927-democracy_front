/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../utils/strict-http-response';
import { RequestBuilder } from '../../utils/request-builder';

import { PageResponseProductResponse } from '../../response/page-response-product-response';
import { ProductRequest } from 'src/app/request/product-request';

export interface SelectCount$Params {
  body?: ProductRequest;
}

export function selectCount(http: HttpClient, rootUrl: string, params?: SelectCount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, selectCount.PATH, 'GET');
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
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<number>;
    })
  );
}

selectCount.PATH = '/products/select-count';
