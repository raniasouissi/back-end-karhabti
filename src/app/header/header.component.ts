import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavMenuOpen = false;
  isAuthenticated: boolean = false;
  token!: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
 

 

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  

  toggleNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  onLogoutClick() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Erreur lors de la déconnexion:', error);
      }
    );
  }
  
  searchQuery: string = ''; // Ajoutez cette ligne pour déclarer la propriété searchQuery

  search(query: string): void {
    // Ajoutez ici la logique de recherche
    console.log('Recherche pour :', query);
  }

 }