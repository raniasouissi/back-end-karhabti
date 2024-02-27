import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AuthGuard } from '../auth-gard/auth-guard.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { DashboardAdminComponent } from '../dashboard-admin/dashboard-admin.component';
import { DashboardVendeurComponent } from '../dashboard-vendeur/dashboard-vendeur.component';
import { CarManagementComponent } from '../car-management/car-management.component';


export const routes: Routes = [
    { path: 'header',  component: HeaderComponent },
    { path: 'home',  component: HomeComponent,  },
    { path: 'login',  component: LoginComponent },
    { path: 'register',  component: RegisterComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'contact',  component: ContactComponent },
    { path: 'forgot-password',  component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent ,canActivate: [AuthGuard]},
    { path: 'dashboard-admin', component: DashboardAdminComponent ,canActivate: [AuthGuard]},
    { path: 'dashboard-vendeur', component: DashboardVendeurComponent ,canActivate: [AuthGuard]},
    { path: 'car-management', component: CarManagementComponent },
   
    
    
    




    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
  //canActivate: [AuthGuard]