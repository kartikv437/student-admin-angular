import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../interfaces/login-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  role: string = 'admin';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.authService.login(this.email, this.password, this.role).subscribe({
      next: (res: LoginResponse) => {
        if (res.result.role === 'admin') {
          localStorage.setItem('token', res.result.accessToken);
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Login failed';
      },
    });
  }
}
