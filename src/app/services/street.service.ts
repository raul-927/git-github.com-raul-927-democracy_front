import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { ApiConfiguration } from '../config/api-configuration';
import { HttpClient, HttpContext } from '@angular/common/http';
import { StrictHttpResponse } from '../utils/strict-http-response';
import { map, Observable } from 'rxjs';
import { ObtainStreetResult$Params, obtainStreetResultData } from '../fn/streetResult/obtain-street-result';

@Injectable({
  providedIn: 'root'
})
export class StreetService extends BaseService{

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  obtainStreetResult$Response(params?: ObtainStreetResult$Params, context?: HttpContext):Observable<StrictHttpResponse<any>>{
      return obtainStreetResultData(this.http, this.rootUrl, params, context);

    }
}
