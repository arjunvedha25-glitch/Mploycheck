import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  credentials = { 
    userId: '', 
    password: '', 
    role: 'General User' 
  };
  errorMsg = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    this.userService.login(this.credentials).subscribe({
      next: (res) => {
        this.userService.saveSession(res.user);
        this.router.navigate(['/dashboard']);
      },
       error: (err) => {
      console.error('Backend Login Error Source:', err);

       this.errorMsg = err.error.message || 'Login Execution Error';
      }
    });
  }
}