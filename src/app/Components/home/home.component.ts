import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmail } from 'src/app/Interfaces/email';
import { EmailService } from 'src/app/Services/email/email.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  composeMailForm: FormGroup;
  emails: Array<any> = [];
  sideBarSelection: number = 1;
  isExpanded: boolean = false;

  constructor(private router: Router, private FormBuilder: FormBuilder, private emailService: EmailService, private userService: UserService) {
    this.composeMailForm = this.FormBuilder.group({
      'toAddress': ['', Validators.required],
      'ccAddress': [''],
      'subject': [''],
      'body': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getEmail()
  }

  setSideBarSelectedtion(selection: number) {
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
    const { toAddress = '', ccAddress = '', subject = '', body = '' } = this.composeMailForm.value;
    const to = (toAddress || '').split(',');
    const cc = (ccAddress || '').split(',');
    if (to.length > 0 && body.trim()) {
      this.emailService.sendEmail({ to: to, cc: cc, subject: subject, body: body } as IEmail);
      this.getEmail();
    }
  }

  getEmail() {
    this.emails = this.emailService.getEmailsSentToMe();
    this.emails = this.emails.map((mail: IEmail) => ({ ...mail, from: this.userService.getUserById(mail.from).username }));
  }

  reset() {
    this.composeMailForm.reset();
  }

}
