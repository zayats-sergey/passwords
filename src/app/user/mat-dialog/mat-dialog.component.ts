import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {
  dialogElement: any;
  constructor(
    public dialogService: DialogService,
    public dashBoardService: DashboardService,
  ) { }

  ngOnInit(): void {
  }

  dellElement(){
    this.dialogService.curentObservable.subscribe((data)=>{
      if(data !== null && data !== undefined ){
        console.log(data);
        this.dialogElement = data;
        };
      }); 
      console.log(this.dialogElement);
      this.dashBoardService
        .dellElement(this.dialogElement)
        .subscribe((res)=>{
          console.log(res);
        })
  }

}
