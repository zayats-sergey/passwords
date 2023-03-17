import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hide: boolean = true;
  loginUser: string = "";
  passwordUser: string = "";

  constructor(
    private flashMessages: FlashMessagesService,
    private authService : AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  })

  autorisationUser(){
    this.loginUser = this.profileForm.get('login')?.value; 
    this.passwordUser = this.profileForm.get('password')?.value;

    const user = {
      login: this.loginUser,
      password: this.passwordUser
    }
    if(user.password === ''){
      this.flashMessages.show('enter password',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return
    }

    this.authService
      .authUser(user)
      .subscribe((data)=>{
        console.log(data);
         this.loginUser = '';
         this.passwordUser = '';
         if(!data.success){
          this.flashMessages.show(data.msg,{
            cssClass: 'alert-danger',
            timeout : 2000,
          })
          this.router.navigate(['auth']);
        }else{
          this.flashMessages.show(data.msg,{
            cssClass: 'alert-success',
            timeout : 2000,
          })
          this.router.navigate(['dashboard']);
          this.authService.storeUser(data.user, data.token);
        }
      })

  }

}
