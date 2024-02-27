import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PromotionsComponent } from './promotions/promotions.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardVendeurComponent } from './dashboard-vendeur/dashboard-vendeur.component';
import { CarManagementComponent } from './car-management/car-management.component';
import { CommonModule } from '@angular/common';




@NgModule({
 

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PromotionsComponent,
    CarsComponent,
    AboutComponent,
    ContactComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardAdminComponent,
    DashboardVendeurComponent,
    CarManagementComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    
 
    BsDropdownModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add the icons to the library
    library.add(fas);
  }
}
