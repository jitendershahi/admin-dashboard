import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User


  constructor(private router:Router) { }


  ngOnInit() {
    this.user = {
    email:'',
    password:''
    }
  }

  onLogin() {
    localStorage.setItem('login','jeetsharma26121993@gmail.com')

  }

  // login() {
  //   localStorage.setItem('isLoggedin', 'jeetsharma26121993@gmail.com')
  //   this.router.navigate(['/dashboard'])
  // }

}
