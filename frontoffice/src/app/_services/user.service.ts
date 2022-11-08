import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8086/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient) {}
    getAllUsers()
    { return this.httpClient.get('http://localhost:8086/api/user/getAllUsers'); }
    getUser(username: any)
    { return this.httpClient.get('http://localhost:8086/api/user/getUser/' + username); }
    getAccount(idUser: any)
    { return this.httpClient.get('http://localhost:8086/api/user/getAccount/' + idUser); }
    addUser(user: any)
    { return this.httpClient.post('$(this.API_URL}/add-User', user); }
    editUser(idUser: any, user: any)
    { return this.httpClient.put('http://localhost:8086/api/user/updateUser/' + idUser, user); }
    deleteUser(idUser: any)
    { return this.httpClient.delete('http://localhost:8086/api/user/deleteUser/' + idUser ); }
    forgotpassword(email: string)
    {
        console.log(email) ;
         this.httpClient.post<string>('http://localhost:8086/api/auth/forgot-password', email).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    resetpassword(token: any, password: any)
    {return this.httpClient.put('http://localhost:8086/api/auth/reset-password', {token, password}); }
}
