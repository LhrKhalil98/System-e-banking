import { Component, OnInit } from '@angular/core';

import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../../shared/Model/user";
import {Userservice} from "../../../shared/Service/userservice";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listUsers: any;
  userDetails: any;
  account: any;
  form: boolean = false;
  user!: User;
  closeResult!: string;
  constructor(private userservice: Userservice, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllUsers();

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
    }
  }

  getAllUsers()
  {
    this.userservice.getAllUsers().subscribe({
      next: (data) => {
        this.listUsers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
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
  addUser(user: any)
  {
    this.userservice.addUser(user).subscribe( () => { this.getAllUsers(); this.form = false; } );
  }

  editUser(idUser: any, user: User)
  {
    this.userservice.editUser(idUser, user).subscribe();
  }

  deleteUser(id: any)
  {
    this.userservice.deleteUser(id).subscribe(()=> this.getAllUsers());
    window.location.reload();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }

  close()
  {}
}

