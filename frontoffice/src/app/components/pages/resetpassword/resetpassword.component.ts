import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
token: any;
password: any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
    resetpassword(token, password)
    {
        this.userService.resetpassword(token, password).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
}
