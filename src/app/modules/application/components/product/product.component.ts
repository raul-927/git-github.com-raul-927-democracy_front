import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductRequest } from 'src/app/request/product-request';
import { CreateProduct$Params } from 'src/app/fn/products/create-product';
import { ProductTypeEnum } from 'src/app/enums/product-type';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  productRequest: ProductRequest ={
  productId: undefined,
  productCode:undefined,
  productName: '',
  productLastName: '',
  productType: ProductTypeEnum.RAW_MATERIAL
  };

  productRequest2: ProductRequest ={

  };

  numberResult: number = 0;


constructor(private productService: ProductService){

}

  ngOnInit(): void {

    this.productService.selectCount().subscribe(result =>{
      this.numberResult = result.body;
      this.productRequest.productName = "PRUEBA "+(this.numberResult + 1);
      this.productRequest.productLastName = "PR "+(this.numberResult + 1);
      this.productRequest.productCode= 'PRD'+(this.numberResult + 1);
      if(this.numberResult%2 ==0){
        this.productRequest.productType = ProductTypeEnum.RAW_MATERIAL;
      }else{
        this.productRequest.productType = ProductTypeEnum.FINAL_PRODUCT;
      }
      this.productService.createProduct({body: this.productRequest}).subscribe(res =>{

        console.log("RESULT: "+JSON.stringify(res));
        this.productService.findProduct({body: this.productRequest}).subscribe(res =>{
          console.log("SELECT-RESULT: "+JSON.stringify(res));
        });
      });
    })
  }
}
