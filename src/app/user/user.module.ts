import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegService } from './services/reg.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { DashboardEditorComponent } from './dashboard-editor/dashboard-editor.component';
import { DashboardEditorService } from './services/dashboard-editor.service';
import { DashboardService } from './services/dashboard.service';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { DialogService } from './services/dialog.service';



@NgModule({
  declarations: [
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardEditorComponent,
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialsModule
    
  ],
  providers: [
    RegService,
    AuthService,
    DashboardEditorService,
    DashboardService,
    DialogService,
  ],
  exports: [
    FooterComponent,
  ]
})
export class UserModule { }
