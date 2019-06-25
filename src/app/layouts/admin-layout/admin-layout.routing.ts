import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
//import { AuthGuard } from './auth.guard';
import { AuthGuard } from 'src/app/auth.guard';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate :[AuthGuard] },

];
