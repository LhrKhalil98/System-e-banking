import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
email: any;
  constructor(public userService: UserService, private route: Router ) { }

  ngOnInit(){
  }
    forgotpassword()
    {
    this.userService.forgotpassword(this.email);
    this.route.navigate(['/reset-password']);
    }
}
