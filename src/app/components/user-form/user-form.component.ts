// == USER FORM COMPONENT ==
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  userId!: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['User', Validators.required],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.userId = +idParam;
      const user = this.userService.getUser(this.userId);
      if (user) {
        this.form.patchValue(user);
        this.isEdit = true;
      }
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const user: User = { ...this.form.value, id: this.userId || Date.now() };
    this.isEdit
      ? this.userService.updateUser(user)
      : this.userService.addUser(user);
    this.router.navigate(['/']);
  }
}
