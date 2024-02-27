import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dashboard-vendeur',
  templateUrl: './dashboard-vendeur.component.html',
  styleUrls: ['./dashboard-vendeur.component.css'],
})
export class DashboardVendeurComponent {
  isCarManagementVisible = false;
  isUserManagementVisible = false;
  isPromotionManagementVisible = false;
  pageTitle: string = '';
  constructor(private router: Router) {}

  showCarManagement() {
    this.pageTitle = 'Cars';
    this.isCarManagementVisible = true;
    this.isUserManagementVisible = false;
    this.isPromotionManagementVisible = false;
  }

  showUserManagement() {
    this.isCarManagementVisible = false;
    this.isUserManagementVisible = true;
    this.isPromotionManagementVisible = false;
  }

  showPromotionManagement() {
    this.isCarManagementVisible = false;
    this.isUserManagementVisible = false;
    this.isPromotionManagementVisible = true;
  }
  navigateTo(home: string) {
   
    this.router.navigate([home]); // Naviguer vers la page correspondante
  }
}
