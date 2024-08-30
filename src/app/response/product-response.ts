/* tslint:disable */

import { ProductTypeEnum } from "../enums/product-type";

/* eslint-disable */
export interface ProductResponse {
  productId?: string,
  productCode?: string,
  productName?: string;
  productLastName?: string
  productType?: ProductTypeEnum

}
