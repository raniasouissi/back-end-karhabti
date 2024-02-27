import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email!: string;
  emailSent = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  sendPasswordResetEmail() {
    this.errorMessage = '';
    this.authService.sendPasswordResetEmail(this.email).subscribe(
      (result) => {
        if (result) {
          this.emailSent = true;
        } else {
          this.errorMessage = 'Email address not found.';
        }
      },
      (error) => {
        console.error('Error sending reset email:', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );
  }
}
