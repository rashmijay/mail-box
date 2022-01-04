import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  composeMailForm: FormGroup;

  constructor(private router: Router, private FormBuilder: FormBuilder) { 
    this.composeMailForm = this.FormBuilder.group({
      'toAddress': ['', Validators.required],
      'ccAddress': [''],
      'subject': [''],
      'bodyMessage': ['']
    })
  }

  ngOnInit() {
  }
  sideBarSelection: string = '1'
  isExpanded: boolean = false;

  // onCompose() {
  //   this.router.navigate(['compose-mail']);
  // }

  setSideBarSelectedtion(selection: string) {
    this.sideBarSelection = selection;
  }
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  signOut() {
    localStorage.removeItem('currentUser')
    this.router.navigate(['login'])
  }

  onSend() {
    
  }

}
