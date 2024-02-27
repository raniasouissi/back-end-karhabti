import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  registerData = { name: '', email: '', password: '' };
  registrationError = false;
  errorMessage = '';
  

  constructor(private authService: AuthService,
    private router: Router) {}

  onRegister() {
    this.authService.signUpClient(this.registerData).subscribe(
      (response) => {
        this.registrationError = false;
        localStorage.setItem('token', response.token);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.registrationError = true;
        this.errorMessage = 'Registration failed. Please check your data.';
      }
    );
  }
}
