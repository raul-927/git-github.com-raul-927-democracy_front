/* tslint:disable */

import { ProductTypeEnum } from "../enums/product-type";

/* eslint-disable */
export interface ProductRequest {
  productId?: string,
  productCode?: string,
  productName?: string;
  productLastName?: string
  productType?: ProductTypeEnum
}
