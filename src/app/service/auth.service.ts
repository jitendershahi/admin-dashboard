import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(formvalue:any) {
    return this.http.post<Response>('http://dev.crownstack.net/v1/user/login',formvalue)
    .pipe(map((response: any) => response.json()));

  //   .map((response: any) => {
  //     if (response.status === 'Success') {
  //         console.log('response',response)
  //     }
  //     return response;
  // });
  }
}
