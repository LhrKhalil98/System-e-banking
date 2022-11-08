import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {User} from '../../../_models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
    currentUser: any;
    user: any;
  constructor(private token: TokenStorageService, private userservice: UserService, private route: Router) { }
  ngOnInit(): void {
      this.currentUser = this.token.getUser();
      this.getUser(this.currentUser.username);
      this.user = {
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
  }
    getUser(username: any)
    {
        this.userservice.getUser(username).subscribe({
            next: (data) => {
                this.user = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }
    editUser(idUser: any, user: User)
    {
        this.userservice.editUser(idUser, user).subscribe();
        // this.route.navigate(['/single-profile'])
          //  .then(() => {
            //    window.location.reload();
            // });
    }
}
