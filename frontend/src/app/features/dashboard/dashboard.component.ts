import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, FormsModule]
})
export class DashboardComponent implements OnInit {
  currentUser: any = null;
  records: any[] = [];
  isLoading = false;
  
  // New user form state object
  newUser = { id: '', name: '', role: 'General User', accessLevel: 'Read Only Access' };

  constructor(private userService: UserService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getSession();
    this.loadTableData();
  }

  loadTableData() {
    this.isLoading = true;
    // Calling the API with a mandatory 2500ms delay parameter to showcase asynchronous execution structures
    this.userService.getUsersWithDelay(2500).subscribe({
      next: (data) => {
        this.records = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => this.isLoading = false,
    });
  }

  submitNewUser() {
    this.userService.addUser(this.currentUser.role, this.newUser).subscribe({
      next: () => {
        alert('Data written directly to Local XML server catalog successfully.');
        this.loadTableData(); // Hot reload table to fetch the updated file structure
        this.newUser = { id: '', name: '', role: 'General User', accessLevel: 'Read Only Access' };
      },
      error: (err) => alert(err.error.message)
    });
  }

  logout() {
    this.userService.clearSession();
    this.router.navigate(['/login']);
  }
}