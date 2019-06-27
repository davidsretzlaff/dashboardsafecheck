import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PendentProductComponent } from './pages/pendent-product/pendent-product.component';
import { PendentBrandComponent } from './pages/pendent-brand/pendent-brand.component';

import { AuthGuard } from './auth.guard';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetPasswordSuccessComponent } from './pages/reset-password-success/reset-password-success.component';
const routes: Routes =[
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate :[AuthGuard]
  },

  { path: 'pendent-product/:id',          component: PendentProductComponent ,  canActivate : [AuthGuard]},
  { path: 'pendent-brand/:id',          component: PendentBrandComponent ,  canActivate : [AuthGuard]},
  { path: 'reset-password/:token',          component: ResetPasswordComponent },
  { path: 'reset-password-success',          component: ResetPasswordSuccessComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
        canActivate : [AuthGuard]
      }
      
    ]
  },
   {
    path: '',
    component: AuthLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule',
        
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
