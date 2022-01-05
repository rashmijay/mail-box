import { Injectable } from '@angular/core';
import { IEmail } from '../../Interfaces/email';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor(private userService: UserService) { }

    getEmails() {
        return JSON.parse(localStorage.getItem('emails')) || [] as Array<IEmail>
    }
    getEmailsSendByMe() {
        const currentUser = localStorage.getItem('currentUser');
        const emails = JSON.parse(localStorage.getItem('emails')) || [];
        return Array.from(emails).find((email: IEmail) => email && email.from.toLowerCase() === currentUser.toLowerCase()) as IEmail;
    }
    getEmailsSentToMe() {
        const currentUser = this.userService.getUserById(localStorage.getItem('currentUser'));
        const emails = Array.from(JSON.parse(localStorage.getItem('emails') || '[]'));
        if (emails.length > 0) {
            const toMails = Array.from(emails).filter((email: IEmail) => email.to.includes(currentUser.username));
            const ccMails = Array.from(emails).filter((email: IEmail) => email.cc.includes(currentUser.username));
            return Array.from(new Set([...toMails.map((mail: IEmail) => mail.id), ...ccMails.map((mail: IEmail) => mail.id)])).map(id =>
                emails.find((mail: IEmail) => mail.id === id)
            );
        } else return null;
    }
    sendEmail(email: IEmail) {
        const currentUser = localStorage.getItem('currentUser');
        const emails = JSON.parse(localStorage.getItem('emails')) || [];
        localStorage.setItem('emails', JSON.stringify([...emails, { ...email, from: currentUser, id: new Date().getTime() }]));
    }

}
