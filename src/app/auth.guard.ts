import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/services/domain/storage.service';

@Injectable({
  providedIn: 'root'
  
})

export class AuthGuard implements  CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean>{
    return new Promise( resolve =>{
      var usr = this.storage.getLocalUser();
      if(usr == null){
       this.router.navigate(['login'])
      } 
      resolve(usr ? true:false)
     });
  }
  
  constructor(
  private storage: StorageService,
  private router: Router)
{ }

}