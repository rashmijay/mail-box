import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  private isAuthenticated(username: string, password: string) {
    const user = this.userService.getUserByUsername(username) as IUser;
    return user && user.password === password ? true : false;
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    // if (!(email && password)) alert('Either username or password is empty')
    if (email && password && this.isAuthenticated(email, password)) {
      this.loginForm.reset();
      localStorage.setItem('currentUser', this.userService.getUserByUsername(email).id)
      this.router.navigate(['home'])
    }
    // else {
    //   this.loginForm.reset();
    //   alert('Invalid 
    // ');
    // }
  }

  onSeed() {
    localStorage.setItem('users', JSON.stringify([
      {
        "id": "1",
        "username": "test",
        "password": "test"
      },
      {
        "id": "2",
        "username": "test1",
        "password": "test1"
      },
      {
        "id": "3",
        "username": "test2",
        "password": "test2"
      },
    ]))
  }
}
