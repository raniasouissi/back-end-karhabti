import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword: boolean = false;
  credentials = { email: '', password: '' };
  loginError = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        this.loginError = false;
        localStorage.setItem('token', response.token);
        
        // Rediriger en fonction du rôle
        if (response.role === 'client') {
          this.router.navigate(['/home']);
        } else if (response.role === 'admin') {
          this.router.navigate(['/dashboard-admin']);
        } else if (response.role === 'vendeur') {
          this.router.navigate(['/dashboard-vendeur']);
        }
      },
      error => {
        this.loginError = true;
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }

 
}
