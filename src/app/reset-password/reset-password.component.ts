import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  newPassword: string = '';
  passwordReset = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    this.errorMessage = '';
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      (result) => {
        if (result) {
          this.passwordReset = true;
        } else {
          this.errorMessage = 'Invalid token or token expired.';
        }
      },
      (error) => {
        console.error('Error resetting password:', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );
  }
}
