import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/app/user.service';

import { User } from 'src/app/user.interface';
import { USERS } from 'src/app/users.db';

import { checkPasswords } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  passwordConfirmationStyle = '';

  signupForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: [''],
      cities: [[]],
    },
    { validators: checkPasswords }
  );

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.userService.signup(this.signupFormValue);
  }

  private get signupFormValue(): User {
    return {
      id: USERS.length + 1,
      name: this.signupForm.get('name').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
      cities: this.signupForm.get('cities').value,
    };
  }

  get formControls() {
    return this.signupForm.controls;
  }
}
