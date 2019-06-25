import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { ProductDTO } from 'src/models/product.dto';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { Comments } from 'src/app/interfaces/comments';
import { Like } from 'src/app/interfaces/like';



@Injectable()
export class ProductService {
  constructor(public http: HttpClient) {

  }
  findAll(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product`);
  }
  findByName(name): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/name/` + name);
  }
  findById(id): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${API_CONFIG.baseUrl}/product/` + id);
  }

  productsPendent(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/pendent/false`);
  }

  newProduct(product: ProductDTO) {
    return new Promise((resolve, reject) => {
      this.http.post(`${API_CONFIG.baseUrl}/product`, product)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          console.log("ERRO na requisiçao", error.error);
          reject(error);
        });
    });
}

  newComment(comment: Comments) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_CONFIG.baseUrl}/product/comments/` + comment.productId, comment)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          console.log("ERRO na requisiçao", error.error);
          reject(error);
        });
    });
  }
  deleteComment(comment: Comments) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_CONFIG.baseUrl}/product/deletecomments/` + comment.productId, comment)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          console.log("ERRO na requisiçao", error.error);
          reject(error);
        });
    });
  }

  like(like: Like) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_CONFIG.baseUrl}/product/like/` + like.brandId, like)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          console.log("ERRO na requisiçao", error.error);
          reject(error);
        });
    });
  }

  dislike(like: Like) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_CONFIG.baseUrl}/product/dislike/` + like.brandId, like)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          console.log("ERRO na requisiçao", error.error);
          reject(error);
        });
    });
  }

  deleteProduct(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${API_CONFIG.baseUrl}/product/` + id)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          reject(error);
        });
    });
  }
  editProduct(id, product: ProductDTO) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_CONFIG.baseUrl}/product/` + id, product)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          reject(error);
        });
    });
  }


  insertImage(fileInput, id) {
    const formData = new FormData();
    formData.append('productImage', fileInput);
    this.http.put(`${API_CONFIG.baseUrl}/product/` + id, formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })

  }
}