import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngIf and *ngFor
import { FormsModule } from '@angular/forms';   // Needed for [(ngModel)]

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Make sure both are added here!
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  // Your existing dashboard component properties and backend logic...
  isLoading = false;
  currentUser = { name: 'Hari Sharan', role: 'Admin' };
  records: any[] = [];
  newUser = { id: '', name: '', role: 'General User', accessLevel: '' };

  ngOnInit() {}
  submitNewUser() {}
  logout() {}
}