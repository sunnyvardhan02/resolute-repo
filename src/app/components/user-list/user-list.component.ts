// == USER LIST COMPONENT ==
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  pageSize = 10;
  currentPage = 0;
  sortField: 'name' | 'email' = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
    this.applyFilter();
  }

  applyFilter() {
    this.filteredUsers = this.users
      .filter(
        (u) =>
          u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const fieldA = a[this.sortField].toLowerCase();
        const fieldB = b[this.sortField].toLowerCase();
        return this.sortDirection === 'asc'
          ? fieldA.localeCompare(fieldB)
          : fieldB.localeCompare(fieldA);
      });
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id);
      this.loadUsers();
    }
  }

  changeSort(field: 'name' | 'email') {
    if (this.sortField === field)
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    else this.sortField = field;
    this.applyFilter();
  }

  paginate(users: User[]): User[] {
    const start = this.currentPage * this.pageSize;
    return users.slice(start, start + this.pageSize);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.filteredUsers.length)
      this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 0) this.currentPage--;
  }

  editUser(id: number) {
    this.router.navigate(['/edit', id]);
  }

  addUser() {
    this.router.navigate(['/add']);
  }
}
