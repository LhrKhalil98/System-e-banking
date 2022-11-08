import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {UserService} from '../../../_services/user.service';
import {User} from '../../../_models/user';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.scss']
})
export class SingleProfileComponent implements OnInit {

    currentUser: any;
    userDetails: any;
    account: any;
    user!: User;
    constructor(private token: TokenStorageService, private userservice: UserService) { }

    ngOnInit(): void {
        this.currentUser = this.token.getUser();
        this.getUser(this.currentUser.username);
        this.getAccount(this.currentUser.id);
        this.userDetails = {
            id: null,
            username: null,
            email: null,
            password: null,
            name: null,
            lastname: null,
            dateBirth: null,
            gender: null,
            job: null,
            adress: null,
            profilePic: null,
            identitycardPic: null,
            signaturePic: null,
            creationDate: null,
            active: null,
            verified: null,
            token: null,
            tokenCreationDate: null,
            verificationCode: null,
            badge: null
        };
        this.account = {
            id: null,
            balance: null,
            loans: null,
            associations: null,
            invests: null,
            transactionsAccounts: null
        };
    }
    getUser(username: any)
    {
        this.userservice.getUser(username).subscribe({
            next: (data) => {
                this.userDetails = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }
    getAccount(idUser: any)
    {
        this.userservice.getAccount(idUser).subscribe({
            next: (data) => {
                this.account = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }
    editUser(idUser: any, user: User)
    {
        this.userservice.editUser(idUser, user).subscribe();
    }
    public openPDF(): void {
        const DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
            const fileWidth = 208;
            const fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            const PDF = new jsPDF('p', 'mm', 'a4');
            const position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save('myprofile-cyberfin.pdf');
        });
    }
}



