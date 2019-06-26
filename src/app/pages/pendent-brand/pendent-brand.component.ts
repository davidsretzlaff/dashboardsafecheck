import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandService } from 'src/services/domain/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandDTO } from 'src/models/brand.dto';

@Component({
  selector: 'app-pendent-brand',
  templateUrl: './pendent-brand.component.html',
  styleUrls: ['./pendent-brand.component.scss']
})
export class PendentBrandComponent implements OnInit {
  
  constructor(http: HttpClient,  
    public brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router) { }
  selecteFile :File = null;
  id: any;
  brand: BrandDTO;
  public newBrand: BrandDTO = {};
 
  onFIleSelected(event){
    
    this.selecteFile = <File>event.target.files[0];
  }
  async save(){

    if(this.id != 0){
      if(this.selecteFile != undefined)
        await this.brandService.insertImage( this.selecteFile,this.id);

      await this.brandService.editBrand(this.id,this.brand);
    }
    else{
     await this.brandService.newBrand(this.newBrand);
    }
    this.router.navigate(['dashboard'])
  }
  
  fillItens() {
    if(this.id != 0){
      this.brandService.findById(this.id)
        .subscribe(response => {
          this.brand = response;
        },
          error => {
          });
        }
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fillItens();
  }

}
