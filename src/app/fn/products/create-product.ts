/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../utils/strict-http-response';
import { RequestBuilder } from '../../utils/request-builder';

import { PageResponseProductResponse } from '../../response/page-response-product-response';
import { ProductRequest } from 'src/app/request/product-request';
import { ProductResponse } from 'src/app/response/product-response';

export interface CreateProduct$Params {
  body?: ProductRequest;
}

export function createProduct(http: HttpClient, rootUrl: string, params?: CreateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponse>> {
  const rb = new RequestBuilder(rootUrl, createProduct.PATH, 'POST');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({body: (r as HttpResponse<any>).body}) as StrictHttpResponse<ProductResponse>;
    })
  );
}

createProduct.PATH = '/products/save';
