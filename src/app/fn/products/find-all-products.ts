/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../utils/strict-http-response';
import { RequestBuilder } from '../../utils/request-builder';

import { PageResponseProductResponse } from '../../response/page-response-product-response';

export interface FindAllProducts$Params {
  page?: number;
  size?: number;
}

export function findAllProducts(http: HttpClient, rootUrl: string, params?: FindAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseProductResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllProducts.PATH, 'GET');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseProductResponse>;
    })
  );
}

findAllProducts.PATH = '/products';
