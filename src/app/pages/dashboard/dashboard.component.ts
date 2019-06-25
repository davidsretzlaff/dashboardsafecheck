import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { ProductDTO } from 'src/models/product.dto';
import { BrandDTO } from 'src/models/brand.dto';
import { BrandService } from 'src/services/domain/brand.service';
import { ProductService } from 'src/services/domain/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  products: ProductDTO[];
  usr : any;
  brands: BrandDTO[];
  search: any;
  constructor(
    public productService: ProductService,
    public brandService: BrandService
  ) { }

  ngOnInit() {
    this.searchProductPendent();
    this.searchBrandPendent();

  }



  searchProductPendent() {
    this.productService.productsPendent()
      .subscribe(response => {
        this.products = response;
        return true;
      },
        error => {
          this.products = null;
        });
  }
  async deleteProduct(id){
    await this.productService.deleteProduct(id);
    this.products = null;
    this.searchProductPendent();
  }

  async deleteBrand(id){
    await this.brandService.deleteBRand(id);
    this.brands = null;
    this.searchBrandPendent();
  }

  searchBrandPendent() {
    this.brandService.brandPendent()
      .subscribe(response => {
        this.brands = response;
        return true;
      },
        error => {
          this.brands = null;
          console.log(error.error.error)
        });
  }
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
