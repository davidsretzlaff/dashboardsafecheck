import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { StorageService } from '../services/domain/storage.service';
import { AuthService } from 'src/services/domain/auth.service';
import { BrandService } from 'src/services/domain/brand.service';
import { ProductService } from 'src/services/domain/product.service';
import { PendentProductComponent } from './pages/pendent-product/pendent-product.component';
import { PendentBrandComponent } from './pages/pendent-brand/pendent-brand.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetPasswordSuccessComponent } from './pages/reset-password-success/reset-password-success.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PendentProductComponent,
    PendentBrandComponent,
    ResetPasswordComponent,
    ResetPasswordSuccessComponent
  ],
  providers: [StorageService,AuthService,BrandService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
