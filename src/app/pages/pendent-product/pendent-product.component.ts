import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from 'src/models/product.dto';
import { IngredientsDTO } from 'src/models/ingredients.dto';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-pendent-product',
  templateUrl: './pendent-product.component.html',
  styleUrls: ['./pendent-product.component.scss']
})
export class PendentProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  selecteFile: File = null;
  id: any;
  product: ProductDTO;
  public newProduct: ProductDTO = {};
  public emptIngredients: [IngredientsDTO]=[{}];
  visible : Boolean = false;
  arrayIngredients : [IngredientsDTO];
  ing: IngredientsDTO;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fillItens();
    
    this.arrayIngredients = [{name : "", id :''}];
    
  }

  fillraay(){
    for (var i = 0; i < 14; i++) {
      this.ing = {"name":"", "id":""};
      this.arrayIngredients.push(this.ing);
   }
  }
  onFIleSelected(event) {

    this.selecteFile = <File>event.target.files[0];
  }
  async visibleIngredient()
  {
    await  this.fillraay();
    console.log(this.arrayIngredients);
    this.visible = true;
  }
 async fillItens() {
   if(this.id != 0){
   await this.productService.findById(this.id)
      .subscribe(response  =>  {
        this.product = response;
      
      },
        error => {
        });
      }
        
  }
 async save() {

    if (this.id != 0) {
      for (var i = 0; i < this.arrayIngredients.length; i++) {
       if(this.arrayIngredients[i].name != "")
          this.product.ingredients.push(this.arrayIngredients[i]);
     }
      this.arrayIngredients = null;
      if(this.selecteFile != undefined)
       await this.productService.insertImage(this.selecteFile, this.id);
      
      await this.productService.editProduct(this.id, this.product);
    }
    else {
      
      for (var i = 0; i < this.arrayIngredients.length; i++) {
        if(this.arrayIngredients[i].name != "")
           if(this.newProduct.ingredients == undefined)
              this.newProduct.ingredients = this.emptIngredients;
           this.newProduct.ingredients.push(this.arrayIngredients[i]);
      }
       this.arrayIngredients = null;
      await this.productService.newProduct(this.newProduct);
    }
    this.router.navigate(['dashboard'])
  }
}
