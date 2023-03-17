import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { RegService } from '../services/reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  hide: boolean = true;
  loginInput: string = "";
  emailInput : string = ""; 
  passwordInput: string = "";

  constructor(
    private regService : RegService,
    private flashMessages: FlashMessagesService,
    private authService : AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signin: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
 
  userRegisterClick() {
    this.loginInput = this.signin.get('login')?.value; 
    this.emailInput = this.signin.get('email')?.value; 
    this.passwordInput = this.signin.get('password')?.value;
  
    const user = {
          login: this.loginInput,
          email: this.emailInput,
          password: this.passwordInput
        }
        
        if(!this.regService.checkName(user.login)){
            this.flashMessages.show('name not enter',{
              cssClass: 'alert-danger',
              timeout : 2000,
            })
          }else if(!this.regService.checkEmail(user.email)){
            this.flashMessages.show('email not enter',{
              cssClass: 'alert-danger',
              timeout : 2000,
            })
          }else if(!this.regService.checkPassword(user.password)){
            this.flashMessages.show('password not enter',{
              cssClass: 'alert-danger',
              timeout : 2000,
            })
          }

          this.authService
          .registerUser(user)
          .subscribe((res)=>{
            console.log(res);
             this.loginInput = '';
             this.emailInput = '';
             this.passwordInput = '';
             if(!res.success){
              this.flashMessages.show(res.msg,{
                cssClass: 'alert-danger',
                timeout : 2000,
              })
              // this.router.navigate([{outlets: {outletUserAuth: 'reg'}}]);
              this.router.navigate(['reg']);
            }else{
              this.flashMessages.show(res.msg,{
                cssClass: 'alert-success',
                timeout : 2000,
              })
              // this.router.navigate([{outlets: {outletUserAuth: 'auth'}}]);
              this.router.navigate(['auth']);
            }
          })
    
  }


}
