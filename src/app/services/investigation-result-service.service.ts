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
import {getInvestigationResult,obtainInvestigationResultData,ObtainInvestigationResult$Params} from '../fn/investigationResult/obtain-investigation-result';
import {selectCount, SelectCount$Params} from '../fn/products/select-count';
import { ProductResponse } from '../response/product-response';
import { InvestigationResultResponse } from '../response/investigation-result-response';

@Injectable({
  providedIn: 'root'
})
export class InvestigationResultService extends BaseService{

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  getInvestigationResult$Response(params?: ObtainInvestigationResult$Params, context?: HttpContext):Observable<StrictHttpResponse<any>>{
    return getInvestigationResult(this.http, this.rootUrl, params, context);
  }

  obtainInvestigationResult$Response(params?: ObtainInvestigationResult$Params, context?: HttpContext):Observable<StrictHttpResponse<any>>{
    return obtainInvestigationResultData(this.http, this.rootUrl, params, context);

  }
}
