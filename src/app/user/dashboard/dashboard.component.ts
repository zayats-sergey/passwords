import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {  DescriptionElement } from '../models/password.model'
import { ELEMENT_DATA } from '../data/password.data';
import { DashboardService } from '../services/dashboard.service';
import { forkJoin } from 'rxjs';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { DialogService } from '../services/dialog.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // providers: [
  //   { 
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: forwardRef(() => DashboardComponent),
  //   }
  // ]
})

export class DashboardComponent implements OnInit {
  dataSource: any = [];
  dialogElement: any = <any>{};
  // dataSource : DescriptionElement[] = ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'userLogin', 'nameElements', 'keyString', 'key', 'passwordElement', 'dellElement'];

  constructor(
    public authService: AuthService,
    private dashBoardService: DashboardService,
    public router: Router,
    public dialog: MatDialog,
    public dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.authService.currenObservable.subscribe((res)=>{
      // console.log(res);
    });

    this.dashBoardService.curentObservableElementDell.subscribe((data)=>{
      if(data !== null && data !== undefined ){
        this.dialogElement = data;
        };
        this.dataSource = this.dataSource.filter((o: any)=>o._id !== this.dialogElement._id);
      }); 
  }

  getData(){
    forkJoin({
       product: this.dashBoardService.getProduct()
    }).subscribe(({product})=>{
      this.dataSource = product;
      console.log(product);
    })
  }

  logoutUser(){
    this.authService
      .logout();
    this.router.navigate(['/reg']);  
  }
  
  openDialog(element: any){
    const dialogRef = this.dialog.open(MatDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.dialogService
      .onSelectElement(element)
      .subscribe((data)=>{
        console.log(data);
      })
  }



}
