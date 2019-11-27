import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CORRECT_FORM_VALIDATION,
  LOCAL_STORAGE_USER_EMAIL,
  BOOK_ROUTE,
} from 'src/app/constants/constants';

@Component({
  selector: 'bok-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userEmail: string;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.emailFormControl.markAsTouched();

    if (this.emailFormControl.status === CORRECT_FORM_VALIDATION) {
      localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, this.userEmail);
      this.router.navigate([BOOK_ROUTE]);
    }
  }
}
