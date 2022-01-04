import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, private localStorage: LocalStorageService, private router: Router) {
    this.loginForm = this.FormBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
   }


  ngOnInit() {
  }

  
  private isAuthenticated(username: string, password: string) {
    const user = this.localStorage.getUser(username) as IUser;
    console.log(user)
    return user && user.password === password ? true : false;
  }

  onLogin() {
    const {email, password} = this.loginForm.value;
    if (email && password && this.isAuthenticated(email, password)) {
      this.router.navigate(['home'])
    }
  }

}
