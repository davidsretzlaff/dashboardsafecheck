import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSearchesDTO } from 'src/models/userSearches.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';


@Injectable()
export class UserSearchesService {
  constructor(public http: HttpClient) {

  }

  findAll(): Observable<UserSearchesDTO[]> {
    return this.http.get<UserSearchesDTO[]>(`${API_CONFIG.baseUrl}/search`);
  }

  deleteUserSearches(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${API_CONFIG.baseUrl}/search/` + id)
        .subscribe((result: any) => {
          resolve(result);
        }, (error) => {
          reject(error);
        });
    });
  }
}