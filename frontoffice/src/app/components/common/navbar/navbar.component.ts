import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
  constructor(private tokenStorageService: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;

          this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

          this.username = user.username;
      }
  }
    logout(): void {
        this.tokenStorageService.signOut();
        this.route.navigate(['/login'])
            .then(() => {
                window.location.reload();
            });

    }

}
