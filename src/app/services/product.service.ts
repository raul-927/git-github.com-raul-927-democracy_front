import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { ApiConfiguration } from '../config/api-configuration';
import { HttpClient, HttpContext } from '@angular/common/http';
import { findAllProducts, FindAllProducts$Params } from '../fn/products/find-all-products';
import { PageResponseProductResponse } from '../response/page-response-product-response';
import { StrictHttpResponse } from '../utils/strict-http-response';
import { map, Observable } from 'rxjs';
import { ProductRequest } from '../request/product-request';
import { createProduct, CreateProduct$Params } from '../fn/products/create-product';
import {selectProduct, SelectProduct$Params} from '../fn/products/select-product';
import {selectCount, SelectCount$Params} from '../fn/products/select-count';
import { ProductResponse } from '../response/product-response';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }


  findAllProducts$Response(params?: FindAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseProductResponse>> {
    return findAllProducts(this.http, this.rootUrl, params, context);
  }

  selectProducts$Response(params?: SelectProduct$Params, context?: HttpContext):Observable<StrictHttpResponse<ProductResponse>>{
    return selectProduct(this.http, this.rootUrl, params, context);

  }

  selectCount$Response(params?:SelectCount$Params, context?:HttpContext): Observable<StrictHttpResponse<number>>{
    return selectCount(this.http, this.rootUrl, params,context);
  }


  findAllProducts(params?: FindAllProducts$Params, context?: HttpContext): Observable<PageResponseProductResponse> {
    return this.findAllProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseProductResponse>): PageResponseProductResponse => r.body)
    );
  }

  findProduct(params?: SelectProduct$Params, context?: HttpContext):Observable<ProductResponse> {
    return this.selectProducts$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductRequest>): ProductRequest => r.body)
    );
  }

  createProduct(params?:CreateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponse>> {
    console.log("PARAMS: "+JSON.stringify(params));
    return createProduct(this.http, this.rootUrl, params, context);
  }

  selectCount(params?: SelectCount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>>{
    return selectCount(this.http, this.rootUrl, params, context);
  }
}
