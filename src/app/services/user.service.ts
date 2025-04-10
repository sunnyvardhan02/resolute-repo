// == USER SERVICE ==
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersKey = 'users';

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  getUser(id: number): User | undefined {
    return this.getUsers().find((user) => user.id === id);
  }

  addUser(user: User) {
    const users = this.getUsers();
    user.id = Date.now();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  updateUser(user: User) {
    const users = this.getUsers().map((u) => (u.id === user.id ? user : u));
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  deleteUser(id: number) {
    const users = this.getUsers().filter((u) => u.id !== id);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}
