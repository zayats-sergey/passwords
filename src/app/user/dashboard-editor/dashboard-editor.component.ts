import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { forkJoin } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DashboardEditorService } from '../services/dashboard-editor.service';

@Component({
  selector: 'app-dashboard-editor',
  templateUrl: './dashboard-editor.component.html',
  styleUrls: ['./dashboard-editor.component.css']
})
export class DashboardEditorComponent implements OnInit {
  hide: boolean = true;
  positionInput: string = '';
  userLoginInput: string = '';
  nameElementsInput: string = '';
  keyInput: any;
  passwordElementInput: string = '';
  keyStringInput: string = '';

  constructor(
    public authService: AuthService,
    private dashBoardEditorService: DashboardEditorService,
    public router: Router,
    private flashMessages: FlashMessagesService,
  ) { }

  ngOnInit(): void {
    this.authService.currenObservable.subscribe((res)=>{
      console.log(res);
      this.userLoginInput = res;
      this.profileFormPassword.patchValue({
        userLogin : this.userLoginInput,
      });
    });
  };


  profileFormPassword = new FormGroup({
    position: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    userLogin: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    nameElements: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    key: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    passwordElement: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    keyString: new FormControl('', [Validators.required, Validators.minLength(3) ]),
  });

  passwordRegisterClick(){
    this.positionInput = this.profileFormPassword.get('position')?.value;
    this.userLoginInput = this.profileFormPassword.get('userLogin')?.value;
    this.nameElementsInput = this.profileFormPassword.get('nameElements')?.value;
    this.keyInput = this.profileFormPassword.get('key')?.value;
    this.passwordElementInput = this.profileFormPassword.get('passwordElement')?.value;
    this.keyStringInput = this.profileFormPassword.get('keyString')?.value;
 

    const somePasswordElemnt = {
      position: this.positionInput,
      userLogin : this.userLoginInput,
      nameElements: this.nameElementsInput,
      key: this.keyInput,
      passwordElement: this.passwordElementInput,
      keyString: this.keyStringInput
    };

    if(somePasswordElemnt.position === ''){
      this.flashMessages.show('enter position',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return
    }else if(somePasswordElemnt.userLogin === ''){
      this.flashMessages.show('enter userLogin',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return
    }else if(somePasswordElemnt.nameElements === ''){
      this.flashMessages.show('enter nameElements',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return

    }else if(somePasswordElemnt.key === '' && somePasswordElemnt.keyString === ''){
        this.flashMessages.show('enter key or keyString',{
          cssClass: 'alert-danger',
          timeout : 2000,
        })
      return
    }
    else if(somePasswordElemnt.key !== '' && somePasswordElemnt.keyString === '' ){
      somePasswordElemnt.keyString = '-' ;
      console.log(somePasswordElemnt.keyString);
    }
    else if(somePasswordElemnt.keyString !== ''){
      somePasswordElemnt.key._fileNames = '' ;
      console.log(typeof(somePasswordElemnt.key._fileNames));
    }

    else if(somePasswordElemnt.passwordElement === ''){
      this.flashMessages.show('enter passwordElement',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return
    }

    console.log(somePasswordElemnt);
    this.dashBoardEditorService
        .sendToMongo(somePasswordElemnt)
        .subscribe((data)=>{
          console.log(data, this.positionInput);
          this.profileFormPassword.setValue({
            position : '',
            userLogin : '',
            nameElements: '',
            key: '',
            passwordElement: '',
            keyString: '',
          });
        });
    this.router.navigate(['/dashboard']);


  };
 


 

}

